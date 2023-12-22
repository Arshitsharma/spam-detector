document.addEventListener('DOMContentLoaded', function() {
    const aboutText = "Welcome to the Spam Detector project! Our goal is to provide a tool that helps identify and filter out spam messages. Using advanced machine learning algorithms, our system analyzes the content of messages to determine the likelihood of being spam. With the Spam Detector, users can submit messages for analysis and receive predictions on whether the message might be spam or not. Feel free to try it out by entering a message in the form above and see the prediction results!";
    const featuresText = "Our Spam Detector includes various features such as advanced algorithms, real-time analysis, and a user-friendly interface to help users in identifying spam messages effectively with accuracy more than 98%.";
    const howItWorksText = "Implemented within Flask, our Spam Detector leverages the Multinomial Naive Bayes algorithm, known for its efficiency in text classification, particularly with word frequency features. This choice stems from its simplicity and effectiveness in handling large feature spaces, enabling accurate categorization of messages into spam and non-spam categories based on their textual content. Flask's framework efficiently manages the backend, ensuring swift identification and empowering users with effective spam filtration.";

    const aboutTypingText = document.getElementById('about-typing-text');
    const featuresTypingText = document.getElementById('features-typing-text');
    const howItWorksTypingText = document.getElementById('how-it-works-typing-text');

    let aboutIndex = 0;
    let featuresIndex = 0;
    let howItWorksIndex = 0;

    let typingStarted = {
        about: false,
        features: false,
        howItWorks: false
    };

function typeWriter(element, text, index) {
    if (index <= text.length) {
        const textWithCursor = text.substring(0, index) + '<span class="cursor">|</span>'; // Adding a cursor '|' at the current index
        element.innerHTML = textWithCursor;
        index++;
        setTimeout(() => typeWriter(element, text, index), 20); // Adjust the typing speed here (milliseconds)
    }
}

    

    function startTypingEffect() {
        checkAndStartTyping('about', aboutText, aboutTypingText, aboutIndex);
        checkAndStartTyping('features', featuresText, featuresTypingText, featuresIndex);
        checkAndStartTyping('how-it-works', howItWorksText, howItWorksTypingText, howItWorksIndex);
    }

    function checkAndStartTyping(section, text, element, index) {
        const sectionElement = document.getElementById(section);
        const sectionPosition = sectionElement.getBoundingClientRect();

        if (
            sectionPosition.top >= 0 &&
            sectionPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            && !typingStarted[section]
        ) {
            typingStarted[section] = true;
            typeWriter(element, text, index);
        }
    }

    window.addEventListener('scroll', startTypingEffect);
    startTypingEffect(); // Initiate on page load
});





function showPrediction(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `message=${encodeURIComponent(message)}`,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('prediction-result').innerText = `The message is: ${data.prediction}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function resetForm() {
    document.getElementById("message").value = ""; // Reset the textarea
    document.getElementById("prediction-result").innerText = ""; // Clear the prediction result
}
