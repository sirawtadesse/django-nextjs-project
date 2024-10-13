"use client";
import { useState } from 'react';

const ClaimForm = () => {
  const [policyNumber, setPolicyNumber] = useState('');
  const [claimDescription, setClaimDescription] = useState('');
  const [claimAmount, setClaimAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare the data to be sent
    const claimData = {
      policy_number: policyNumber,
      claim_description: claimDescription,
      claim_amount: claimAmount,
    };
  
    try {
      const response = await fetch('/api/claims/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(claimData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Claim submitted successfully:', result);
        // Optionally reset the form
        setPolicyNumber('');
        setClaimDescription('');
        setClaimAmount('');
      } else {
        const errorData = await response.json();
        console.error('Error submitting claim:', errorData);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vehicle Insurance Claim Form</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="policyNumber" className="block font-bold mb-1">Policy Number:</label>
          <input
            type="text"
            id="policyNumber"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="claimDescription" className="block font-bold mb-1">Claim Description:</label>
          <textarea
            id="claimDescription"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={claimDescription}
            onChange={(e) => setClaimDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="claimAmount" className="block font-bold mb-1">Claim Amount:</label>
          <input
            type="text"
            id="claimAmount"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={claimAmount}
            onChange={(e) => setClaimAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Submit</button>
      </form>
    </div>
  );
};

export default ClaimForm;