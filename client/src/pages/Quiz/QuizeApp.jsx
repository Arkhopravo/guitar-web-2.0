// src/QuizApp.js
import React, { useState } from "react";
import questions from "./Questions";

const QuizApp = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setSubmitted(false);
  };

  const handleAnswer = (selectedAnswer) => {
    if (submitted) {
      return;
    }

    const isCorrect = questions[currentQuestion].correctAnswer === selectedAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    // Store the user's answer
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);

    // Move to the next question
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setSubmitted(true);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-800 text-white">
      {!started ? (
        <button
          onClick={handleStart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Quiz
        </button>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Quiz App</h1>
          {!submitted ? (
            <div>
              <p className="text-lg mb-2">Question {currentQuestion + 1}:</p>
              <p className="text-xl mb-4">{questions[currentQuestion].question}</p>
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`cursor-pointer p-2 m-1 bg-gray-700 rounded transition duration-300 hover:bg-gray-600`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Submit
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold mb-4">Quiz Results</h2>
              {questions.map((q, index) => (
                <div key={index} className="mb-4">
                  <p>
                    <strong>Question {index + 1}:</strong> {q.question}
                  </p>
                  <p>
                    <strong>Your Answer:</strong> {userAnswers[index]}
                  </p>
                  <p>
                    <strong>Correct Answer:</strong> {q.correctAnswer}
                  </p>
                </div>
              ))}
              <p className="text-xl mt-4">
                Your final score is {score} out of {questions.length}
              </p>
              <button
                onClick={resetQuiz}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Restart Quiz
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
