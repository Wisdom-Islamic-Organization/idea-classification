import React from 'react';

const Result = ({ result, onRetakeQuiz }) => {
  const categoryDescriptions = {
    Visionary: {
      description: "You are a Visionary! You have clear career goals, high discipline, and actively take initiative in your career planning.",
      characteristics: [
        "Strong sense of purpose and direction",
        "Excellent at planning and goal setting",
        "Proactive in seeking growth opportunities",
        "Resilient in the face of challenges",
        "Disciplined with time management"
      ],
      recommendations: [
        "Continue refining your career roadmap",
        "Mentor others who are still finding their path",
        "Network with professionals in your target field",
        "Challenge yourself with increasingly advanced goals",
        "Balance your focus with occasional reflection to ensure your path still aligns with your values"
      ]
    },
    Conscious: {
      description: "You are Conscious! You are aware and motivated about your career path but may lack full clarity or consistency in your approach.",
      characteristics: [
        "Basic awareness of career direction",
        "Some planning but may lack detail",
        "Motivated but sometimes inconsistent",
        "Open to advice and guidance",
        "Balances career planning with other life aspects"
      ],
      recommendations: [
        "Create a more detailed career roadmap",
        "Establish regular routines for skill development",
        "Seek mentorship from professionals in fields of interest",
        "Practice setting and reviewing short-term goals",
        "Improve time management and prioritization skills"
      ]
    },
    Reckless: {
      description: "Your results show you're currently in the Reckless category. You may lack direction or motivation toward future career planning.",
      characteristics: [
        "Limited career planning or goal setting",
        "Tendency to focus on immediate gratification",
        "May struggle with consistent effort",
        "Could benefit from more structure",
        "Potential untapped talents and abilities"
      ],
      recommendations: [
        "Start with small, achievable career-related goals",
        "Explore different career fields through research or shadowing",
        "Develop a basic daily routine for productivity",
        "Seek guidance from teachers, counselors or mentors",
        "Identify personal strengths and interests as a foundation"
      ]
    }
  };

  const category = result.category;
  const categoryInfo = categoryDescriptions[category];

  return (
    <div className="result-container">
      <div className="result-card">
        <h1>Your Results</h1>
        
        <div className="score-section">
          <h2>Your Score: {result.score} / 30</h2>
          <div className="category-badge">
            <span className={`badge ${category.toLowerCase()}`}>{category}</span>
          </div>
        </div>
        
        <div className="category-description">
          <p>{categoryInfo.description}</p>
        </div>
        
        <div className="category-details">
          <div className="characteristics">
            <h3>Your Key Characteristics:</h3>
            <ul>
              {categoryInfo.characteristics.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="recommendations">
            <h3>Recommendations for Growth:</h3>
            <ul>
              {categoryInfo.recommendations.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <button className="retake-button" onClick={onRetakeQuiz}>
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default Result; 