import MainDashboard from '../../../pages/MainDashboard';
import React, { useState } from 'react';
import styles from '../../../styling/TaketheQuiz.module.css';

const questions = [
  {
    questionText: 'What’s te reo Māori for ocean??',
    answerOptions: [
      { answerText: 'awa', isCorrect: false },
      { answerText: 'kātao', isCorrect: false },
      { answerText: 'Moana', isCorrect: true },
      { answerText: 'kōura', isCorrect: false },
    ],
  },
  {
    questionText: 'What would be stored in a pātaka??',
    answerOptions: [
      { answerText: 'pukapuka', isCorrect: false },
      { answerText: 'kai', isCorrect: true },
      { answerText: 'waka', isCorrect: false },
      { answerText: 'weweru ', isCorrect: false },
    ],
  },
  {
    questionText: 'What colour is the underside of the ponga frond?',
    answerOptions: [
      { answerText: 'hiriwa', isCorrect: true },
      { answerText: 'kākāriki', isCorrect: false },
      { answerText: 'pango', isCorrect: false },
      { answerText: 'whero', isCorrect: false },
    ],
  },
  {
    questionText: 'When would you say kia ora?',
    answerOptions: [
      { answerText: 'when saying hello to someone', isCorrect: true },
      { answerText: 'wishing someone good health', isCorrect: true },
      { answerText: 'when your agreeing with someone', isCorrect: true },
      { answerText: 'all of the above', isCorrect: true },
    ],
  },
];

const TaketheQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  return (
    <MainDashboard>
      <div className={styles['app']}>
        {showScore ? (
          <div className={styles['score-section']}>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className={styles['question-section']}>
              <div className={styles['question-count']}>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className={styles['question-text']}>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className={styles['answer-section']}>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className={styles['buttonanswersection']}
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </MainDashboard>
  );
};

export default TaketheQuiz;
