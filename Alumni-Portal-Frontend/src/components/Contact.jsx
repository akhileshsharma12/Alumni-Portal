import React from 'react'

const Contact = () => {

    const gradientTextStyle = {
        background: 'linear-gradient(144deg, #5c0f8b 40%, #ff5100 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <div>
            <section className="bg-white 0">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-center " style={gradientTextStyle}>Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-700  sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label className="block mb-2 text-lg font-medium text-black "> Enter Email </label>
                            <input type="email" id="email" className="shadow-sm bg-gray-100  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required/>
                        </div>
                        <div>
                            <label className="block mb-2 text-lg font-medium text-black">Enter Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm " placeholder="Let us know how we can help you" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-lg font-medium text-black">Enter Message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border " placeholder="Leave a comment..."></textarea>
                        </div>
                        <button className="py-3 px-5 text-sm font-medium text-center text-white bg-purple-700 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact