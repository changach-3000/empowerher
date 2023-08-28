import React, { Component, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';

class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        gender: '',
        age: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { name, gender, age } = steps;
  
      this.setState({ name, gender, age });
    }
  
    render() {
      const { name, gender, age } = this.state;
      return (
        <div style={{ width: '100%' }}>
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

  const handleChatToggle = () => {
    setChatVisible(prevState => !prevState);
  };

  return (
    <>
    <section class="bg-pink-200 h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-pink-900 dark:text-white">Counselling</h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">This is a safe space for you. We provide resources for you to be able to understand what you're going through and help you get through it. We also provide a platform where you can communicate with specialists who can help you.</p>
        </div> 
        <div class="grid gap-8 lg:grid-cols-2">
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-between items-center mb-5 text-gray-500">
                    <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                        Video
                    </span>
                    <span class="text-sm">14 days ago</span>
                </div>
                <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Are you feeling depressed?</a></h2>
                <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Explore your feelings and get to understand them deeper. This will help you heal and give you tools to deal with what you're feeling</p>
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                        <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                        <span class="font-medium dark:text-white">
                            Dr Jess Adhiambo
                        </span>
                    </div>
                    <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </article> 
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-between items-center mb-5 text-gray-500">
                    <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                        Article
                    </span>
                    <span class="text-sm">8 months ago</span>
                </div>
                <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">How Do I tell my parents?</a></h2>
                <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Are you struggling to tell the people around you that you are pregnant? Well there is no perfect way to break the news, but this article can help you find a way to tell them.</p>
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                        <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                        <span class="font-medium dark:text-white">
                            Dr Dani Wambui
                        </span>
                    </div>
                    <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </article>                  
        </div>  
    </div>
  </section>

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
                  message: 'What is your name?',
                  trigger: 'name',
                },
                {
                  id: 'name',
                  user: true,
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'Hi {previousValue}! What is your gender?',
                  trigger: 'gender',
                },
                {
                  id: 'gender',
                  options: [
                    { value: 'male', label: 'Male', trigger: '5' },
                    { value: 'female', label: 'Female', trigger: '5' },
                  ],
                },
                {
                  id: '5',
                  message: 'How old are you?',
                  trigger: 'age',
                },
                {
                  id: 'age',
                  user: true,
                  trigger: '7',
                  validator: (value) => {
                    if (isNaN(value)) {
                      return 'value must be a number';
                    } else if (value < 0) {
                      return 'value must be positive';
                    } else if (value > 120) {
                      return `${value}? Come on!`;
                    }
      
                    return true;
                  },
                },
                {
                  id: '7',
                  message: 'Great! Check out your summary',
                  trigger: 'review',
                },
                {
                  id: 'review',
                  component: <Review />,
                  asMessage: true,
                  trigger: 'update',
                },
                {
                  id: 'update',
                  message: 'Would you like to update some field?',
                  trigger: 'update-question',
                },
                {
                  id: 'update-question',
                  options: [
                    { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                    { value: 'no', label: 'No', trigger: 'end-message' },
                  ],
                },
                {
                  id: 'update-yes',
                  message: 'What field would you like to update?',
                  trigger: 'update-fields',
                },
                {
                  id: 'update-fields',
                  options: [
                    { value: 'name', label: 'Name', trigger: 'update-name' },
                    { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                    { value: 'age', label: 'Age', trigger: 'update-age' },
                  ],
                },
                {
                  id: 'update-name',
                  update: 'name',
                  trigger: '7',
                },
                {
                  id: 'update-gender',
                  update: 'gender',
                  trigger: '7',
                },
                {
                  id: 'update-age',
                  update: 'age',
                  trigger: '7',
                },
                {
                  id: 'end-message',
                  message: 'Thanks! Your data was submitted successfully!',
                  end: true,
                },
              ]}

            opened={chatVisible}
            closeFloatingButton={handleChatToggle}
            headerTitle="ChatBot"
          />
        </div>
      )}
    </div>
    </>
  );
};


