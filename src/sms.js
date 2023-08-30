// Set your app credentials
const credentials = {
    apiKey: 'dd1d6a6bac2fbf043a4ead8f4642d001f73f8122773ce0e2609c64e8476d8f5b',
    username: 'Plastic_On_The_Sofa',
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