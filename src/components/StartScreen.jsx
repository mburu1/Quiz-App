import { useDispatch, useSelector } from 'react-redux';
import { startQuiz } from '../store/quizSlice';
import './StartScreen.css';

const StartScreen = () => {
  const dispatch = useDispatch();
  const { quizInfo, questions } = useSelector((state) => state.quiz);

  const handleStart = () => {
    dispatch(startQuiz());
  };

  return (
    <div className="start-screen">
      <div className="start-card">
        <div className="quiz-icon">🎯</div>
        <h1>{quizInfo.title}</h1>
        <p className="quiz-description">{quizInfo.description}</p>
        
        <div className="quiz-details">
          <div className="detail-item">
            <span className="detail-icon">📝</span>
            <span className="detail-text">{questions.length} Questions</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">⏱️</span>
            <span className="detail-text">60 seconds per question</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">⭐</span>
            <span className="detail-text">+1 point for correct answer</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">⚠️</span>
            <span className="detail-text">-1 point if time expires</span>
          </div>
        </div>

        <button className="start-button" onClick={handleStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartScreen;

