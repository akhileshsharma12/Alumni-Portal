import React from "react";

const YearBook = () => {
  const batches = Array.from({ length: 12 }, (_, i) => 2028 - i);

  return (
    <div className="  mx-5">
      <h1 className="text-3xl font-semibold my-6 lg:my-4 ">Year Book</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:mt-7">
        {batches.map((batch) => (
          <div key={batch} className="p-4 text-center cursor-pointer border border-gray-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="">
              <h2 className="text-lg font-medium">Class of {batch}</h2>
              <p className="text-sm text-gray-500">0 Members</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearBook;