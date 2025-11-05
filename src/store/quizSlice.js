import { createSlice } from '@reduxjs/toolkit';
import quizData from '../data/quizData.json';

const initialState = {
  quizStarted: false,
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswer: null,
  answeredQuestions: [],
  quizCompleted: false,
  timeLeft: 60,
  timerActive: false,
  questions: quizData.questions,
  quizInfo: {
    title: quizData.quizTitle,
    description: quizData.quizDescription
  }
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state) => {
      state.quizStarted = true;
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.selectedAnswer = null;
      state.answeredQuestions = [];
      state.quizCompleted = false;
      state.timeLeft = 60;
      state.timerActive = true;
    },
    
    selectAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
      state.timerActive = false;
      
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const isCorrect = action.payload === currentQuestion.correctAnswer;
      
      // Update score
      if (isCorrect) {
        state.score += 1;
      }
      
      // Record the answered question
      state.answeredQuestions.push({
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        selectedAnswer: action.payload,
        correctAnswer: currentQuestion.correctAnswer,
        options: currentQuestion.options,
        isCorrect: isCorrect,
        explanation: currentQuestion.explanation,
        timeExpired: false
      });
    },
    
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
        state.selectedAnswer = null;
        state.timeLeft = 60;
        state.timerActive = true;
      } else {
        state.quizCompleted = true;
        state.timerActive = false;
      }
    },
    
    timeExpired: (state) => {
      state.timerActive = false;
      
      const currentQuestion = state.questions[state.currentQuestionIndex];
      
      // Decrement score for time expiry
      state.score -= 1;
      
      // Record the unanswered question
      state.answeredQuestions.push({
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        selectedAnswer: null,
        correctAnswer: currentQuestion.correctAnswer,
        options: currentQuestion.options,
        isCorrect: false,
        explanation: currentQuestion.explanation,
        timeExpired: true
      });
      
      // Auto-advance to next question after a short delay
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
        state.selectedAnswer = null;
        state.timeLeft = 60;
        state.timerActive = true;
      } else {
        state.quizCompleted = true;
      }
    },
    
    decrementTime: (state) => {
      if (state.timeLeft > 0 && state.timerActive) {
        state.timeLeft -= 1;
      }
    },
    
    resetQuiz: (state) => {
      return initialState;
    }
  }
});

export const {
  startQuiz,
  selectAnswer,
  nextQuestion,
  timeExpired,
  decrementTime,
  resetQuiz
} = quizSlice.actions;

export default quizSlice.reducer;

