const form = document.getElementById('form-container');
const container = document.querySelector('.container');
const emailInput = document.getElementById('email');
const error = document.getElementById('emailError');
const infoSection = document.querySelector('.info-section');
const imgContainer = document.querySelector('.image-container');
const successCard = document.querySelector('.success-card');
const para = document.getElementById('para-to-edit');
const dismissBtn = document.querySelector('.success-btn');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailInput.style.border = 'none';
    error.style.display = 'none';
    if (!isValidEmail(emailInput.value)) {
        emailInput.style.border = '2px solid red';
        error.style.display = 'block';
    } else {
        infoSection.style.display = 'none';
        imgContainer.style.display = 'none';
        successCard.style.display = 'block';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        para.innerHTML = `<p>A confirmation email has been sent to <strong>${emailInput.value}</strong>. Please open it and click the button inside to confirm your subscription.`
        container.style.backgroundColor = 'hsl(234, 29%, 20%)';
    }
})
const isValidEmail = (emailId) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailId);
}
dismissBtn.addEventListener('click', () => {
    infoSection.style.display = 'flex';
    imgContainer.style.display = 'block';
    successCard.style.display = 'none';
    container.style.justifyContent = 'right';
    container.style.alignItems = '';
    container.style.backgroundColor = 'hsl(0, 0%, 100%)';
    emailInput.value = '';
    emailInput.style.border = '0.5px solid  hsl(231, 7%, 60%)';

})