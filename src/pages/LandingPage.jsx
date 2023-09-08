import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page relative">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="relative h-screen">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <Link to="/about"> 
        <button
        title="Get Started"
        className="fixed bottom-10 right-10 bg-pink-900 w-40 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-xl hover:bg-pink-400 hover:drop-shadow-2xl duration-300"
        style={{ animation: 'bounce 1s ease infinite' }}
       >
        Get Started
        <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
      </button>
    </Link>
  </div> 
      </section>
</div>
  );
}

export default LandingPage;
