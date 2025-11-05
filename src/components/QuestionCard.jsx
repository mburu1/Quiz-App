import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer, nextQuestion, timeExpired, decrementTime } from '../store/quizSlice';
import './QuestionCard.css';

const QuestionCard = () => {
  const dispatch = useDispatch();
  const {
    questions,
    currentQuestionIndex,
    selectedAnswer,
    score,
    timeLeft,
    timerActive
  } = useSelector((state) => state.quiz);

  const currentQuestion = questions[currentQuestionIndex];

  // Timer effect
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);

      return () => clearInterval(timer);
    } else if (timerActive && timeLeft === 0) {
      dispatch(timeExpired());
    }
  }, [timerActive, timeLeft, dispatch]);

  const handleAnswerClick = (answerIndex) => {
    if (selectedAnswer === null) {
      dispatch(selectAnswer(answerIndex));
    }
  };

  const handleNextClick = () => {
    dispatch(nextQuestion());
  };

  const getButtonClass = (index) => {
    if (selectedAnswer === null) {
      return 'answer-button';
    }

    if (index === currentQuestion.correctAnswer) {
      return 'answer-button correct';
    }

    if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
      return 'answer-button incorrect';
    }

    return 'answer-button disabled';
  };

  const getTimerClass = () => {
    if (timeLeft <= 10) return 'timer critical';
    if (timeLeft <= 30) return 'timer warning';
    return 'timer';
  };

  return (
    <div className="question-screen">
      <div className="question-card">
        <div className="question-header">
          <div className="progress-info">
            <span className="question-number">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="score-display">Score: {score}</span>
          </div>
          <div className={getTimerClass()}>
            <span className="timer-icon">⏱️</span>
            <span className="timer-text">{timeLeft}s</span>
          </div>
        </div>

        <div className="question-content">
          <h2 className="question-text">{currentQuestion.question}</h2>

          <div className="answers-grid">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={getButtonClass(index)}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>

          {selectedAnswer !== null && (
            <div className="feedback-section">
              <div className={selectedAnswer === currentQuestion.correctAnswer ? 'feedback correct-feedback' : 'feedback incorrect-feedback'}>
                <div className="feedback-icon">
                  {selectedAnswer === currentQuestion.correctAnswer ? '✓' : '✗'}
                </div>
                <div className="feedback-content">
                  <h3>
                    {selectedAnswer === currentQuestion.correctAnswer
                      ? 'Correct!'
                      : 'Incorrect!'}
                  </h3>
                  <p className="correct-answer">
                    Correct answer: {currentQuestion.options[currentQuestion.correctAnswer]}
                  </p>
                  <p className="explanation">{currentQuestion.explanation}</p>
                </div>
              </div>

              <button className="next-button" onClick={handleNextClick}>
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
                <span className="arrow">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

