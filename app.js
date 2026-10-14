/**
 * 초등학교 5학년 미술사조 퀴즈 웹앱
 * JavaScript 로직
 */

// 1. 퀴즈 데이터 정의 (초등학교 5학년 눈높이에 맞춘 10대 미술사조 문제)
const QUIZ_DATA = [
  {
    id: 1,
    tag: "르네상스",
    question: "수학적인 원근법을 사용해 공간을 깊이 있게 표현하고, 인물의 모습을 진짜처럼 사실적으로 묘사한 14~16세기 미술은 무엇일까요? (대표 화가: 레오나르도 다빈치)",
    options: [
      "르네상스",
      "팝아트",
      "야수파",
      "입체주의"
    ],
    answer: 0,
    explanation: "르네상스는 대상을 실제 모습처럼 정확하고 사실적으로 그렸으며, 가까운 것은 크게, 먼 것은 작게 그리는 원근법을 완성했어요."
  },
  {
    id: 2,
    tag: "인상주의",
    question: "화실 밖으로 나가 햇빛과 시간에 따라 시시각각 변화하는 찬란한 빛과 색채의 순간을 포착해 그린 미술사조는 무엇일까요? (대표 화가: 클로드 모네)",
    options: [
      "고딕 미술",
      "인상주의",
      "추상주의",
      "미래주의"
    ],
    answer: 1,
    explanation: "인상주의 화가들은 야외에서 빠르게 붓을 움직여 햇빛의 반사와 순간적인 빛의 인상을 맑고 밝은 색채로 담아냈어요."
  },
  {
    id: 3,
    tag: "후기 인상주의",
    question: "눈에 보이는 풍경 그대로보다, 화가 자신의 마음속 깊은 슬픔과 열정 같은 강렬한 감정을 소용돌이치는 거친 붓자국으로 그린 화가 '빈센트 반 고흐'의 미술사조는?",
    options: [
      "로코코",
      "미니멀리즘",
      "후기 인상주의",
      "낭만주의"
    ],
    answer: 2,
    explanation: "반 고흐 같은 후기 인상주의 화가들은 겉모습 묘사를 넘어서 화가의 개성과 내면의 뜨거운 감정을 캔버스에 쏟아부었어요."
  },
  {
    id: 4,
    tag: "야수파 (포비즘)",
    question: "사물의 원래 색깔에 얽매이지 않고, 빨간 하늘이나 초록색 얼굴처럼 눈이 부시도록 강렬하고 대담한 원색을 뿜어낸 앙리 마티스의 미술사조는 무엇일까요?",
    options: [
      "야수파",
      "극사실주의",
      "바로크",
      "고전주의"
    ],
    answer: 0,
    explanation: "야수파는 사물의 진짜 색깔 대신 화가가 느끼는 감정에 따라 과감한 원색을 사용하여 '마치 야수처럼 거칠고 힘차다'는 평가를 받았어요."
  },
  {
    id: 5,
    tag: "입체주의 (큐비즘)",
    question: "사물을 한쪽 방향에서만 보지 않고 앞, 옆, 위 등 여러 각도에서 본 모습을 네모·세모 같은 조각으로 해체해 한 화면에 합쳐서 그린 피카소의 미술사조는?",
    options: [
      "낭만주의",
      "점묘파",
      "입체주의",
      "바우하우스"
    ],
    answer: 2,
    explanation: "입체주의(큐비즘)는 여러 시점에서 관찰한 대상의 다양한 모습을 평면 캔버스 위에 기하학적인 입체 조각들로 재구성해 그렸어요."
  },
  {
    id: 6,
    tag: "초현실주의",
    question: "시계가 치즈처럼 녹아내리거나 방 안에 거대한 초록 사과가 가득 차 있는 것처럼, 꿈이나 무의식 속 신비롭고 엉뚱한 상상을 그린 미술사조는? (대표 화가: 달리, 마그리트)",
    options: [
      "초현실주의",
      "자연주의",
      "풍속화",
      "신라 미술"
    ],
    answer: 0,
    explanation: "초현실주의는 현실에서는 일어날 수 없는 기발한 꿈과 상상의 세계를 사실적이면서도 엉뚱하게 결합해 신비로운 느낌을 줍니다."
  },
  {
    id: 7,
    tag: "추상미술",
    question: "사람이나 꽃 같은 구체적인 사물의 형태를 그리지 않고, 점, 선, 면과 색채의 순수한 어울림만으로 마음속 감정과 리듬을 음악처럼 표현한 칸딘스키와 몬드리안의 미술은?",
    options: [
      "민화",
      "추상미술",
      "도예",
      "동굴벽화"
    ],
    answer: 1,
    explanation: "추상미술은 겉모양을 흉내 내는 대신 순수한 선과 형태, 색의 조화만으로 화가의 느낌과 감정을 전하는 미술이에요."
  },
  {
    id: 8,
    tag: "팝아트",
    question: "만화 속 주인공, 신문 광고, 코카콜라 병, 마릴린 먼로처럼 대중에게 친숙한 일상 속 이미지와 상품을 화려한 색감으로 표현한 앤디 워홀의 현대 미술은?",
    options: [
      "중세 미술",
      "비잔틴 미술",
      "팝아트",
      "비구상 미술"
    ],
    answer: 2,
    explanation: "팝아트는 '인기 있는 대중 예술(Popular Art)'이란 뜻으로, 누구나 잘 알고 있는 일상 상품과 대중문화를 예술 작품으로 만들었어요."
  },
  {
    id: 9,
    tag: "점묘파 (신인상주의)",
    question: "물감을 팔레트에서 미리 섞지 않고, 캔버스 위에 순수한 원색의 작은 점들을 무수히 콕콕 찍어서 완성한 쇠라의 '그랑드 자트 섬의 일요일 오후'와 관련된 미술사조는?",
    options: [
      "점묘파",
      "옵아트",
      "대지미술",
      "행위예술"
    ],
    answer: 0,
    explanation: "점묘파는 물감을 섞으면 색이 어두워지기 때문에, 점들을 촘촘하게 찍어 우리 눈에서 자연스럽게 맑은 색으로 섞여 보이도록 과학적으로 그렸어요."
  },
  {
    id: 10,
    tag: "비디오 아트",
    question: "텔레비전 모니터, 전자 비디오, 디지털 영상 기기를 캔버스와 붓 삼아 새로운 시각 예술로 탄생시킨 한국 출신의 세계적인 예술가 '백남준' 선생님의 미술 분야는?",
    options: [
      "목판화",
      "비디오 아트",
      "한국화",
      "단색화"
    ],
    answer: 1,
    explanation: "백남준 선생님은 브라운관 TV와 전자 기기를 활용해 소리와 움직이는 영상을 담은 '비디오 아트'를 세계 최초로 개척하셨어요."
  }
];

// 2. 앱 상태 변수
let currentQuestionIndex = 0;
let userAnswers = []; // 각 문제별 사용자 선택 및 정답 여부 기록
let score = 0;
let soundEnabled = true;
let isTvMode = false;

// 3. Web Audio API를 활용한 효과음 생성기 (외부 파일 없이 100% 자급자족 사운드)
const SoundEffects = {
  ctx: null,

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  playTone(frequency, type, duration, startTime = 0, gainLevel = 0.15) {
    if (!soundEnabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime + startTime);

      gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + startTime);
      osc.stop(this.ctx.currentTime + startTime + duration);
    } catch (e) {
      console.warn("Audio error", e);
    }
  },

  playCorrect() {
    this.init();
    // 청명하고 경쾌한 도-미-솔 3화음 (딩동댕!)
    this.playTone(523.25, 'triangle', 0.18, 0.0, 0.25); // C5
    this.playTone(659.25, 'triangle', 0.18, 0.12, 0.25); // E5
    this.playTone(783.99, 'triangle', 0.35, 0.24, 0.3);  // G5
  },

  playWrong() {
    this.init();
    // 묵직한 하강음 (띡-띡)
    this.playTone(320, 'sawtooth', 0.18, 0.0, 0.2);
    this.playTone(240, 'sawtooth', 0.25, 0.15, 0.22);
  },

  playFanfare() {
    this.init();
    // 결과 화면 축하 팡파레
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      this.playTone(freq, 'triangle', 0.3, i * 0.15, 0.25);
    });
    this.playTone(1046.50, 'triangle', 0.6, 0.65, 0.3);
  }
};

// 4. DOM 요소 캐싱
const screenStart = document.getElementById("screen-start");
const screenQuiz = document.getElementById("screen-quiz");
const screenResult = document.getElementById("screen-result");

const startBtn = document.getElementById("start-btn");
const soundBtn = document.getElementById("sound-btn");
const tvModeBtn = document.getElementById("tv-mode-btn");

const currentQNumEl = document.getElementById("current-q-num");
const totalQNumEl = document.getElementById("total-q-num");
const progressFillEl = document.getElementById("progress-fill");
const currentLiveScoreEl = document.getElementById("current-live-score");

const questionThemeTag = document.getElementById("question-theme-tag");
const questionTextEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const feedbackContainer = document.getElementById("feedback-container");
const feedbackIconEl = document.getElementById("feedback-icon");
const feedbackTitleEl = document.getElementById("feedback-title");
const explanationTextEl = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");

const finalScoreEl = document.getElementById("final-score");
const correctCountEl = document.getElementById("correct-count");
const resultBadgeEmojiEl = document.getElementById("result-badge-emoji");
const resultGradeTitleEl = document.getElementById("result-grade-title");
const resultMessageEl = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");
const toggleReviewBtn = document.getElementById("toggle-review-btn");
const reviewSection = document.getElementById("review-section");
const reviewList = document.getElementById("review-list");

// 5. 화면 전환 함수
function showScreen(screen) {
  [screenStart, screenQuiz, screenResult].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 6. 퀴즈 초기화 및 시작
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  totalQNumEl.textContent = QUIZ_DATA.length;
  currentLiveScoreEl.textContent = "0점";
  reviewSection.classList.add("hidden");
  toggleReviewBtn.textContent = "📋 문제 모아보기 (해설 복습)";
  
  SoundEffects.init();
  showScreen(screenQuiz);
  loadQuestion(currentQuestionIndex);
}

// 7. 문제 로드 및 렌더링
function loadQuestion(index) {
  const qData = QUIZ_DATA[index];

  // 진행 상태 업데이트
  currentQNumEl.textContent = index + 1;
  const progressPercent = ((index + 1) / QUIZ_DATA.length) * 100;
  progressFillEl.style.width = `${progressPercent}%`;

  // 태그 및 문제 텍스트
  questionThemeTag.textContent = `사조 #${index + 1} : ${qData.tag}`;
  questionTextEl.textContent = `Q${index + 1}. ${qData.question}`;

  // 피드백 영역 숨기기 및 초기화
  feedbackContainer.classList.add("hidden");
  feedbackContainer.classList.remove("is-correct", "is-wrong");

  // 보기 버튼 생성
  optionsContainer.innerHTML = "";
  const numLabels = ["①", "②", "③", "④"];

  qData.options.forEach((optText, optIdx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.setAttribute("data-index", optIdx);

    btn.innerHTML = `
      <span class="option-num">${numLabels[optIdx]}</span>
      <span class="option-text">${optText}</span>
    `;

    btn.addEventListener("click", () => handleOptionClick(optIdx));
    optionsContainer.appendChild(btn);
  });
}

// 8. 보기 선택 시 정답 판별 및 피드백 표시
function handleOptionClick(selectedIndex) {
  const qData = QUIZ_DATA[currentQuestionIndex];
  const isCorrect = selectedIndex === qData.answer;

  // 모든 보기 버튼 비활성화 (중복 클릭 방지)
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    score += 10;
    currentLiveScoreEl.textContent = `${score}점`;
    buttons[selectedIndex].classList.add("selected-correct");
    SoundEffects.playCorrect();

    feedbackContainer.className = "feedback-box is-correct";
    feedbackIconEl.textContent = "🎉";
    feedbackTitleEl.textContent = "정답입니다! 훌륭해요!";
  } else {
    buttons[selectedIndex].classList.add("selected-wrong");
    // 정답인 보기도 친절하게 안내
    buttons[qData.answer].classList.add("highlight-answer");
    SoundEffects.playWrong();

    feedbackContainer.className = "feedback-box is-wrong";
    feedbackIconEl.textContent = "💡";
    feedbackTitleEl.textContent = `아쉬워요! 정답은 [${qData.options[qData.answer]}]입니다.`;
  }

  // 선택되지 않은 다른 보기들은 흐리게 처리
  buttons.forEach((btn, idx) => {
    if (idx !== selectedIndex && idx !== qData.answer) {
      btn.classList.add("dimmed");
    }
  });

  // 1~2문장의 쉬운 해설 표시
  explanationTextEl.textContent = qData.explanation;
  feedbackContainer.classList.remove("hidden");

  // 기록 저장 (복습용)
  userAnswers.push({
    questionIndex: currentQuestionIndex,
    selected: selectedIndex,
    correct: qData.answer,
    isCorrect: isCorrect
  });

  // 마지막 문제일 경우 버튼 텍스트 변경
  if (currentQuestionIndex === QUIZ_DATA.length - 1) {
    nextBtn.innerHTML = "<span>결과 점수 확인하기 🏆</span>";
  } else {
    nextBtn.innerHTML = "<span>다음 문제로 넘어가기 👉</span>";
  }

  // 피드백 영역으로 부드럽게 스크롤
  setTimeout(() => {
    feedbackContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 100);
}

// 9. 다음 문제로 이동 또는 결과 화면
function handleNextQuestion() {
  if (currentQuestionIndex < QUIZ_DATA.length - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  } else {
    showResultScreen();
  }
}

// 10. 결과 화면 렌더링
function showResultScreen() {
  showScreen(screenResult);

  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  finalScoreEl.textContent = score;
  correctCountEl.textContent = correctCount;

  // 점수별 칭찬 메시지 & 등급 (초등학생 눈높이)
  let badgeEmoji = "🎨";
  let gradeTitle = "";
  let message = "";

  if (score === 100) {
    badgeEmoji = "👑";
    gradeTitle = "만점! 전설의 미술사 마스터!";
    message = "10문제 모두 맞혔어요! 르네상스부터 현대 미술까지 완벽하게 꿰뚫고 있는 진정한 미술 천재군요!";
    startConfetti();
  } else if (score >= 80) {
    badgeEmoji = "🥇";
    gradeTitle = "대단해요! 미술관 꼬마 큐레이터!";
    message = "미술사조를 정말 훌륭하게 이해하고 있어요! 주변 친구들에게도 멋지게 설명해 줄 수 있겠어요.";
    startConfetti();
  } else if (score >= 60) {
    badgeEmoji = "🥈";
    gradeTitle = "참 잘했어요! 호기심 많은 미술 탐험가!";
    message = "기본기가 탄탄하네요! 헷갈렸던 문제들의 해설을 한 번 더 살펴보면 곧 100점이 될 거예요.";
  } else {
    badgeEmoji = "🌱";
    gradeTitle = "화이팅! 새싹 미술 꿈나무!";
    message = "미술사조는 이름이 낯설 수 있지만 알수록 정말 흥미진진하답니다. '다시 풀기'로 한 번 더 도전해 볼까요?";
  }

  resultBadgeEmojiEl.textContent = badgeEmoji;
  resultGradeTitleEl.textContent = gradeTitle;
  resultMessageEl.textContent = message;

  SoundEffects.playFanfare();
  renderReviewList();
}

// 11. 전체 문제 복습 리스트 렌더링
function renderReviewList() {
  reviewList.innerHTML = "";
  const numLabels = ["①", "②", "③", "④"];

  QUIZ_DATA.forEach((qData, idx) => {
    const userAns = userAnswers[idx];
    const itemEl = document.createElement("div");
    itemEl.className = `review-item ${userAns.isCorrect ? "was-correct" : "was-wrong"}`;

    const userSelectedLabel = `${numLabels[userAns.selected]} ${qData.options[userAns.selected]}`;
    const correctLabel = `${numLabels[qData.answer]} ${qData.options[qData.answer]}`;

    itemEl.innerHTML = `
      <div class="review-item-header">
        <span>Q${idx + 1}. [${qData.tag}]</span>
        <span class="review-item-status ${userAns.isCorrect ? 'status-tag-correct' : 'status-tag-wrong'}">
          ${userAns.isCorrect ? '✓ 정답 (+10점)' : '✗ 오답'}
        </span>
      </div>
      <div class="review-item-q">${qData.question}</div>
      <div class="review-item-answers">
        <div><strong>내가 고른 답:</strong> ${userSelectedLabel}</div>
        <div><strong>정답:</strong> <span style="color: var(--color-magenta); font-weight: 900;">${correctLabel}</span></div>
      </div>
      <div class="review-item-exp">
        <strong>💡 해설:</strong> ${qData.explanation}
      </div>
    `;

    reviewList.appendChild(itemEl);
  });
}

// 12. 간단한 축하 폭죽(Confetti) 효과 - 순수 캔버스 구현
function startConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const container = canvas.parentElement;
  
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;

  const confettiPieces = [];
  const colors = ["#FF007F", "#FFE500", "#121212", "#FFFFFF", "#C70062"];

  for (let i = 0; i < 70; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.3,
      size: Math.random() * 9 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 3 + 2,
      speedX: (Math.random() - 0.5) * 4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8
    });
  }

  let animationFrame;
  let counter = 0;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();

      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });

    counter++;
    if (counter < 240) { // 약 4초 동안 진행
      animationFrame = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  animate();
}

// 13. 이벤트 리스너 바인딩
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", handleNextQuestion);
restartBtn.addEventListener("click", startQuiz);

// 효과음 토글
soundBtn.addEventListener("click", () => {
  SoundEffects.init();
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    soundBtn.innerHTML = `🔊 <span class="btn-text">소리 ON</span>`;
    soundBtn.classList.remove("active");
  } else {
    soundBtn.innerHTML = `🔇 <span class="btn-text">소리 OFF</span>`;
    soundBtn.classList.add("active");
  }
});

// TV 모드 (대형 글자 모드) 토글
tvModeBtn.addEventListener("click", () => {
  isTvMode = !isTvMode;
  document.body.classList.toggle("tv-mode", isTvMode);
  if (isTvMode) {
    tvModeBtn.innerHTML = `📺 <span class="btn-text">TV 모드 ON</span>`;
    tvModeBtn.classList.add("active");
  } else {
    tvModeBtn.innerHTML = `📺 <span class="btn-text">TV 모드</span>`;
    tvModeBtn.classList.remove("active");
  }
});

// 복습하기 (오답노트) 접기/펼치기
toggleReviewBtn.addEventListener("click", () => {
  const isHidden = reviewSection.classList.toggle("hidden");
  if (isHidden) {
    toggleReviewBtn.textContent = "📋 문제 모아보기 (해설 복습)";
  } else {
    toggleReviewBtn.textContent = "▲ 해설 복습 접기";
    reviewSection.scrollIntoView({ behavior: "smooth" });
  }
});
