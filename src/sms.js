// Set your app credentials
const credentials = {
    apiKey: 'your_api_key',
    username: 'your_username',
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
