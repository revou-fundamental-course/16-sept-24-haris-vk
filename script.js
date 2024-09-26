const userName = 'haris'; // Replace with actual user name
document.getElementById('user-name').innerHTML = userName;

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    document.getElementById('form-response').innerHTML = Name: ${name}<br>Email: ${email}<br>Message: ${message};
});