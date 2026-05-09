const API_URL = 'https://hrealm.onrender.com/api';

function getUser() {
    const s = localStorage.getItem('hrealm_user');
    return s ? JSON.parse(s) : null;
}

function checkSession() {
    const user = getUser();
    const loginBtn = document.getElementById('loginNavBtn');
    const userProfile = document.getElementById('userProfile');
    const userNameSpan = document.getElementById('userNameSpan');

    if (user) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (userProfile) {
            userProfile.style.display = 'flex';
            if (userNameSpan) userNameSpan.innerText = user.name;
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'block';
        if (userProfile) userProfile.style.display = 'none';
    }
}

function toggleDropdown() {
    document.getElementById('dropdownMenu').classList.toggle('show');
}

function logout() {
    localStorage.removeItem('hrealm_user');
    window.location.href = 'home.html';
}

function openModal() {
    document.getElementById('authModal').style.display = 'flex';
    showLogin();
}

function closeModal() {
    document.getElementById('authModal').style.display = 'none';
    document.getElementById('errorMsg').innerText = '';
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('modalTitle').innerText = 'Login';
    document.getElementById('errorMsg').innerText = '';
}

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'flex';
    document.getElementById('modalTitle').innerText = 'Create Account';
    document.getElementById('errorMsg').innerText = '';
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('logEmail').value;
    const password = document.getElementById('logPass').value;
    const btn = e.target.querySelector('button[type=submit]');
    btn.disabled = true;
    btn.innerText = '...';

    try {
        const res = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();

        if (res.ok) {
            localStorage.setItem('hrealm_user', JSON.stringify(data));
            closeModal();
            checkSession();
        } else {
            document.getElementById('errorMsg').innerText = data.error;
        }
    } catch {
        document.getElementById('errorMsg').innerText = 'Cannot reach server. Is it running?';
    }

    btn.disabled = false;
    btn.innerText = 'Login';
}

async function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('sigName').value.trim();
    const email = document.getElementById('sigEmail').value.trim();
    const password = document.getElementById('sigPass').value;
    const confirm = document.getElementById('sigConfirm').value;

    if (password !== confirm) {
        document.getElementById('errorMsg').innerText = 'Passwords do not match';
        return;
    }

    const btn = e.target.querySelector('button[type=submit]');
    btn.disabled = true;
    btn.innerText = '...';

    try {
        const res = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });
        const data = await res.json();

        if (res.ok) {
            localStorage.setItem('hrealm_user', JSON.stringify(data));
            closeModal();
            checkSession();
        } else {
            document.getElementById('errorMsg').innerText = data.error;
        }
    } catch {
        document.getElementById('errorMsg').innerText = 'Cannot reach server. Is it running?';
    }

    btn.disabled = false;
    btn.innerText = 'Create Account';
}

document.addEventListener('DOMContentLoaded', () => {
    checkSession();

    const logForm = document.getElementById('loginForm');
    if (logForm) logForm.addEventListener('submit', handleLogin);

    const sigForm = document.getElementById('signupForm');
    if (sigForm) sigForm.addEventListener('submit', handleSignup);

    document.addEventListener('click', e => {
        const dropdown = document.getElementById('dropdownMenu');
        const profile = document.getElementById('userProfile');
        if (dropdown && profile && !profile.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
});
