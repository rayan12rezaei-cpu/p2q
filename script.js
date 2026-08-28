const SUPABASE_URL =
  "https://nahdmpxqnwemwlpxyzxt.supabase.co";

// Publishable key یا anon key
const SUPABASE_KEY =
  "sb_publishable_UfTXNkzJW5bt5qFXBH80uA_bSrqh-42";

const questions = [

  {
    q: "Which sentence is grammatically correct?",
    options: [
      "Where are Reza from?",
      "Where is Reza from?",
      "Where Reza is from?",
      "From where Reza are?"
    ],
    answer: 1
  },

  {
    q: "Sara is from Turkey. Ali is from Iran. Which statement is TRUE?",
    options: [
      "Sara is Iranian, but Ali is Turkish.",
      "Sara and Ali have the same nationality.",
      "Sara is Turkish, while Ali is Iranian.",
      "Sara and Ali are from Turkey."
    ],
    answer: 2
  },

  {
    q: "A: Where is your friend from? B: ________ A: Oh, so she's Canadian.",
    options: [
      "She's from Canada.",
      "She's Canada.",
      "She's from Canadian.",
      "She Canadian is."
    ],
    answer: 0
  },

  {
    q: "I usually go to school ________, but I visit my grandparents ________.",
    options: [
      "at Monday / in Friday",
      "on Monday / on Fridays",
      "in Monday / at Fridays",
      "on Monday / in Fridays"
    ],
    answer: 1
  },

  {
    q: "Ali has English class on Monday and Wednesday. He plays football on Tuesday. He visits his grandmother on Friday. Which statement is FALSE?",
    options: [
      "He has English twice a week.",
      "He plays football once a week.",
      "He visits his grandmother on a school day.",
      "He has English three days after football."
    ],
    answer: 3
  },

  {
    q: "Which sentence describes a repeated weekly activity most naturally?",
    options: [
      "I am usually playing football on Fridays.",
      "I usually play football on Fridays.",
      "I play usually football at Fridays.",
      "I usually am play football Fridays."
    ],
    answer: 1
  },

  {
    q: "A: Can your sister swim? B: ________",
    options: [
      "Yes, she can swim very well.",
      "Yes, she can to swim.",
      "Yes, she is can swim.",
      "Yes, she does can swim."
    ],
    answer: 0
  },

  {
    q: "Which sentence has a meaning different from the others?",
    options: [
      "I can speak English.",
      "I am able to speak English.",
      "I cannot speak English.",
      "I know how to speak English."
    ],
    answer: 2
  },

  {
    q: "Mina can play the piano and she can ride a bicycle, but she can't swim. Her brother can swim, but he can't play the piano. Which statement is correct?",
    options: [
      "Mina can do everything her brother can do.",
      "Mina and her brother can both play the piano.",
      "Mina can ride a bicycle, but her brother cannot.",
      "Her brother cannot swim."
    ],
    answer: 2
  },

  {
    q: "A: What's wrong with you? B: ________",
    options: [
      "I have a headache.",
      "I am a headache.",
      "I have headache.",
      "I headache."
    ],
    answer: 0
  },

  {
    q: "Which advice is the most appropriate for someone who has a toothache?",
    options: [
      "You should see a dentist.",
      "You should play football all day.",
      "You should eat more sweets.",
      "You should stay up late."
    ],
    answer: 0
  },

  {
    q: "Which sentence is NOT grammatically correct?",
    options: [
      "You should drink more water.",
      "You shouldn't eat too much fast food.",
      "You should to see a doctor.",
      "You should get some rest."
    ],
    answer: 2
  },

  {
    q: "The library is next to the bank. The hospital is opposite the bank. The school is between the library and the park. Which statement must be TRUE?",
    options: [
      "The bank is next to the hospital.",
      "The school is next to the bank.",
      "The library is opposite the park.",
      "The park is inside the hospital."
    ],
    answer: 0
  },

  {
    q: "Someone asks: “Excuse me. How can I get to the hospital?” Which response is the most appropriate?",
    options: [
      "It's a hospital.",
      "Go straight and turn left at the bank.",
      "I can go to the hospital.",
      "The hospital can go straight."
    ],
    answer: 1
  },

  {
    q: "Which pair contains two places that can reasonably be found in a city?",
    options: [
      "hospital – library",
      "headache – pharmacy",
      "nationality – school",
      "Monday – bank"
    ],
    answer: 0
  },

  {
    q: "Our village is small, but it is very beautiful. There are many farms around it, and people usually work together. Which conclusion is most reasonable?",
    options: [
      "The village has no farms.",
      "The village is necessarily a large city.",
      "Farming may be an important part of life there.",
      "People in the village never work."
    ],
    answer: 2
  },

  {
    q: "There ________ many trees around our village, but there ________ a large shopping center.",
    options: [
      "is / are",
      "are / isn't",
      "are / aren't",
      "isn't / are"
    ],
    answer: 2
  },

  {
    q: "Which question is the best match for the answer: “I usually read books in my free time.”",
    options: [
      "What do you usually do in your free time?",
      "Where are you from?",
      "What can you do?",
      "What's wrong with you?"
    ],
    answer: 0
  },

  {
    q: "Amir likes reading and drawing. He doesn't like playing computer games. His sister enjoys swimming and watching movies. Which statement is correct?",
    options: [
      "Amir enjoys computer games.",
      "Amir and his sister have exactly the same hobbies.",
      "Amir likes two activities mentioned in the text.",
      "His sister doesn't like swimming."
    ],
    answer: 2
  },

  {
    q: "Nima is from Iran. He goes to school from Saturday to Wednesday. He can play football, but he can't swim. On Thursday, he visits his grandparents. Last week, he had a headache, so he stayed home and rested. Which statement is NOT true?",
    options: [
      "Nima is Iranian.",
      "Nima can play football.",
      "Nima visits his grandparents on Friday.",
      "Nima had a health problem last week."
    ],
    answer: 2
  }

];

let currentQuestion = 0;

let answers =
  new Array(questions.length).fill(null);

let studentName = "";

let startTime = null;

let timerInterval = null;

let elapsedSeconds = 0;

function $(id) {
  return document.getElementById(id);
}

function showScreen(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.toggle(
        "active",
        screen.id === id
      );

    });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

function escapeHTML(text) {

  return String(text).replace(
    /[&<>"']/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char])
  );

}

function formatTime(seconds) {

  const minutes =
    String(Math.floor(seconds / 60))
      .padStart(2, "0");

  const secs =
    String(seconds % 60)
      .padStart(2, "0");

  return `${minutes}:${secs}`;

}

function startTimer() {

  stopTimer();

  startTime = Date.now();

  elapsedSeconds = 0;

  $("timer").textContent = "00:00";

  timerInterval = setInterval(() => {

    elapsedSeconds =
      Math.floor(
        (Date.now() - startTime) / 1000
      );

    $("timer").textContent =
      formatTime(elapsedSeconds);

  }, 1000);

}


function stopTimer() {

  if (timerInterval !== null) {

    clearInterval(timerInterval);

    timerInterval = null;

  }

}

function renderQuestion() {

  const question =
    questions[currentQuestion];


  /* Progress */

  $("progressText").textContent =
    `سؤال ${currentQuestion + 1} از ${questions.length}`;


  const answeredCount =
    answers.filter(
      answer => answer !== null
    ).length;


  $("answeredText").textContent =
    `${answeredCount} پاسخ`;


  $("progressBar").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;


  /* Options */

  const optionsHTML =
    question.options
      .map((option, index) => {

        const selected =
          answers[currentQuestion] === index;

        return `

          <label class="option ${selected ? "selected" : ""}">

            <input
              type="radio"
              name="question"
              value="${index}"
              ${selected ? "checked" : ""}
            >

            <span class="option-letter">
              ${["A", "B", "C", "D"][index]}
            </span>

            <span class="option-text">
              ${escapeHTML(option)}
            </span>

          </label>

        `;

      })
      .join("");


  $("questionContainer").innerHTML = `

    <article class="question-card glass">

      <div class="question-number">
        QUESTION ${String(currentQuestion + 1).padStart(2, "0")}
      </div>

      <div class="question-text">
        ${escapeHTML(question.q)}
      </div>

      <div class="options">
        ${optionsHTML}
      </div>

    </article>

  `;


  document
    .querySelectorAll(
      'input[name="question"]'
    )
    .forEach(input => {

      input.addEventListener(
        "change",
        event => {

          answers[currentQuestion] =
            Number(event.target.value);

          renderQuestion();

        }
      );

    });



  $("prevButton").disabled =
    currentQuestion === 0;


  $("nextButton").textContent =
    currentQuestion === questions.length - 1
      ? "ثبت آزمون ✓"
      : "بعدی ←";

}



function calculateResult() {

  let correct = 0;

  for (
    let i = 0;
    i < questions.length;
    i++
  ) {

    if (
      answers[i] ===
      questions[i].answer
    ) {

      correct++;

    }

  }


  const blank =
    answers.filter(
      answer => answer === null
    ).length;


  const wrong =
    questions.length -
    correct -
    blank;


  const percentage =
    Math.round(
      (correct / questions.length) * 100
    );


  return {
    correct,
    wrong,
    blank,
    percentage
  };

}

function finishQuiz() {

  stopTimer();


  const result =
    calculateResult();


  $("resultTitle").textContent =
    `${studentName}، آزمون تمام شد!`;


  $("scoreValue").textContent =
    `${result.correct}/${questions.length}`;


  $("percentageValue").textContent =
    `${result.percentage}٪`;


  $("correctValue").textContent =
    result.correct;


  $("wrongValue").textContent =
    result.wrong;


  $("blankValue").textContent =
    result.blank;


  $("timeValue").textContent =
    formatTime(elapsedSeconds);


  $("scoreCircle")
    .style
    .setProperty(
      "--score",
      `${result.percentage}%`
    );


  renderReview();

  showScreen("resultScreen");


  saveResult(
    result.correct,
    result.percentage
  );

}

function renderReview() {

  $("reviewContainer").innerHTML =
    questions
      .map((question, index) => {

        const userAnswer =
          answers[index];


        const isCorrect =
          userAnswer === question.answer;


        const answerText =
          userAnswer === null
            ? "بدون پاسخ"
            : `${["A", "B", "C", "D"][userAnswer]}) ${question.options[userAnswer]}`;


        const correctText =
          `${["A", "B", "C", "D"][question.answer]}) ${question.options[question.answer]}`;


        return `

          <div
            class="review-item ${isCorrect ? "correct" : "wrong"}">

            <b>
              ${index + 1}.
              ${isCorrect ? "✓ درست" : "✕ نادرست"}
            </b>

            <small>

              پاسخ شما:
              ${escapeHTML(answerText)}

              ${
                isCorrect
                  ? ""
                  : `
                    <br>
                    پاسخ صحیح:
                    ${escapeHTML(correctText)}
                  `
              }

            </small>

          </div>

        `;

      })
      .join("");

}

async function saveResult(
  score,
  percentage
) {

  const status =
    $("saveStatus");


  /* Configuration check */

  if (
    !SUPABASE_URL ||
    SUPABASE_URL.includes("YOUR_") ||
    !SUPABASE_KEY ||
    SUPABASE_KEY.includes("YOUR_")
  ) {

    status.textContent =
      "Supabase هنوز در فایل JavaScript تنظیم نشده است.";

    status.style.color =
      "var(--danger)";

    console.error(
      "Supabase URL or key is missing."
    );

    return;

  }


  status.textContent =
    "در حال ثبت نتیجه...";

  status.style.color =
    "var(--muted)";


  const endpoint =
    `${SUPABASE_URL}/rest/v1/quiz_results`;


  const payload = {

    name:
      studentName.trim(),

    score:
      score,

    total_questions:
      questions.length,

    percentage:
      percentage,

    elapsed_seconds:
      elapsedSeconds

  };


  try {

    console.log(
      "Sending result to:",
      endpoint
    );


    const response =
      await fetch(
        endpoint,
        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

            "apikey":
              SUPABASE_KEY,

            "Authorization":
              `Bearer ${SUPABASE_KEY}`,

            "Prefer":
              "return=minimal"

          },

          body:
            JSON.stringify(payload)

        }
      );


    const responseText =
      await response.text();


    if (!response.ok) {

      console.error(
        "Supabase HTTP error:",
        response.status,
        responseText
      );


      status.textContent =
        `خطا ${response.status}: ${responseText}`;

      status.style.color =
        "var(--danger)";

      return;

    }


    console.log(
      "Result successfully saved."
    );


    status.textContent =
      "نتیجه با موفقیت ثبت شد ✓";

    status.style.color =
      "var(--success)";


  }

  catch (error) {

    console.error(
      "Network / Supabase error:",
      error
    );


    status.textContent =
      "خطا در ارتباط با Supabase.";

    status.style.color =
      "var(--danger)";

  }

}

$("loginForm")
  .addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const name =
        $("studentName")
          .value
          .trim();


      if (name.length < 2) {

        $("studentName").focus();

        return;

      }


      studentName =
        name;


      currentQuestion = 0;


      answers =
        new Array(questions.length)
          .fill(null);


      elapsedSeconds = 0;


      $("welcomeName").textContent =
        `سلام ${studentName} 👋`;


      $("timer").textContent =
        "00:00";


      showScreen(
        "quizScreen"
      );


      startTimer();


      renderQuestion();

    }
  );


$("prevButton")
  .addEventListener(
    "click",
    () => {

      if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();

      }

    }
  );



$("nextButton")
  .addEventListener(
    "click",
    () => {

      if (
        currentQuestion <
        questions.length - 1
      ) {

        currentQuestion++;

        renderQuestion();

      }

      else {

        finishQuiz();

      }

    }
  );



$("restartButton")
  .addEventListener(
    "click",
    () => {

      stopTimer();


      $("studentName").value =
        studentName;


      showScreen(
        "loginScreen"
      );

    }
  );


$("themeToggle")
  .addEventListener(
    "click",
    () => {

      const root =
        document.documentElement;


      const isDark =
        root.dataset.theme === "dark";


      root.dataset.theme =
        isDark
          ? "light"
          : "dark";


      $("themeToggle").textContent =
        isDark
          ? "🌙"
          : "☀️";


      localStorage.setItem(
        "prospect-theme",
        root.dataset.theme
      );

    }
  );


(function initializeTheme() {

  const saved =
    localStorage.getItem(
      "prospect-theme"
    );


  const prefersDark =
    window.matchMedia &&
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;


  const isDark =
    saved === "dark" ||
    (!saved && prefersDark);


  document.documentElement
    .dataset
    .theme =
      isDark
        ? "dark"
        : "light";


  $("themeToggle").textContent =
    isDark
      ? "☀️"
      : "🌙";

})();
