# Browser-Based Quiz Application

A modern, interactive quiz application built with React and Redux Toolkit. Test your knowledge with multiple-choice questions, real-time feedback, and a countdown timer!

## 🎯 Features

- **Interactive Start Screen**: Welcome screen with quiz details and instructions
- **Multiple Choice Questions**: 10 engaging questions covering various topics
- **Real-time Timer**: 60-second countdown for each question
- **Instant Feedback**: Immediate visual feedback (green for correct, red for incorrect)
- **Score Tracking**: Points awarded for correct answers, deducted for time expiry
- **Detailed Results**: Comprehensive results screen showing:
  - Final score
  - Correct/incorrect answers count
  - Time-expired questions count
  - Accuracy percentage
  - Question-by-question review with explanations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Engaging transitions and visual effects

## 🚀 Technologies Used

- **React 18**: Modern UI library
- **Redux Toolkit**: State management
- **React-Redux**: React bindings for Redux
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with animations

## 📋 Requirements Met

✅ JSON-based quiz questions
✅ Start screen with quiz details
✅ Multiple-choice questions presented as cards
✅ Answer buttons turn red/green based on correctness
✅ Shows correct answer after selection
✅ Score incrementation for correct answers
✅ Final results screen with complete score breakdown
✅ 1-minute timer per question
✅ Auto-skip to next question when time expires
✅ Score decremented by 1 for time expiry
✅ Redux for state management

## 🎮 How to Use

1. **Start the Quiz**: Click the "Start Quiz" button on the welcome screen
2. **Answer Questions**: Select one of the four options for each question
3. **Watch the Timer**: You have 60 seconds per question
4. **Get Feedback**: See immediate feedback with explanations
5. **Navigate**: Click "Next Question" to proceed
6. **View Results**: See your final score and review all answers
7. **Retake**: Click "Retake Quiz" to start over

## 🏗️ Project Structure

```
quiz-app/
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx       # Welcome screen component
│   │   ├── StartScreen.css       # Start screen styles
│   │   ├── QuestionCard.jsx      # Question display component
│   │   ├── QuestionCard.css      # Question card styles
│   │   ├── ResultsScreen.jsx     # Results display component
│   │   └── ResultsScreen.css     # Results screen styles
│   ├── data/
│   │   └── quizData.json         # Quiz questions and answers
│   ├── store/
│   │   ├── store.js              # Redux store configuration
│   │   └── quizSlice.js          # Quiz state slice
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Global styles
├── package.json
└── README.md
```

## 🔧 Installation & Setup

1. **Navigate to the project directory**:
   ```bash
   cd quiz-app
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```

## 🎨 Customization

### Adding New Questions

Edit `src/data/quizData.json`:

```json
{
  "id": 11,
  "question": "Your question here?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswer": 0,
  "explanation": "Explanation of the correct answer"
}
```

### Adjusting Timer Duration

In `src/store/quizSlice.js`, modify the `timeLeft` value:

```javascript
state.timeLeft = 60; // Change to desired seconds
```

### Changing Color Scheme

Update the gradient colors in component CSS files:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Scoring System

- **Correct Answer**: +1 point
- **Incorrect Answer**: 0 points
- **Time Expired**: -1 point

## 🔄 State Management

The application uses Redux Toolkit for centralized state management:

- `quizStarted`: Boolean indicating if quiz has started
- `currentQuestionIndex`: Current question number
- `score`: Current score
- `selectedAnswer`: User's selected answer
- `answeredQuestions`: Array of all answered questions
- `quizCompleted`: Boolean indicating if quiz is finished
- `timeLeft`: Remaining time for current question
- `timerActive`: Boolean indicating if timer is running

## 🎓 Learning Outcomes

This project demonstrates:
- React component architecture
- Redux state management
- Timer implementation with useEffect
- Conditional rendering
- CSS animations and transitions
- Responsive design principles
- JSON data handling

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

---

**Enjoy the quiz! 🎉**
