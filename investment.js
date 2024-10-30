let selectedPlan = 'gold';
const plans = {
    gold: { roi: 1.2, min: 500, max: 5000 },
    silver: { roi: 0.8, min: 100, max: 500 },
    bronze: { roi: 0.5, min: 20, max: 100 }
};

function selectPlan(plan) {
    selectedPlan = plan;
    document.getElementById('gold-button').classList.remove('active');
    document.getElementById('silver-button').classList.remove('active');
    document.getElementById('bronze-button').classList.remove('active');
    document.getElementById(plan + '-button').classList.add('active');

    document.getElementById('gold-plan').style.border = 'none';
    document.getElementById('silver-plan').style.border = 'none';
    document.getElementById('bronze-plan').style.border = 'none';
    document.getElementById(plan + '-plan').style.border = '2px solid #f4c542';

    const max = plans[plan].max;
    document.getElementById('investment-amount').max = max;
    document.querySelector('.slider').max = max;

    calculateProfit();
}

function updateAmount(value) {
    document.getElementById('investment-amount').value = value;
    document.getElementById('usd-amount').innerText = value + ' USD';
    calculateProfit();
}

function calculateProfit() {
    const amount = parseFloat(document.getElementById('investment-amount').value);
    const roi = plans[selectedPlan].roi;
    const dailyProfit = (amount * roi) / 100;
    const totalProfit = dailyProfit * 30;
    document.getElementById('daily-profit').innerText = dailyProfit.toFixed(2) + ' USD';
    document.getElementById('total-profit').innerText = totalProfit.toFixed(2) + ' USD';
}

document.addEventListener('DOMContentLoaded', () => {
    calculateProfit();
});









function showWithdrawList() {
    const depositTable = document.getElementById('depositTable');
    const withdrawTable = document.getElementById('withdrawTable');
    const depositButton = document.getElementById('depositButton');
    const withdrawButton = document.getElementById('withdrawButton');
    depositTable.style.display = 'none';
    withdrawTable.style.display = 'table';
    depositButton.classList.remove('active');
    withdrawButton.classList.add('active');
}

function showDepositList() {
    const depositTable = document.getElementById('depositTable');
    const withdrawTable = document.getElementById('withdrawTable');
    const depositButton = document.getElementById('depositButton');
    const withdrawButton = document.getElementById('withdrawButton');
    depositTable.style.display = 'table';
    withdrawTable.style.display = 'none';
    depositButton.classList.add('active');
    withdrawButton.classList.remove('active');
}