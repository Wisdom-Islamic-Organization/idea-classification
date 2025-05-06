import { useState } from 'react';

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      text: "Do you have a clear idea of what career you want to pursue?",
      options: [
        { key: "A", text: "Yes, I know exactly what I want to do and how to get there." },
        { key: "B", text: "I have some ideas, but I haven't figured it out yet." },
        { key: "C", text: "I haven't really thought about it." }
      ]
    },
    {
      id: 2,
      text: "How disciplined are you with your studies and time management?",
      options: [
        { key: "A", text: "Very disciplined; I plan my time and stick to a routine." },
        { key: "B", text: "I try to manage time but often struggle with consistency." },
        { key: "C", text: "Not disciplined; I just go with the flow." }
      ]
    },
    {
      id: 3,
      text: "When someone gives you career advice, how do you respond?",
      options: [
        { key: "A", text: "I listen carefully and try to apply it." },
        { key: "B", text: "I consider it but often don't act on it right away." },
        { key: "C", text: "I usually ignore it; I do things my way." }
      ]
    },
    {
      id: 4,
      text: "How do you spend your free time?",
      options: [
        { key: "A", text: "Mostly in activities that support my growth or learning." },
        { key: "B", text: "A mix of leisure and productive activities." },
        { key: "C", text: "Mostly in entertainment or unproductive pastimes." }
      ]
    },
    {
      id: 5,
      text: "Who inspires your career ambitions?",
      options: [
        { key: "A", text: "I have role models or mentors I actively follow." },
        { key: "B", text: "I'm still figuring out who or what inspires me." },
        { key: "C", text: "I don't really have anyone who inspires me." }
      ]
    },
    {
      id: 6,
      text: "Have you ever created a roadmap or plan for your career (like steps to achieve your goals)?",
      options: [
        { key: "A", text: "Yes, and I review it regularly." },
        { key: "B", text: "I've thought about it, but it's not written down or clear." },
        { key: "C", text: "No, I haven't done anything like that." }
      ]
    },
    {
      id: 7,
      text: "How do you deal with failure or setbacks related to your goals?",
      options: [
        { key: "A", text: "I learn from them and adjust my strategies." },
        { key: "B", text: "I feel discouraged but try to bounce back." },
        { key: "C", text: "I usually give up or don't care much." }
      ]
    },
    {
      id: 8,
      text: "How often do you seek opportunities to improve your skills (e.g., workshops, courses, self-learning)?",
      options: [
        { key: "A", text: "Frequently; I seek out learning opportunities actively." },
        { key: "B", text: "Sometimes; when they're convenient or required." },
        { key: "C", text: "Rarely or never; I don't prioritize additional learning." }
      ]
    },
    {
      id: 9,
      text: "How clear are your long-term career goals?",
      options: [
        { key: "A", text: "Very clear; I have specific milestones and timelines." },
        { key: "B", text: "Somewhat clear; I have general ideas but not detailed plans." },
        { key: "C", text: "Not clear at all; I haven't thought much about the future." }
      ]
    },
    {
      id: 10,
      text: "What's your approach to networking and building professional relationships?",
      options: [
        { key: "A", text: "I actively build and maintain professional connections." },
        { key: "B", text: "I network occasionally but don't prioritize it." },
        { key: "C", text: "I rarely network or build professional relationships." }
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    console.log(`Selected answer for question ${questionId}: ${answer}`);
    
    setAnswers({
      ...answers,
      [questionId]: answer
    });

    console.log("Current answers state:", {...answers, [questionId]: answer});

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("Quiz complete, submitting answers:", {...answers, [questionId]: answer});
      onComplete({...answers, [questionId]: answer});
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSkip = () => {
    console.log(`Skipping question ${questions[currentQuestion].id}`);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("Quiz complete after skip, submitting answers:", answers);
      onComplete(answers);
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="question-count">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
        
        <div className="question">
          <h2>{question.text}</h2>
          <div className="options">
            {question.options.map((option) => (
              <button
                key={option.key}
                className={`option-button ${answers[question.id] === option.key ? 'selected' : ''}`}
                onClick={() => handleAnswer(question.id, option.key)}
              >
                <span className="option-key">{option.key}</span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="quiz-actions">
          {currentQuestion > 0 && (
            <button 
              className="nav-button prev" 
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          <button 
            className="nav-button skip" 
            onClick={handleSkip}
          >
            {currentQuestion < questions.length - 1 ? 'Next Option' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz; 