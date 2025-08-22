function showForm(form) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('forgot-form').style.display = 'none';
    document.querySelectorAll('#form-tabs button').forEach(btn => btn.classList.remove('active'));
    if (form === 'login') {
        document.getElementById('login-form').style.display = 'flex';
        document.querySelectorAll('#form-tabs button')[0].classList.add('active');
    } else if (form === 'register') {
        document.getElementById('register-form').style.display = 'flex';
        document.querySelectorAll('#form-tabs button')[1].classList.add('active');
    } else if (form === 'forgot') {
        document.getElementById('forgot-form').style.display = 'flex';
        document.querySelectorAll('#form-tabs button')[2].classList.add('active');
    }
}

// Default to login form
showForm('login');

// Example form submit handlers
['login-form', 'register-form', 'forgot-form'].forEach(formId => {
    document.getElementById(formId).addEventListener('submit', function(e) {
        e.preventDefault();
        alert(formId.replace('-form','') + ' submitted!');
    });
});
