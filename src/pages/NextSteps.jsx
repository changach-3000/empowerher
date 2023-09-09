import React, { useState } from "react";
import { Link } from "react-router-dom";

function NextSteps() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>

      <div class="min-w-screen min-h-screen bg-pink-200 flex items-center justify-center py-5 ">
        <div class="w-full bg-pink-200 border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-xl mx-auto">
              <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                Here are some stories
              </h1>
              <h3 class="text-xl mb-5 font-light">
                These are stories of girls who are going, or have gone through
                what you are going through. You are not alone!
              </h3>
              <div class="text-center mb-10">
                <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div class="-mx-3 md:flex items-start">
              <div class="px-3 md:w-1/3">
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img
                        src="https://motherswithoutborders.org/wp-content/uploads/2022/04/woman-with-green.png"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                        Neema Wakio
                      </h6>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      When I found out I was pregnant, I really didn't know what
                      to do.I was scared and felt alone and didn't know how to
                      move forward. Finding information about pregnancy,
                      especially for a teenager like me was stressful, because I
                      couldn't tell my parents yet, and any information I could
                      get was from the people around me.When I stumbled on this
                      site it helped me get a way forward, helped me find a way
                      to tell my parents, and together find a way forward.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img
                        src="https://www.shutterstock.com/shutterstock/photos/1852876369/display_1500/stock-vector-black-afro-abstract-woman-face-vector-girl-portrait-1852876369.jpg"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                        Sharon Wangui.
                      </h6>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      When my parents knew I was pregnant, they threw me out of
                      the house.There I was, alone, pregnant, with no idea of a
                      way forward. I found this site and it helped me find out
                      more about pregnancy,how to navigate it, as well as
                      connect me to a shelters that took me in and took care of
                      me.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-3 md:w-1/3">
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img
                        src="https://img.freepik.com/free-vector/abstract-hand-drawn-woman-portrait_52683-58154.jpg?w=2000"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                        Teresia Wanjiru.
                      </h6>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Finding out I was pregnant was one of the toughest times
                      in my life.I did not know anything about how to take care
                      of a pregnancy, what to eat, going for checkups, the
                      milestones i needed to keep track of, and the information
                      from the internet was all mixed up. This site helped me
                      find proper resources, like information to hospitals, a
                      helpdesk and helped me find ways to tell the people around
                      me. It also helped reduce the stigma and shame I was
                      feeling and helped me accept my situation
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img
                        src="https://thumbs.dreamstime.com/b/abstract-modern-young-african-american-black-woman-portrait-silhouette-fashion-minimal-trendy-people-face-paper-cut-mosaic-flat-171218598.jpg"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                        Emily
                      </h6>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      This site helped me a lot, especially the family planning
                      bit and the sexual education.In my family, we hardly talk
                      about these things and make it sound like a taboo subject.
                      The only way to get information is through asking peers,
                      who also have misinformation and just continue the cycle
                      of teenage pregnancies.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-3 md:w-1/3">
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img
                        src="https://img.freepik.com/premium-vector/hand-drawn-vector-abstract-flat-graphic-contemporary-aesthetic-fashion-illustration-with-bohemian_478440-219.jpg"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                        Nevada
                      </h6>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      After finding out I was pregnant, the father of the child
                      wanted nothing to do with it. My family, despite being
                      supportive did not have the necessary resources to help
                      take care of the child, and the only option was to give
                      the baby up for adoption.Finding credible adoption centers
                      can be a difficult task, but with this site, it was easy
                      to get in contact with credible agencies, as well as set
                      up meetings with them, and working out everything
                      smoothly.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img
                        src="https://img.freepik.com/premium-vector/portrait-african-american-woman_478440-222.jpg?w=2000"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                        Felicity.
                      </h6>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Pregancy is not an easy feat. And for a teenager it is
                      especially difficult. The trauma and stigma you get from
                      it is unmatched.It makes you feel like a failure, like you
                      are worth nothing but this site helped me get through
                      this. Speaking to specialists and having adequate
                      resources really helped me get through everything.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isFormVisible ? (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
         
            <form className="h-full flex flex-col">
              <div className="mb-4">
                <label
                  htmlFor="userName"
                  className="inline-block mb-1 font-medium"
                >
                  Pseudo Name
                </label>
                <input
                  placeholder="Jane Doe"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="userName"
                  name="userName"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="story"
                  className="inline-block mb-1 font-medium"
                >
                  Story
                </label>
                <textarea
                  placeholder="Add story here!"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="text"
                  name="text"
                />
              </div>
              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-pink-900 hover:bg-pink-600 focus:shadow-outline focus:outline-none"
                >
                  Add Story
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleFormVisibility}
          title="Add Story"
          className="fixed bottom-10 right-10 bg-pink-900 h-10 px-5 m-2 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-pink-400 hover:drop-shadow-2xl duration-300 font-light"
        >
          Add Story
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
        </button>
      )}
    </>
  );
}

export default NextSteps;
