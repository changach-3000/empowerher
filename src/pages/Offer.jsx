function Offer() {
  return (
    <div class="bg-pink-900">
      <h2 class="text-center text-4xl text-white mb-4">
        WHAT WE OFFER
      </h2>
      <div class="container mx-auto px-4 lg:flex lg:items-center lg:justify-between gap-4">
        <div class="lg:flex lg:items-center lg:w-1/2 p-4">
          <div class="lg:mr-8">
            <h2 class="text-3xl font-semibold text-white mb-4">
              AI Assistance
            </h2>
            <p class="text-pink-200">
              We offer a chatbot ready to assist you with any inquiries related
              to your pregnancy, whether it's about unusual symptoms, dietary
              recommendations, or general questions. Feel free to ask, and our
              EmpowerBot is here to help!{" "}
            </p>
          </div>
          <img
            src="https://siamcomputing.com/wp-content/uploads/2022/05/Chatbot.png"
            alt="Content Image"
            class="w-full h-48 object-cover rounded-lg lg:w-80"
          />
        </div>

        <div class="mt-10 lg:flex lg:items-center lg:w-1/2 lg:flex-row-reverse p-4">
          <div class="lg:ml-8">
            <h2 class="text-3xl font-semibold text-white mb-4">
              Counsellors
            </h2>
            <p class="text-pink-200">
              Secure a personalized session with a highly trained counselor who
              specializes in providing support during this crucial period. Our
              skilled counselor is here to assist you through this journey,
              offering valuable insights, guidance, and a safe space to discuss
              any concerns or challenges you may be facing. Whether you need
              emotional support, expert advice, or simply someone to talk to,
              booking a session with our counselor is a meaningful step towards
              ensuring your well-being during this time..{" "}
            </p>
          </div>
          <img
            src="https://counsellingskillsacademy.com/wp-content/uploads/2022/01/Two-people-talking-02-800-x-500-px.png"
            alt="Content Image"
            class="w-full h-48 object-cover rounded-lg lg:w-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;

