import React from 'react';

const Welcome = ({ onStartQuiz }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Career Path Classification Quiz</h1>
        <div className="welcome-content">
          <p>
            Welcome to the Career Path Classification Quiz! This quick assessment will 
            help you understand your approach to career planning.
          </p>
          <p>
            After answering a few questions, you'll discover if you're a:
          </p>
          <ul>
            <li><strong>Visionary</strong> - Clear goals and high discipline</li>
            <li><strong>Conscious</strong> - Aware but seeking more clarity</li>
            <li><strong>Reckless</strong> - Needing more direction or motivation</li>
          </ul>
          <p>
            Your results will include personalized insights and suggestions for growth.
          </p>
        </div>
        <button 
          className="start-button" 
          onClick={onStartQuiz}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Welcome; 