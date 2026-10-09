/* Here With Her — shared behavior. No tracking, no storage, no network calls.
   All text comes from data-* attributes written by scripts/generate.js. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  function fill(template, values) {
    return template.replace(/\{(\w+)\}/g, function (_, k) {
      return values[k];
    });
  }

  /* ---------- For her box: copy and share ---------- */
  var box = document.querySelector("[data-for-her]");
  if (box) {
    var textarea = box.querySelector("textarea");
    var status = box.querySelector("[data-status]");
    var linkOut = box.querySelector("[data-link]");
    var copyBtn = box.querySelector("[data-copy]");
    var shareBtn = box.querySelector("[data-share]");
    // The link is this page's own clean URL, built from wherever the site is hosted.
    var url = location.origin + box.getAttribute("data-path");
    if (linkOut) linkOut.textContent = url;

    var fullText = function () {
      return textarea.value.trim() + "\n\n" + url;
    };
    var say = function (msg) {
      status.textContent = msg;
    };

    copyBtn.addEventListener("click", function () {
      var text = fullText();
      var done = function () { say(box.getAttribute("data-copied")); };
      var fail = function () {
        textarea.focus();
        textarea.select();
        say(box.getAttribute("data-copy-failed"));
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done, function () { legacy(text) ? done() : fail(); });
      } else {
        legacy(text) ? done() : fail();
      }
    });

    function legacy(text) {
      var tmp = document.createElement("textarea");
      tmp.value = text;
      tmp.setAttribute("readonly", "");
      tmp.style.position = "fixed";
      tmp.style.opacity = "0";
      document.body.appendChild(tmp);
      tmp.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(tmp);
      return ok;
    }

    if (shareBtn && navigator.share) {
      shareBtn.hidden = false;
      shareBtn.addEventListener("click", function () {
        navigator.share({ text: textarea.value.trim(), url: url }).catch(function () {});
      });
    }
  }

  /* ---------- Story pager ---------- */
  var story = document.querySelector("[data-story]");
  if (story) {
    var pages = story.querySelectorAll(".story-page");
    var prev = story.querySelector("[data-prev]");
    var next = story.querySelector("[data-next]");
    var count = story.querySelector("[data-count]");
    var tpl = story.getAttribute("data-count-template");
    var nextLabel = next.getAttribute("data-label");
    var againLabel = next.getAttribute("data-again");
    var cur = 0;

    var show = function (n, moveFocus) {
      cur = n;
      pages.forEach(function (p, i) { p.hidden = i !== n; });
      count.textContent = fill(tpl, { n: n + 1, total: pages.length });
      prev.disabled = n === 0;
      prev.style.visibility = n === 0 ? "hidden" : "visible";
      next.textContent = n === pages.length - 1 ? againLabel : nextLabel;
      if (moveFocus) pages[n].focus();
    };
    pages.forEach(function (p) { p.setAttribute("tabindex", "-1"); });
    prev.addEventListener("click", function () { if (cur > 0) show(cur - 1, true); });
    next.addEventListener("click", function () {
      show(cur === pages.length - 1 ? 0 : cur + 1, true);
    });
    show(0, false);
  }

  /* ---------- Quiz ---------- */
  var quiz = document.querySelector("[data-quiz]");
  if (quiz) {
    var qs = JSON.parse(quiz.querySelector("[data-quiz-data]").textContent);
    var T = quiz.dataset;
    var els = {
      progress: quiz.querySelector("[data-q-progress]"),
      statement: quiz.querySelector("[data-q-statement]"),
      choices: quiz.querySelector("[data-q-choices]"),
      yes: quiz.querySelector("[data-q-true]"),
      no: quiz.querySelector("[data-q-false]"),
      feedback: quiz.querySelector("[data-q-feedback]"),
      verdict: quiz.querySelector("[data-q-verdict]"),
      why: quiz.querySelector("[data-q-why]"),
      next: quiz.querySelector("[data-q-next]"),
      question: quiz.querySelector("[data-q-question]"),
      result: quiz.querySelector("[data-q-result]"),
      score: quiz.querySelector("[data-q-score]"),
      message: quiz.querySelector("[data-q-message]"),
      retake: quiz.querySelector("[data-q-retake]"),
    };
    var messages = JSON.parse(quiz.querySelector("[data-quiz-messages]").textContent);
    var i = 0, score = 0, answered = false;

    var render = function () {
      answered = false;
      var q = qs[i];
      els.question.hidden = false;
      els.result.hidden = true;
      els.progress.textContent = fill(T.progress, { n: i + 1, total: qs.length });
      els.statement.textContent = q.statement;
      [els.yes, els.no].forEach(function (b) {
        b.disabled = false;
        b.classList.remove("picked-right", "picked-wrong");
      });
      els.feedback.hidden = true;
    };

    var answer = function (choice) {
      if (answered) return;
      answered = true;
      var q = qs[i];
      var right = choice === q.answer;
      if (right) score++;
      [els.yes, els.no].forEach(function (b) { b.disabled = true; });
      (choice ? els.yes : els.no).classList.add(right ? "picked-right" : "picked-wrong");
      els.verdict.textContent = right ? T.correct : T.incorrect;
      els.why.textContent = q.explanation;
      els.next.textContent = i === qs.length - 1 ? T.seeScore : T.next;
      els.feedback.hidden = false;
      els.next.focus();
    };

    els.yes.addEventListener("click", function () { answer(true); });
    els.no.addEventListener("click", function () { answer(false); });
    els.next.addEventListener("click", function () {
      if (i < qs.length - 1) {
        i++;
        render();
        els.statement.focus();
      } else {
        els.question.hidden = true;
        els.result.hidden = false;
        els.score.textContent = fill(T.scoreTemplate, { score: score, total: qs.length });
        var msg = messages[0].text;
        messages.forEach(function (m) { if (score >= m.min) msg = m.text; });
        els.message.textContent = msg;
        els.score.focus();
      }
    });
    els.retake.addEventListener("click", function () {
      i = 0;
      score = 0;
      render();
      els.statement.focus();
    });
    els.statement.setAttribute("tabindex", "-1");
    els.score.setAttribute("tabindex", "-1");
    render();
  }
})();
