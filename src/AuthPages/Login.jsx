import React from "react"

function Login () {
    return (
      <div className="relative">
         <video
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover w-screen h-full"
      >
        <source src="landing2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        <div className="relative bg-opacity-75 bg-pink-200">
          <svg
            className="absolute inset-x-0 bottom-0 bg-opacity-75 text-pink-100"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-pink-900 sm:text-4xl sm:leading-none ">
                  Join Our Platform Today
                  
                </h2>
                <p className="max-w-xl mb-4 text-base text-pink-900 md:text-lg">
                Join us today by creating an account and unlock a world of exclusive benefits and experiences waiting just for you!
                </p>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Create An Account
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="userName"
                        className="inline-block mb-1 font-medium"
                      >
                        User Name
                      </label>
                      <input
                        placeholder="Jane"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="userName"
                        name="userName"
                      />
                    </div>
                   
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input
                        placeholder="password"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="pwd"
                        name="password"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-pink-900 hover:bg-pink-600 focus:shadow-outline focus:outline-none"
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      Already Registered?  Log In.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Login;