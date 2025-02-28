// import React from "react";

// const PostJob = () => {
//     return (
//         <div className="w-full md:w-[90%] py-5 md:px-0">
//             <div className="w-full md:w-7/10 space-y-6  bg-white pr-2  rounded-lg ">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <label className="block font-semibold">Job Title</label>
//                         <input type="text" placeholder="Enter title here" className="w-full p-3 border border-gray-300 rounded-md" />
//                     </div>
//                     <div>
//                         <label className="block font-semibold">Company</label>
//                         <input type="text" placeholder="Enter company name here" className="w-full p-3 border border-gray-300 rounded-md" />
//                     </div>
//                 </div>

//                 <div>
//                     <label className="block font-semibold">Job Description</label>
//                     <textarea placeholder="Enter Job Description here" className="w-full p-3 border border-gray-300 rounded-md h-32"></textarea>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <label className="block font-semibold">Job Type</label>
//                         <select className="w-full p-3 border border-gray-300 rounded-md">
//                             <option>Remote</option>
//                             <option>Onsite</option>
//                             <option>Hybrid</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block font-semibold">No of Vacancies</label>
//                         <select className="w-full p-3 border border-gray-300 rounded-md">
//                             {[...Array(10).keys()].map((num) => (
//                                 <option key={num} value={num}>{num}</option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <label className="block font-semibold">Job Location</label>
//                         <input type="text" placeholder="Enter Job Location" className="w-full p-3 border border-gray-300 rounded-md" />
//                     </div>
//                     <div>
//                         <label className="block font-semibold">Job Application URL</label>
//                         <input type="text" placeholder="Enter URL here" className="w-full p-3 border border-gray-300 rounded-md" />
//                     </div>
//                 </div>

//                 <button className="bg-purple-700 text-white px-6 py-3 rounded-md w-full md:w-auto">Request Post</button>
//             </div>
//         </div>


//     );
// };

// export default PostJob;

import React, { useState } from "react";

const PostJob = () => {
    const [jobTitle, setJobTitle] = useState("");
    const [company, setCompany] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobType, setJobType] = useState("Remote");
    const [vacancies, setVacancies] = useState(0);
    const [jobLocation, setJobLocation] = useState("");
    const [jobUrl, setJobUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('From Submitted :', { jobTitle, company, jobDescription, jobType, vacancies, jobLocation, jobUrl });

        setJobTitle("");
        setCompany("");
        setJobDescription("");
        setJobType("Remote");
        setVacancies(0);
        setJobLocation("");
        setJobUrl("");

        alert("Job Posted Successfully");
    };

    return (
        <div className="w-full md:w-[80%] py-5 pr-5 md:px-0">
            <form onSubmit={handleSubmit} className="w-full md:w-7/10 space-y-6  bg-white  rounded-lg ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-semibold">Job Title</label>
                        <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Enter title here" className="w-full p-3 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block font-semibold">Company</label>
                        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter company name here" className="w-full p-3 border border-gray-300 rounded-md" />
                    </div>
                </div>

                <div>
                    <label className="block font-semibold">Job Description</label>
                    <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Enter Job Description here" className="w-full p-3 border border-gray-300 rounded-md h-32"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-semibold">Job Type</label>
                        <select value={jobType} onChange={(e) => setJobType(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md">
                            <option>Remote</option>
                            <option>Onsite</option>
                            <option>Hybrid</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-semibold">No of Vacancies</label>
                        <select value={vacancies} onChange={(e) => setVacancies(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md">
                            {[...Array(10).keys()].map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-semibold">Job Location</label>
                        <input type="text" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} placeholder="Enter Job Location" className="w-full p-3 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block font-semibold">Job Application URL</label>
                        <input type="text" value={jobUrl} onChange={(e) => setJobUrl(e.target.value)} placeholder="Enter URL here" className="w-full p-3 border border-gray-300 rounded-md" />
                    </div>
                </div>

                <button type="submit" className="bg-purple-700 text-white px-6 py-3 rounded-md w-full md:w-auto">Request Post</button>
            </form>
        </div>
    );
};

export default PostJob;
