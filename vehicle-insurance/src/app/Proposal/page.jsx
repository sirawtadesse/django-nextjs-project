"use client";
import { useState } from 'react';

const InsuranceForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [message, setMessage] = useState(''); // Define message state

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const proposalData = {
        name,
        email,
        vehicle_make: vehicleMake,
        vehicle_model: vehicleModel,
        vehicle_year: vehicleYear,
    };

    try {
        const response = await fetch('http://localhost:8000/api/proposals/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(proposalData),
        });

        if (response.ok) {
            setMessage('Form submitted successfully!');
            // Reset fields
            setName('');
            setEmail('');
            setVehicleMake('');
            setVehicleModel('');
            setVehicleYear('');
        } else {
            setMessage('Submission failed. Please try again.');
        }
    } catch (error) {
        setMessage('An error occurred. Please try again.');
        console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vehicle Insurance Proposal Form</h1>
      {message && <p className="text-red-500">{message}</p>} {/* Display message */}
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1">Name:</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-1">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicleMake" className="block font-bold mb-1">Vehicle Make:</label>
          <input
            type="text"
            id="vehicleMake"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={vehicleMake}
            onChange={(e) => setVehicleMake(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicleModel" className="block font-bold mb-1">Vehicle Model:</label>
          <input
            type="text"
            id="vehicleModel"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicleYear" className="block font-bold mb-1">Vehicle Year:</label>
          <input
            type="text"
            id="vehicleYear"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={vehicleYear}
            onChange={(e) => setVehicleYear(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Submit</button>
      </form>
    </div>
  );
};

export default InsuranceForm;