import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AboutPage = () => {
    const gradientTextStyle = {
        background: 'linear-gradient(144deg, #5c0f8b 63%, #ff5100 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-10">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800" style={gradientTextStyle}>
                        About G.H. Raisoni University Alumni Portal
                    </h1>

                    {/* Introduction */}
                    <p className="mt-4 text-gray-700 text-center text-sm sm:text-lg">
                        Welcome to the <strong>G.H. Raisoni University Alumni Portal</strong>, a vibrant platform designed to connect, inspire, and empower our alumni community. Whether you’re looking to reconnect with old friends, expand your professional network, or give back to your alma mater, this portal serves as your gateway to lifelong engagement with <strong>GHRU</strong>.
                    </p>

                    {/* Vision */}
                    <h2 className="text-2xl font-semibold text-blue-800 mt-6 text-center">Our Vision</h2>
                    <p className="text-gray-700 text-center text-sm sm:text-lg">
                        To cultivate a dynamic and engaged alumni network that fosters professional growth, lifelong learning, and a strong sense of belonging to the <span className="text-orange-500 font-bold">Raisoni family</span>.
                    </p>

                    {/* Mission */}
                    <h2 className="text-2xl font-semibold text-blue-800 mt-6 text-center">Our Mission</h2>
                    <ul className="list-none mt-3 text-gray-700 space-y-2 text-sm sm:text-lg">
                        <li><span className="text-orange-500 font-bold">✨ Reconnect & Network</span> – Strengthen ties between alumni, students, and faculty through meaningful interactions.</li>
                        <li><span className="text-orange-500 font-bold">✨ Support & Inspire</span> – Create opportunities for mentorship, career guidance, and professional growth.</li>
                        <li><span className="text-orange-500 font-bold">✨ Engage & Contribute</span> – Encourage alumni to give back through knowledge sharing, internships, and university initiatives.</li>
                    </ul>

                    {/* What You Can Do */}
                    <h2 className="text-2xl font-semibold text-blue-800 mt-6 text-center">What You Can Do Here</h2>
                    <ul className="list-none mt-3 text-gray-700 space-y-2 text-sm sm:text-lg">
                        <li><strong>✅ Stay Updated</strong> – Get the latest news on university events, reunions, and achievements.</li>
                        <li><strong>✅ Expand Your Network</strong> – Connect with fellow alumni and build valuable professional relationships.</li>
                        <li><strong>✅ Share Your Story</strong> – Inspire current students with your success journey.</li>
                        <li><strong>✅ Unlock Opportunities</strong> – Explore mentorship, job placements, and internship programs.</li>
                        <li><strong>✅ Give Back</strong> – Support university initiatives and contribute to GHRU’s legacy.</li>
                    </ul>

                    {/* Closing Statement */}
                    <p className="text-center font-bold text-lg sm:text-xl mt-6">
                        Together, let's celebrate our shared journey and continue making a difference. <br />
                        <span className="text-orange-500 font-bold">Once a Raisonian, Always a Raisonian! 🎓💙</span>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;
