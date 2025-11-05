import { useDispatch, useSelector } from 'react-redux';
import { resetQuiz } from '../store/quizSlice';
import './ResultsScreen.css';

const ResultsScreen = () => {
  const dispatch = useDispatch();
  const { score, answeredQuestions, questions } = useSelector((state) => state.quiz);

  const handleRetake = () => {
    dispatch(resetQuiz());
  };

  const correctAnswers = answeredQuestions.filter(q => q.isCorrect).length;
  const incorrectAnswers = answeredQuestions.filter(q => !q.isCorrect && !q.timeExpired).length;
  const timeExpiredCount = answeredQuestions.filter(q => q.timeExpired).length;
  const percentage = Math.round((correctAnswers / questions.length) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 80) return { text: 'Excellent! 🎉', color: '#4caf50' };
    if (percentage >= 60) return { text: 'Good Job! 👍', color: '#2196f3' };
    if (percentage >= 40) return { text: 'Not Bad! 💪', color: '#ff9800' };
    return { text: 'Keep Practicing! 📚', color: '#f44336' };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="results-screen">
      <div className="results-card">
        <div className="results-header">
          <h1>Quiz Complete!</h1>
          <div className="score-circle" style={{ borderColor: performance.color }}>
            <div className="score-value" style={{ color: performance.color }}>
              {score}
            </div>
            <div className="score-label">Final Score</div>
          </div>
          <h2 style={{ color: performance.color }}>{performance.text}</h2>
        </div>

        <div className="stats-grid">
          <div className="stat-card correct">
            <div className="stat-icon">✓</div>
            <div className="stat-value">{correctAnswers}</div>
            <div className="stat-label">Correct</div>
          </div>
          <div className="stat-card incorrect">
            <div className="stat-icon">✗</div>
            <div className="stat-value">{incorrectAnswers}</div>
            <div className="stat-label">Incorrect</div>
          </div>
          <div className="stat-card expired">
            <div className="stat-icon">⏱️</div>
            <div className="stat-value">{timeExpiredCount}</div>
            <div className="stat-label">Time Expired</div>
          </div>
          <div className="stat-card percentage">
            <div className="stat-icon">📊</div>
            <div className="stat-value">{percentage}%</div>
            <div className="stat-label">Accuracy</div>
          </div>
        </div>

        <div className="results-details">
          <h3>Question Review</h3>
          <div className="questions-list">
            {answeredQuestions.map((question, index) => (
              <div key={question.questionId} className={`result-item ${question.isCorrect ? 'correct-item' : 'incorrect-item'}`}>
                <div className="result-item-header">
                  <span className="question-num">Q{index + 1}</span>
                  <span className={`result-badge ${question.isCorrect ? 'correct-badge' : 'incorrect-badge'}`}>
                    {question.timeExpired ? 'Time Expired' : question.isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
                <p className="result-question">{question.question}</p>
                <div className="result-answers">
                  {question.timeExpired ? (
                    <p className="no-answer">⚠️ No answer provided (time expired)</p>
                  ) : (
                    <p className="your-answer">
                      Your answer: <span className={question.isCorrect ? 'correct-text' : 'incorrect-text'}>
                        {question.options[question.selectedAnswer]}
                      </span>
                    </p>
                  )}
                  {!question.isCorrect && (
                    <p className="correct-answer-text">
                      Correct answer: <span className="correct-text">
                        {question.options[question.correctAnswer]}
                      </span>
                    </p>
                  )}
                  <p className="explanation-text">{question.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="retake-button" onClick={handleRetake}>
          <span className="retake-icon">🔄</span>
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;

