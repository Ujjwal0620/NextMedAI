import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AidoctorPage = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleDiagnose = async () => {
    if (!symptoms.trim()) {
      setError('Please enter some symptoms.');
      return;
    }

    setError('');
    setResult(null);

    try {
      const symptomArray = symptoms
        .split(',')
        .map(item => item.trim().toLowerCase());

      const response = await axios.post('http://localhost:5000/diagnose', {
        symptoms: symptomArray,
      });

      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 flex items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-2xl transition-all hover:shadow-blue-300">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600 text-center mb-8">
          🩺 NextMed AI Doctor
        </h1>

        <textarea
          className="w-full text-black border-2 border-cyan-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition mb-6"
          rows="4"
          placeholder="Enter your symptoms, separated by commas..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />

        <button
          onClick={handleDiagnose}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-2xl mb-4 transition transform hover:scale-105"
        >
          Diagnose
        </button>

        <Link to='/talktodoc'>
          <button
            className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-3 rounded-2xl transition transform hover:scale-105"
          >
            Talk to AI Doctor
          </button>
        </Link>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center font-medium mt-4">{error}</p>
        )}

        {/* Diagnosis Result */}
        {result && (
          <div className="mt-8 space-y-6 text-black">
            <h2 className="text-3xl font-bold text-green-600 text-center">{result.disease}</h2>

            <div className="bg-blue-50 p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Description</h3>
              <p>{result.description}</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Precautions</h3>
              <ul className="list-disc list-inside">
                {result.precautions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Medications</h3>
              <ul className="list-disc list-inside">
                {result.medications.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Diet Plan</h3>
              <ul className="list-disc list-inside">
                {result.diet.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Workout Suggestions</h3>
              <ul className="list-disc list-inside">
                {result.workout.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AidoctorPage;
