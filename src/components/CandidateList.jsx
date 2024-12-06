import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import CandidateSearchList from './CandidateSearchList';
import { candidates} from '../data/candidates'; 
import { sampleExperts } from '../data/experts';

export default function CandidateList() {
  const navigate = useNavigate();
  
  const handleMatchClick = (candidate) => {
    navigate('/match', {
      state: {
        candidate,
        experts: sampleExperts,
      },
    });
  };

  







  return (
    <>
      <Header />
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Candidates
            </h2>
          </div>

          <div className="mt-8 md:mt-16 flex justify-center">
            <CandidateSearchList candidates={candidates} matchClick={handleMatchClick} />
          </div>
        </div>
      </section>
    </>
  );
}
