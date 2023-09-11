import React, { Component, useState } from "react";
import ChatBot from "react-simple-chatbot";
import PropTypes from "prop-types";
import Swal from 'sweetalert2';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      name: "",
      gender: "",
      age: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { question, name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export const SimpleForm = () => {
  
 

  const [chatVisible, setChatVisible] = useState(false);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChatToggle = () => {
    setChatVisible((prevState) => !prevState);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    Swal.fire({
      icon: 'success',
      title: 'Booking Received',
      text: 'Thank you for booking a session, we will reach out to you for further instructions.',
    });
    e.target.reset();
  
  };
  return (
    <>
      <section class="bg-pink-200 h-screen dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-pink-900 dark:text-white">
              Counselling
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              This is a safe space for you. We provide resources for you to be
              able to understand what you're going through and help you get
              through it. We also provide a platform where you can communicate
              with specialists who can help you.
            </p>
          </div>
          <div class="grid gap-8 lg:grid-cols-2">
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    class="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Video
                </span>
                <span class="text-sm">14 days ago</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Are you feeling depressed?</a>
              </h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                Explore your feelings and get to understand them deeper. This
                will help you heal and give you tools to deal with what you're
                feeling
              </p>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos avatar"
                  />
                  <span class="font-medium dark:text-white">
                    Dr Jess Adhiambo
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    class="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
                <span class="text-sm">8 months ago</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">How Do I tell my parents?</a>
              </h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                Are you struggling to tell the people around you that you are
                pregnant? Well there is no perfect way to break the news, but
                this article can help you find a way to tell them.
              </p>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Green avatar"
                  />
                  <span class="font-medium dark:text-white">
                    Dr Dani Wambui
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {isFormVisible ? (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form className="h-full flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="doctorName"
                  className="inline-block mb-1 font-medium"
                >
                  Select Doctor
                </label>
                <select
                  required
                  className="w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="doctorName"
                  name="doctorName"
                >
                  <option value="" disabled selected>
                    Choose a Doctor
                  </option>
                  <option value="Dr Marshal Hatari">Dr Marshal </option>
                  <option value="Dr Brenda Ndirangu">Dr Brenda Ndirangu</option>
                  <option value="Dr Teresia Wangui">Dr Teresia Wangui</option>
                  <option value="Dr Wakesho">Dr Wakesho</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="Date" className="inline-block mb-1 font-medium">
                  Choose Date
                </label>
                <input
                  placeholder="Date"
                  required
                  type="date"
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
                  Short Remarks
                </label>
                <textarea
                  placeholder="Add what you would like to address during the session!"
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
                  Book Session
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
          Book A session
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
      {/* 
    <div style={{ position: 'relative' }}>
      <div
        className="chat-icon"
        onClick={handleChatToggle}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          cursor: 'pointer',
        }}
      >
        <img
          src="https://img.icons8.com/arcade/64/chat.png"
          alt="Chat Icon"
          style={{ width: '50px', height: '50px' }}
        />
      </div>
      {chatVisible && (
        <div style={{ position: 'fixed', bottom: '80px', right: '20px' }}>
          <ChatBot
             steps={[
                {
                  id: '1',
                  message: 'Hi, I am EmpowerBot! How can I help you today?',
                  trigger: 'question',
                },
                {
                  id: 'question',
                  user: true,
                  trigger: '2',
                },
                {
                  id: '2',
                  message: 'For this, It is normal in pregnant women to experience this, and you should not be worried.For further assistance, look at our resources page under the pregnancy page.',
                  // trigger: 'end-message',
                }
              ]}

            opened={chatVisible}
            closeFloatingButton={handleChatToggle}
            headerTitle="ChatBot"
          />
        </div>
      )}
    </div> */}
    </>
  );
};
