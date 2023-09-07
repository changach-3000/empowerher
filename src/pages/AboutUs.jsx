import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import Offer from "./Offer";

function AboutUs() {
  return (
    <div className="landing-page relative bg-pink-900">
      <section className=" banner relative flex items-center justify-center bg-pink-200 h-screen dark:bg-gray-900">
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#831843"
            fill-opacity="1"
            d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,170.7C672,192,768,224,864,229.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div className="blob"></div>
            <img src="./landing2.png" alt="pregnant girl" />
          </div>

          <div className="place-self-center relative lg:col-span-7">
            <h1 className="z-10 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              em<span className="text-pink-900">POWER</span>
              <span className="font-light">her</span>
            </h1>
            <p className="z-10 max-w-2xl mb-6 font-light text-pink-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Our mission is to provide a safe and empowering space where young
              mothers can access vital resources, gain knowledge, and connect
              with a community of like-minded individuals who understand the
              challenges they face. We do this through curated content, expert
              guidance, and peer support,
            </p>
            <a
              href="#"
              className="z-10 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#resources"
              className="z-10 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-pink-900 border border-pink-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Go to site
            </a>
          </div>
        </div>
      </section>

      {/* What do we offer */}
      <section className="py-16 bg-pink-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:justify-center md:gap-8">
            <div className="md:w-1/2">
              <video
                data-v-f4daae2a=""
                data-test-id="animation-video"
                autoPlay
                loop
                muted
                width="100%"
                height="auto"
                className="animation__element rounded-lg"
              >
                <source
                  data-v-f4daae2a=""
                  src="pregtest.mp4"
                  preload="auto"
                  type="video/webm"
                />
              </video>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h2 class="mb-4 text-4xl tracking-tight font-light text-white dark:text-white">
                So you think you're pregnant?
              </h2>
              <p class="text-white text-base dark:text-gray-400">
                If this question has brought you here, don't worry, you know
                why? because we've got you! <br />
                Our commitment lies in offering you comprehensive resources,
                guiding you on your next steps. From pinpointing hospital and
                shelter locations to facilitating connections with adoption
                centers, we provide a wide range of essential information.
                Moreover, we prioritize your well-being by offering family
                planning and sexual education to empower you with knowledge. To
                ensure a holistic approach to your journey, we also link you
                with experienced counselors who can support you through mental
                health challenges and guide you through the entire process.
              </p>
              <div className="flex justify-center md:justify-start mt-6 space-x-4 text-white">
                Learn More
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of what we offer */}

      <section class="bg-pink-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#831843"
            fill-opacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,192C384,171,480,85,576,58.7C672,32,768,64,864,80C960,96,1056,96,1152,85.3C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-pink-900 dark:text-white text-center">
          RESOURCES
        </h2>
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>

              <h3 class="mb-2 text-xl font-bold dark:text-white text-pink-900">
                Pregnancy Journey
              </h3>

              <p class="text-gray-500 dark:text-gray-400">
                Let's get to see what stage you are at, and how you can proceed
                learning the specific routines you need to follow with regards
                to diet, exercise and general body wellness for you and your
                baby
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>

              <h3 class="mb-2 text-xl font-bold dark:text-white text-pink-900">
                Hospitals
              </h3>

              <p class="text-gray-500 dark:text-gray-400">
                Get to see the hospitals around you for when you need to go for
                checkups.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>

              <h3 class="mb-2 text-xl font-bold dark:text-white text-pink-900">
                Shelters
              </h3>

              <p class="text-gray-500 dark:text-gray-400">
                If your family situation is not condusive for your current
                situation, find some shelters around you that can help you.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>

              <h3 class="mb-2 text-xl font-bold dark:text-white text-pink-900">
                Adoption Agencies
              </h3>

              <p class="text-gray-500 dark:text-gray-400">
                These are vetted adoption agencies that are guaranteed to take
                great care of your child in the event that you are not able to
                care for your child.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>

              <h3 class="mb-2 text-xl font-bold dark:text-white text-pink-900">
                Counselling
              </h3>

              <p class="text-gray-500 dark:text-gray-400">
                Learn how you can be better prepared for situations later on in
                life.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>

              <h3 class="mb-2 text-xl font-bold dark:text-white text-pink-900">
                Sexual Education & family planning
              </h3>

              <p class="text-gray-500 dark:text-gray-400">
                You can get information about your sexual health, learn more
                about your body, how to take care of it and learn more on sexual
                education.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end of resources section */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fbcfe8"
          fill-opacity="1"
          d="M0,256L60,261.3C120,267,240,277,360,250.7C480,224,600,160,720,149.3C840,139,960,181,1080,208C1200,235,1320,245,1380,250.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      {/* what we specially offer */}
      <Offer />
      {/* end of what we specially offer */}
      
      {/* start of testimonials */}
      <Testimonials />
      {/* end of testimonials */}

      {/* footer section */}
      <footer class="bg-pink-900 rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-white sm:text-center dark:text-gray-400 ">
            © 2023 EmpowerHer. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0 text-white">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
