// import openai from "openai";
// import readline from "readline";

// // Replace these with your actual API key and organization ID
// const apiKey = "YOUR_API_KEY";
// const organizationId = "YOUR_ORGANIZATION_ID";

// // Initialize the OpenAI API client with your API key and organization ID
// openai.configure({
//   apiKey,
//   organizationId,
// });

// // Define a function to create a chat completion
// const createChatCompletion = async () => {
//   try {
//     // Create a chat completion request
//     const response = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: "Hello" }],
//     });

//     // Log the response
//     console.log(response.data.choices[0].message.content);
//   } catch (error) {
//     // Handle errors
//     console.error("Error:", error);
//   }
// };

// // Call the function to create a chat completion
// createChatCompletion();