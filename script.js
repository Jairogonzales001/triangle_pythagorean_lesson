// State Management
let currentPhase = 1;
let totalPhases = 5;
let guidedExercisesDone = 0;
let independentScore = 0;
let independentAnswered = 0;

// Independent Practice Data - Varied Question Types
const independentProblems = [
    { type: 'classify', question: 'Sides: 6, 8, 10', answer: 'right', display: '6, 8, 10' },
    { type: 'classify', question: 'Sides: 4, 5, 10', answer: 'no', display: '4, 5, 10' },
    { type: 'range', question: 'Two sides are 5 and 9. Third side between?', answer: '4-14', display: 'Sides 5 and 9' },
    { type: 'classify', question: 'Sides: 5, 7, 10', answer: 'obtuse', display: '5, 7, 10' },
    { type: 'word', question: '13-ft ladder, base 5 ft from wall. Height?', answer: '12', display: 'Ladder problem' },
    { type: 'classify', question: 'Sides: 7, 8, 9', answer: 'acute', display: '7, 8, 9' },
    { type: 'find-hyp', question: 'Right triangle legs 9 and 12. Hypotenuse?', answer: '15', display: 'Find hypotenuse' },
    { type: 'classify', question: 'Sides: 1, 2, 3', answer: 'no', display: '1, 2, 3' },
    { type: 'word', question: 'Garden sides 8m, 15m, 17m. Right triangle?', answer: 'yes', display: 'Garden problem' },
    { type: 'invalid-side', question: 'Sides 7 and 12. Which NOT valid third side?', answer: '19', display: 'Invalid third side' },
    { type: 'find-leg', question: 'Hypotenuse 10, leg 6. Other leg?', answer: '8', display: 'Find missing leg' },
    { type: 'word', question: 'TV 36in x 27in. Diagonal?', answer: '45', display: 'TV diagonal' }
];

let studentAnswers = {};

// Phase Navigation
function updateProgress() {
    const progress = ((currentPhase - 1) / (totalPhases - 1)) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = Math.round(progress) + '%';

    document.querySelectorAll('.phase-dot').forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index + 1 < currentPhase) {
            dot.classList.add('completed');
        } else if (index + 1 === currentPhase) {
            dot.classList.add('active');
        }
    });
}

function showPhase(phase) {
    document.querySelectorAll('.content-card').forEach(card => {
        card.classList.remove('active');
    });
    document.getElementById('phase' + phase).classList.add('active');
    currentPhase = phase;
    updateProgress();
}

function nextPhase() {
    if (currentPhase < totalPhases) {
        showPhase(currentPhase + 1);
    }
}

function prevPhase() {
    if (currentPhase > 1) {
        showPhase(currentPhase - 1);
    }
}

// Exercise 1 Functions (3, 4, 5 - Right Triangle)
function checkStep1Ex1() {
    const input = document.getElementById('ex1-longest');
    const result = document.getElementById('ex1-result1');

    if (parseInt(input.value) === 5) {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex1-step1').classList.remove('active');
        document.getElementById('ex1-step1').classList.add('completed');
        document.getElementById('ex1-step2').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again!';
    }
}

function checkStep2Ex1() {
    const select = document.getElementById('ex1-triangle');
    const result = document.getElementById('ex1-result2');

    if (select.value === 'yes') {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex1-step2').classList.remove('active');
        document.getElementById('ex1-step2').classList.add('completed');
        document.getElementById('ex1-step3').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again!';
    }
}

function checkStep3Ex1() {
    const select = document.getElementById('ex1-type');
    const result = document.getElementById('ex1-result3');

    if (select.value === 'right') {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex1-step3').classList.remove('active');
        document.getElementById('ex1-step3').classList.add('completed');
        document.getElementById('ex1-step4').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again!';
    }
}

// Exercise 2 Functions (2, 3, 7 - No Triangle)
function checkStep1Ex2() {
    const input = document.getElementById('ex2-longest');
    const result = document.getElementById('ex2-result1');

    if (parseInt(input.value) === 7) {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex2-step1').classList.remove('active');
        document.getElementById('ex2-step1').classList.add('completed');
        document.getElementById('ex2-step2').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again!';
    }
}

function checkStep2Ex2() {
    const select = document.getElementById('ex2-triangle');
    const result = document.getElementById('ex2-result2');

    if (select.value === 'no') {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex2-step2').classList.remove('active');
        document.getElementById('ex2-step2').classList.add('completed');
        document.getElementById('ex2-step3').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again!';
    }
}

// Exercise 3 Functions (5, 12, 13 - Right Triangle)
function checkStep1Ex3() {
    const select = document.getElementById('ex3-possible');
    const result = document.getElementById('ex3-result1');

    if (select.value === 'yes') {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex3-step1').classList.remove('active');
        document.getElementById('ex3-step1').classList.add('completed');
        document.getElementById('ex3-step2').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again!';
    }
}

function checkStep2Ex3() {
    const input = document.getElementById('ex3-sq1');
    const result = document.getElementById('ex3-result2');

    if (parseInt(input.value) === 25) {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex3-step2').classList.remove('active');
        document.getElementById('ex3-step2').classList.add('completed');
        document.getElementById('ex3-step3').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again!';
    }
}

function checkStep3Ex3() {
    const select = document.getElementById('ex3-type');
    const result = document.getElementById('ex3-result3');

    if (select.value === 'right') {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex3-step3').classList.remove('active');
        document.getElementById('ex3-step3').classList.add('completed');
        document.getElementById('ex3-step4').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again!';
    }
}

// Complete Exercise
function completeExercise(exerciseNum) {
    guidedExercisesDone++;

    if (exerciseNum < 3) {
        document.getElementById('exercise' + exerciseNum).style.display = 'none';
        document.getElementById('exercise' + (exerciseNum + 1)).style.display = 'block';
    }

    if (guidedExercisesDone >= 3) {
        document.getElementById('phase3Next').disabled = false;
    }
}

// Independent Practice
function checkIndependent(problem, userAnswer, btn) {
    const resultEl = document.getElementById(`ind${problem}-result`);
    const container = document.getElementById(`ind${problem}`);
    const buttons = container.querySelectorAll('.answer-btn');

    if (resultEl.textContent !== '') return;

    const correctAnswer = independentProblems[problem - 1].answer;
    const isCorrect = userAnswer === correctAnswer;

    studentAnswers[problem] = {
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect,
        sides: independentProblems[problem - 1].sides
    };

    buttons.forEach(b => {
        b.disabled = true;
        if (b === btn) {
            b.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (!isCorrect && b.textContent.toLowerCase().includes(correctAnswer)) {
            b.classList.add('correct');
        }
    });

    if (isCorrect) {
        resultEl.textContent = '\u2705';
        independentScore++;
    } else {
        resultEl.textContent = '\u274C';
    }

    independentAnswered++;
    document.getElementById('independentScore').textContent = independentScore;

    if (independentAnswered >= 12) {
        document.getElementById('finalScore').style.display = 'block';
        document.getElementById('finalScoreNumber').textContent = independentScore + '/12';
        document.getElementById('phase4Next').disabled = false;
        document.getElementById('overallScore').textContent = (3 + independentScore) + '/15';
    }
}

// Print Results
function printResults() {
    const resultsContainer = document.getElementById('printIndependentResults');
    let resultsHTML = '';

    const answerLabels = {
        'no': 'No Triangle',
        'right': 'Right Triangle',
        'acute': 'Acute Triangle',
        'obtuse': 'Obtuse Triangle',
        '4-14': '4 and 14',
        '5-9': '5 and 9',
        '1-14': '1 and 14',
        '4-9': '4 and 9',
        '12': '12 ft',
        '8': '8',
        '18': '18',
        '10': '10',
        '15': '15',
        '21': '21',
        '225': '225',
        'yes': 'Yes, right triangle',
        'no-acute': 'No, acute',
        'no-obtuse': 'No, obtuse',
        'no-invalid': 'Not valid',
        '6': '6',
        '19': '19',
        '4': '4',
        '16': '16',
        '64': '64',
        '45': '45 inches',
        '63': '63 inches',
        '54': '54 inches',
        '40': '40 inches'
    };

    for (let i = 1; i <= 12; i++) {
        const problem = independentProblems[i - 1];
        const answer = studentAnswers[i];
        const isCorrect = answer ? answer.isCorrect : false;
        const userAns = answer ? (answerLabels[answer.userAnswer] || answer.userAnswer) : 'N/A';
        const correctAns = answerLabels[problem.answer] || problem.answer;

        resultsHTML += `
            <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <span>${i}. ${problem.display}</span>
                <span>${userAns} ${isCorrect ? '\u2713' : '\u2717 (Answer: ' + correctAns + ')'}</span>
            </div>
        `;
    }

    resultsContainer.innerHTML = resultsHTML;

    const totalCorrect = 3 + independentScore;
    const percentage = Math.round((totalCorrect / 15) * 100);
    document.getElementById('printFinalScore').textContent = totalCorrect + '/15';
    document.getElementById('printPercentage').textContent = percentage + '%';

    window.print();
}

// Restart Lesson
function restartLesson() {
    currentPhase = 1;
    guidedExercisesDone = 0;
    independentScore = 0;
    independentAnswered = 0;
    studentAnswers = {};

    // Reset Exercise displays
    document.getElementById('exercise1').style.display = 'block';
    document.getElementById('exercise2').style.display = 'none';
    document.getElementById('exercise3').style.display = 'none';

    // Reset all steps for all exercises
    for (let ex = 1; ex <= 3; ex++) {
        const maxSteps = ex === 2 ? 3 : 4;
        for (let step = 1; step <= maxSteps; step++) {
            const stepEl = document.getElementById(`ex${ex}-step${step}`);
            if (stepEl) {
                stepEl.classList.remove('completed', 'visible', 'active');
                if (step === 1) {
                    stepEl.classList.add('visible', 'active');
                }
            }
        }
    }

    // Reset inputs and selects
    const inputs = ['ex1-longest', 'ex2-longest', 'ex3-sq1'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    const selects = ['ex1-triangle', 'ex1-type', 'ex2-triangle', 'ex3-possible', 'ex3-type'];
    selects.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    // Reset result badges
    for (let ex = 1; ex <= 3; ex++) {
        for (let r = 1; r <= 3; r++) {
            const resultEl = document.getElementById(`ex${ex}-result${r}`);
            if (resultEl) {
                resultEl.className = 'result-badge';
                resultEl.textContent = '';
            }
        }
    }

    // Reset independent practice
    for (let i = 1; i <= 12; i++) {
        const container = document.getElementById(`ind${i}`);
        if (container) {
            const buttons = container.querySelectorAll('.answer-btn');
            const resultEl = document.getElementById(`ind${i}-result`);

            buttons.forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('correct', 'incorrect', 'selected');
            });
            if (resultEl) resultEl.textContent = '';
        }
    }

    document.getElementById('independentScore').textContent = '0';
    document.getElementById('finalScore').style.display = 'none';
    document.getElementById('phase3Next').disabled = true;
    document.getElementById('phase4Next').disabled = true;

    showPhase(1);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();

    // Phase dot click navigation
    document.querySelectorAll('.phase-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const phase = parseInt(dot.dataset.phase);
            if (phase <= currentPhase || dot.classList.contains('completed')) {
                showPhase(phase);
            }
        });
    });
});
