import { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import Welcome from './Welcome';

const QuizApp = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState({
    score: 0,
    category: '',
    details: {}
  });

  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (userAnswers) => {
    setAnswers(userAnswers);
    
    // Calculate score
    let totalScore = 0;
    Object.values(userAnswers).forEach(answer => {
      if (answer === 'A') totalScore += 3;
      else if (answer === 'B') totalScore += 2;
      else if (answer === 'C') totalScore += 1;
    });
    
    // Determine category based on score range
    let category = '';
    if (totalScore >= 25) {
      category = 'Visionary';
    } else if (totalScore >= 18) {
      category = 'Conscious';
    } else {
      category = 'Reckless';
    }
    
    setResult({
      score: totalScore,
      category,
      details: userAnswers
    });
    
    setCurrentScreen('result');
  };

  const handleRetakeQuiz = () => {
    setAnswers({});
    setResult({
      score: 0,
      category: '',
      details: {}
    });
    setCurrentScreen('welcome');
  };

  return (
    <div className="quiz-app">
      {currentScreen === 'welcome' && (
        <Welcome onStartQuiz={handleStartQuiz} />
      )}
      
      {currentScreen === 'quiz' && (
        <Quiz onComplete={handleQuizComplete} />
      )}
      
      {currentScreen === 'result' && (
        <Result 
          result={result} 
          onRetakeQuiz={handleRetakeQuiz} 
        />
      )}
    </div>
  );
};

export default QuizApp; 