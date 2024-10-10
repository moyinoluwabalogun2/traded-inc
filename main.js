function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "" || password == "") {
        alert("Please fill in both fields.");
        return false;
    }
    return true;
}








async function handleSubmit(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    if (!terms) {
        alert('You must agree to the terms and privacy policy.');
        return;
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, password })
    });

    if (response.ok) {
        alert('Account created successfully!');
    } else {
        alert('Failed to create account.');
    }
}







const headings = [
    {
        title: "Does Your Money Need Speed?",
        subtitle: "Our company can assist you with any aspect of investment management",
        button: "Get A Quote"
    },
   
    {
        title: "Your Financial Growth Partner",
        subtitle: "Achieve your financial goals with our help",
        button: "Contact Us"
    }
];
let currentHeadingIndex = 0;

function updateHeading() {
    const headingElement = document.getElementById('hero-heading');
    const subheadingElement = document.getElementById('hero-subheading');
    const buttonElement = document.getElementById('hero-btn');

    headingElement.style.opacity = 0;
    subheadingElement.style.opacity = 0;
    buttonElement.style.opacity = 0;

    setTimeout(() => {
        headingElement.innerText = headings[currentHeadingIndex].title;
        subheadingElement.innerText = headings[currentHeadingIndex].subtitle;
        buttonElement.innerText = headings[currentHeadingIndex].button;

        headingElement.style.opacity = 1;
        subheadingElement.style.opacity = 1;
        buttonElement.style.opacity = 1;
    }, 500);
}

function prevHeading() {
    currentHeadingIndex = (currentHeadingIndex - 1 + headings.length) % headings.length;
    updateHeading();
}

function nextHeading() {
    currentHeadingIndex = (currentHeadingIndex + 1) % headings.length;
    updateHeading();
}

function toggleMenu() {
    const navbarUl = document.querySelector('.navbar ul');
    if (navbarUl.style.display === 'flex') {
        navbarUl.style.display = 'none';
    } else {
        navbarUl.style.display = 'flex';
    }
}
updateHeading();





function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = function() {
    animateValue("clients", 0, 1450, 2000);
    animateValue("awards", 0, 18, 2000);
    animateValue("experience", 0, 21, 2000);
    animateValue("experts", 0, 16000, 2000);
}











function calculate() {
    const target = parseFloat(document.getElementById('target').value);
    const duration = parseFloat(document.getElementById('duration').value);
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('return').value) / 100;
    const invest = document.getElementById('invest').value;

    let n;
    if (invest === 'month') {
        n = 12;
    } else {
        n = 1;
    }

    const monthlyRate = rate / n;
    const totalPeriods = duration * n;

    const futureValue = target;
    const presentValue = principal;

    const monthlyContribution = (futureValue - presentValue * Math.pow(1 + monthlyRate, totalPeriods)) / ((Math.pow(1 + monthlyRate, totalPeriods) - 1) / monthlyRate);

    const endBalance = presentValue * Math.pow(1 + monthlyRate, totalPeriods) + monthlyContribution * ((Math.pow(1 + monthlyRate, totalPeriods) - 1) / monthlyRate);
    const totalPrincipal = presentValue + monthlyContribution * totalPeriods;
    const totalInterest = endBalance - totalPrincipal;

    document.getElementById('monthly-contribution').innerText = `$${monthlyContribution.toFixed(2)}`;
    document.getElementById('end-balance').innerText = `$${endBalance.toFixed(2)}`;
    document.getElementById('total-interest').innerText = `$${totalInterest.toFixed(2)}`;
    document.getElementById('total-principal').innerText = `$${totalPrincipal.toFixed(2)}`;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}





