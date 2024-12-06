import React, { useState } from 'react';
import { useInterviews } from '../context/InterviewsContext';

const candidate = {
  id: 1,
  name: 'John Doe',
  position: 'Software Engineer',
  interviewDate: '2024-09-01',
};

const experts = [
  { id: 1, name: 'Alice Smith', expertise: 'Frontend Development' },
  { id: 2, name: 'Bob Johnson', expertise: 'Backend Development' },
];

const candidateInterview = {
  id: Date.now(),
  candidate,
  experts,
  date: new Date().toLocaleString(),
};



export default function CandidateInterviewDisplay({ id }) {
  const { interviews } = useInterviews();
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [showFeedbackButton, setShowFeedbackButton] = useState(false);
  const [interviewCompleted, setInterviewCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [flag,setFlag] = useState(true)
  
  const handleStartInterview = () => {
    setInterviewStarted(true);
    
    setTimeout(() => {
      setShowFeedbackButton(true);
      setInterviewStarted(false); // Remove the "Interview Started" button
      setInterviewCompleted(true);
    }, 5000);
  };

  const handleFeedbackButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleFeedbackSubmit = () => {
    // Handle feedback submission here
    console.log('Feedback submitted:', feedback);
    setIsModalOpen(false);
    setFeedback('');
    setShowFeedbackButton(false)
    
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-center">
          Interview Details
        </h2>

        {/* Check if the candidate has a scheduled interview */}
        {candidateInterview ? (
          <div className="flex-row mt-8 mx-auto p-4 bg-white rounded-md shadow-md flex  items-start max-w-3xl">
            <div className="flex-1">
              
             
              <h4 className="mt-4 text-md font-medium text-gray-800">Experts Involved:</h4>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                {candidateInterview.experts.map((expert) => (
                  <li key={expert.id} className="flex justify-between items-center">
                    <span>{expert.name} - {expert.expertise}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Single Feedback Button */}
            {showFeedbackButton && (
              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleFeedbackButtonClick}
                  className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Give Feedback
                </button>
              </div>
            )}

            {/* Start Interview Button */}
            <div className="mt-6 flex items-center justify-center">
              {!interviewCompleted && (
                interviewStarted ? (
                  <button
                    className="px-6 py-2 text-white bg-gray-400 rounded-md cursor-not-allowed"
                  >
                    Interview Started
                  </button>
                ) : (
                  <button
                    onClick={handleStartInterview}
                    className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Attend Interview
                  </button>
                )
              )}
            </div>
          </div>
        ) : (
          // Message if no interview is scheduled for the candidate
          <p className="text-center text-lg text-gray-600 mt-4">
            No interview scheduled yet.
          </p>
        )}

        {/* Feedback Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedback</h3>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full h-32 p-2 border border-gray-300 rounded-md mb-4"
                placeholder="Enter your feedback here..."
              />
              <div className="flex justify-end">
                <button
                  onClick={handleFeedbackSubmit}
                  className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="ml -4 px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
