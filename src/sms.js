// Set your app credentials
const credentials = {
    apiKey: '27e7c7094c6bee1818d7a22d68ca3d7e06275363844b521e4bff089098dcb5b9',
    username: 'Mwangitess',
  }
// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage() {
    const options = {
        // Set the numbers you want to send to in international format
        to: ['+254794367355'],
        // Set your message
        message: "Hello, welcome to EmpowerHer. We got you!!! Thank you for subscribing to our sms services, we look forward to sending you more information and resources",
       
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
}

sendMessage();