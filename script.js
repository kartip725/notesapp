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
        let valid = true;
        let msg = '';
        if (formId === 'login-form') {
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value;
            if (!username) {
                valid = false;
                msg += 'Username is required.\n';
            }
            if (!password) {
                valid = false;
                msg += 'Password is required.\n';
            }
        } else if (formId === 'register-form') {
                const username = document.getElementById('register-username').value.trim();
                const email = document.getElementById('register-email').value.trim();
                const password = document.getElementById('register-password').value;
                const firstName = document.getElementById('first-name').value.trim();
                const lastName = document.getElementById('last-name').value.trim();
                const dob = document.getElementById('dob').value;
                const gender = document.getElementById('gender').value;
                if (!username) {
                    valid = false;
                    msg += 'Username is required.\n';
                }
                if (!email || !validateEmail(email)) {
                    valid = false;
                    msg += 'Valid email is required.\n';
                }
                if (!password || password.length < 6) {
                    valid = false;
                    msg += 'Password must be at least 6 characters.\n';
                }
                if (!firstName) {
                    valid = false;
                    msg += 'First name is required.\n';
                }
                if (!lastName) {
                    valid = false;
                    msg += 'Last name is required.\n';
                }
                if (!dob) {
                    valid = false;
                    msg += 'Date of birth is required.\n';
                }
                if (!gender) {
                    valid = false;
                    msg += 'Gender is required.\n';
                }
        } else if (formId === 'forgot-form') {
            const email = document.getElementById('forgot-email').value.trim();
            if (!email || !validateEmail(email)) {
                valid = false;
                msg += 'Valid email is required.\n';
            }
        }
        if (!valid) {
            alert(msg);
            return;
        }
        alert(formId.replace('-form','') + ' submitted!');
    });
});

function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
