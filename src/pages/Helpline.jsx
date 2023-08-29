function Helpline() {

    const handleSubmit = async (event) => {
      event.preventDefault();
         
        };
  return (
    <section className="bg-pink-200 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-light leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Would you like to get more information from us?
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Don't fret! Just type in your phone number and we will send
            you messages with information to your phone.
          </p>
          <form className="mt-4 space-y-4 lg:mt-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="phone" 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your phone number
              </label>
              <input
                type="tel" 
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+254712345678"
                
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="terms"
                  class="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    to have messages sent to my phone
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-pink-900 bg-pink-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>

  );
}

export default Helpline;