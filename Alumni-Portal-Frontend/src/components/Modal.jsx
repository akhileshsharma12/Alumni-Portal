import React from 'react'

function Modal() {




    return (

        <>
            {/* Job View Modal  : alumni & admin*/}
            <dialog id="job-view-modal" className="modal">
                <div className="modal-box w-11/12 max-w-3xl p-6 sm:p-8">

                    <div>
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <div className="text-start">
                                <h2 className="text-2xl font-semibold">Software Engineer</h2>
                                <small className="text-purple-600">ABC Company</small>
                                <p>Amravati, Maharashtra, India</p>
                            </div>
                            <div>
                                <button className="mt-3 sm:mt-4 px-4 sm:px-5 py-2 border-2 border-purple-400 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm sm:text-base flex items-center">
                                    Apply
                                    <i class="fa-solid fa-up-right-from-square ml-2"></i>
                                </button>
                              </div>
                        </div>

                        <div className="text-start grid grid-cols-1 sm:grid-cols-3 gap-y-2 sm:gap-x-3 mt-4 text-gray-500 text-sm sm:text-base text-center sm:text-left">
                            <span>
                                Type: <span className="text-black font-semibold">Remote</span>
                            </span>
                            <span>
                                Vacancies: <span className="text-black font-semibold">04</span>
                            </span>
                            <span>
                                Posted Date: <span className="text-black font-semibold">04, February 2025</span>
                            </span>
                        </div>

                        <div className="text-start mt-4">
                            <h2 className="font-semibold text-purple-700 text-2xl">Overview</h2>
                            <p className="mt-2 text-sm sm:text-base">
                                From ExaBytes to ZettaBytes, Azure Storage leads the industry in Advanced offloads and accelerations, powering high-performance Cloud scale Storage and Networking.
                            </p>
                            <p className="mt-4 text-sm sm:text-base">
                                As a Software Engineer II in the Storage Infrastructure team, you will design and develop solutions to onboard new hardware accelerators, processors, transports, and cluster-level performance improvements.
                            </p>
                            <p className="mt-4 text-sm sm:text-base">
                                Your work will encompass the entire software development lifecycle, including operation, scaling, training, and support.
                            </p>
                        </div>
                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>



            {/* alumni directory : view profile modal */}
            <dialog id="alumni-directory-view-profile" className="modal">
                <div className="modal-box">
                    
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


        </>
    )
}

export default Modal