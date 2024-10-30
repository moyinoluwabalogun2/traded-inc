function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        obj.innerHTML = (Math.floor(progress * range + start)).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", function() {
    animateValue("deposited", 0, 67593.79, 2000);
    animateValue("members", 0, 79564, 2000);
    animateValue("countries", 0, 178, 2000);
});



function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}






document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    if (email) {
        alert('Subscribed successfully with email: ' + email);
        // Here you can add the code to actually handle the subscription, e.g., sending the email to your server
    } else {
        alert('Please enter a valid email address.');
    }
});