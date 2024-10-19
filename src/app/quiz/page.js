// src/app/quiz/page.js
"use client"
import React, { useState } from 'react';

const questions = [
    {
        id: 1,
        question: "What do you feel is your biggest challenge right now?",
        options: [
            "Anxiety",
            "Depression",
            "Relationship Issues",
            "Stress Management",
            "General Discussion",
        ],
    },
    {
        id: 2,
        question: "How often do you feel overwhelmed by your emotions?",
        options: [
            "Rarely",
            "Sometimes",
            "Often",
            "Always",
        ],
    },
    {
        id: 3,
        question: "Are you seeking support for yourself or someone else?",
        options: [
            "Myself",
            "Someone else",
        ],
    },
];

const categorySuggestions = {
    Anxiety: ["Anxiety", "Stress Management"],
    Depression: ["Depression", "Grief and Trauma Recovery"],
    "Relationship Issues": ["Relationship Issues", "General Discussion"],
    "Stress Management": ["Stress Management", "Career Stress and Burnout"],
    "General Discussion": ["General Discussion"],
};

const QuizPage = () => {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers({
            ...answers,
            [questionId]: answer,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const suggestedCategories = Object.values(answers).reduce((acc, answer) => {
        if (answer && categorySuggestions[answer]) {
            acc.push(...categorySuggestions[answer]);
        }
        return acc;
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Take Our Quiz to Find Your Support Category!</h2>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    {questions.map((q) => (
                        <div key={q.id} className="mb-4">
                            <h3 className="font-bold">{q.question}</h3>
                            {q.options.map((option, index) => (
                                <div key={index}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${q.id}`}
                                            value={option}
                                            onChange={() => handleAnswerChange(q.id, option)}
                                            required
                                        />
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Submit
                    </button>
                </form>
            ) : (
                <div>
                    <h3 className="font-bold">Suggested Categories:</h3>
                    {suggestedCategories.length > 0 ? (
                        <ul className="list-disc ml-5">
                            {Array.from(new Set(suggestedCategories)).map((category, index) => (
                                <li key={index}>{category}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No suggestions based on your answers.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuizPage;
