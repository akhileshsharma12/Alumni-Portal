import React, { useState } from "react";
import YearBookBatchCard from "./YearBookBatchCard";

const YearBook = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);

  const batches = [
    {
      year: 2025, membersCount: 10, members: [
        { name: 'Rohit Sharma', city: 'Amravati', degree: 'BCA', graduationYear: 2028 },
        { name: 'Rohit Sharma', city: 'Amravati', degree: 'BCA', graduationYear: 2028 },
      
        { name: 'Rohit Sharma', city: 'Amravati', degree: 'BCA', graduationYear: 2028 },
        { name: 'Rohit Sharma', city: 'Amravati', degree: 'BCA', graduationYear: 2028 },
       
      ]
    },
    {
      year: 2024, membersCount: 10, members: [
        { name: 'Rohit Sharma', city: 'Amravati', degree: 'BCA', graduationYear: 2028 },
        { name: 'Rohit Sharma', city: 'Amravati', degree: 'BCA', graduationYear: 2028 },
      
        { name: 'Rohit Sharma', city: 'Amravati', degree: 'BCA', graduationYear: 2028 },
        { name: 'Rohit Sharma', city: 'Amravati', degree: 'BCA', graduationYear: 2028 },
       
      ]
    },
    {
      year: 2023, membersCount: 8, members: [
        { name: 'Aman Verma', city: 'Pune', degree: 'MCA', graduationYear: 2027 },
        { name: 'Megha Kapoor', city: 'Chandigarh', degree: 'B.Arch', graduationYear: 2027 },
        { name: 'Suresh Reddy', city: 'Hyderabad', degree: 'B.Com', graduationYear: 2027 },
        { name: 'Priya Das', city: 'Bhubaneswar', degree: 'BCA', graduationYear: 2027 }
      ]
    },
    {
      year: 2022, membersCount: 15, members: [
        { name: 'Vikas Gupta', city: 'Nashik', degree: 'B.Tech', graduationYear: 2026 },
        { name: 'Meera Joshi', city: 'Aurangabad', degree: 'BA', graduationYear: 2026 },
        { name: 'Arjun Singh', city: 'Kanpur', degree: 'B.Sc', graduationYear: 2026 },
        { name: 'Vijay Patel', city: 'Vijayawada', degree: 'B.Arch', graduationYear: 2026 }
      ]
    }
  ];

  const handleBatchClick = (batch) => {
    setSelectedBatch(batch);
  };

  const closeModal = () => {
    setSelectedBatch(null);
  };

  return (
    <div className="mx-5">
      <h1 className="text-3xl font-semibold my-6 lg:my-4">Year Book</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:mt-7">
        {batches.map((batch) => (
          <YearBookBatchCard key={batch.year} batch={batch} onClick={handleBatchClick} />
        ))}
      </div>

      {selectedBatch && (
        <div className="fixed inset-0 bg-gray-800 z-50 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 md:w-3/4 lg:w-2/3 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Class of {selectedBatch.year}</h2>
            <ul>
              {selectedBatch.members.map((member, index) => (
                <li key={index} className="mb-2 ">
                  <div className="flex items-center justify-between border-b py-2">
                    <p><strong>Name:</strong> {member.name}</p>
                    <p><strong>City:</strong> {member.city}</p>
                    <p><strong>Degree:</strong> {member.degree}</p>
                    <p><strong>Graduation Year:</strong> {member.graduationYear}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className=" ">
            <button onClick={closeModal} className="mt-4 bg-purple-700 text-white px-7 py-2 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YearBook;