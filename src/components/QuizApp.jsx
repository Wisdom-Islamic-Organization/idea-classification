import { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import Welcome from './Welcome';
import Header from './Header';

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
    
    console.log("All collected answers:", userAnswers);
    
    // Calculate score
    let totalScore = 0;
    
    // Log all the answer keys to check if any are missing
    console.log("Answer keys:", Object.keys(userAnswers));
    
    Object.entries(userAnswers).forEach(([questionId, answer]) => {
      let pointsForQuestion = 0;
      if (answer === 'A') pointsForQuestion = 3;
      else if (answer === 'B') pointsForQuestion = 2;
      else if (answer === 'C') pointsForQuestion = 1;
      
      console.log(`Question ${questionId}: Answer=${answer}, Points=${pointsForQuestion}`);
      totalScore += pointsForQuestion;
    });
    
    console.log("Total calculated score:", totalScore);
    
    // Determine category based on score range
    let category = '';
    if (totalScore >= 24) {
      category = 'Visionary';
    } else if (totalScore >= 17) {
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
      <Header />
      
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