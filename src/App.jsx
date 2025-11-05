import { useSelector } from 'react-redux'
import StartScreen from './components/StartScreen'
import QuestionCard from './components/QuestionCard'
import ResultsScreen from './components/ResultsScreen'
import './App.css'

function App() {
  const { quizStarted, quizCompleted } = useSelector((state) => state.quiz);

  return (
    <div className="app">
      {!quizStarted && <StartScreen />}
      {quizStarted && !quizCompleted && <QuestionCard />}
      {quizCompleted && <ResultsScreen />}
    </div>
  )
}

export default App
