function Testimonials() {
    return (
      <section className="py-16 rounded bg-pink-200 mx-4 ml-4">
        {/* <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> */}
        <div className="container mx-auto">
          <h4 className=" text-xl font-semibold mb-8 text-center text-pink-900">TESTIMONIALS</h4>
          <h1 className="mb-8 text-center text-pink-900 font-light">
            What users say about us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg flex items-center rounded-bl-none rounded-tr-none">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/1852876369/display_1500/stock-vector-black-afro-abstract-woman-face-vector-girl-portrait-1852876369.jpg" // Replace with the URL or path of the first image
                alt="Farmer Jane Doe"
                className="w-16 h-16 rounded-lg mr-4 rounded-bl-none rounded-tr-none"
              />
              <div>
                <p className="text-gray-800">
                  <p className="text-green-800 font-semibold mb-2">
                    - Jane Doe
                  </p>
                  "This platform helped me get the necessary resources I needed to go through my pregnancy"
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg flex items-center rounded-tr-none rounded-bl-none">
              <img
                src="https://img.freepik.com/free-vector/abstract-hand-drawn-woman-portrait_52683-58154.jpg?w=2000" // Replace with the URL or path of the second image
                alt="Investor John Smith"
                className="w-16 h-16 rounded-lg mr-4 rounded-bl-none rounded-tr-none"
              />
              <div>
                <p className="text-green-800 font-semibold mb-2">
                  - Teresia
                </p>
                <p className="text-gray-800">
                  "I especially loved that I got connected to a professional counsellor who helped me through my depression."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  