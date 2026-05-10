function initHamburger() {
    const nav = document.querySelector('.nav-container');
    if (!nav || document.querySelector('.hamburger')) return;

    const burger = document.createElement('button');
    burger.className = 'hamburger';
    burger.setAttribute('aria-label', 'Menu');
    burger.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(burger);

    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';

    const links = document.querySelectorAll('.nav-links .hey');
    const loginBtn = document.getElementById('loginNavBtn');
    const user = localStorage.getItem('hrealm_user');
    const userData = user ? JSON.parse(user) : null;

    let linksHtml = '';
    links.forEach(link => {
        linksHtml += `<a href="${link.getAttribute('href')}">${link.innerText}</a>`;
    });

    mobileMenu.innerHTML = `
        <div class="mobile-search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search..." class="nav-search">
        </div>
        ${linksHtml}
        <div class="mobile-menu-actions">
            ${userData
                ? `<a href="account.html" class="contactn" style="background:#ffa406;color:#1a0f0d;"><i class="fa-solid fa-user"></i> ${userData.name}</a>
                   <a href="javascript:void(0)" onclick="logout()" class="log">Sign Out</a>`
                : `<a href="javascript:void(0)" onclick="openModal(); closeMobileMenu();" class="log">Login</a>`
            }
            <a href="help.html" class="contactn">Support</a>
        </div>
    `;

    document.body.appendChild(mobileMenu);

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href && href !== 'javascript:void(0)' && !href.startsWith('#')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.overflow = '';
                setTimeout(() => window.location.href = href, 300);
            }
        });
    });

    const mobileSearchInput = mobileMenu.querySelector('.nav-search');
    const mainSearchInput = document.querySelector('.nav-search:not(.mobile-menu .nav-search)');
    if (mobileSearchInput && mainSearchInput) {
        mobileSearchInput.addEventListener('input', () => {
            mainSearchInput.value = mobileSearchInput.value;
            mainSearchInput.dispatchEvent(new Event('input'));
        });
    }
}

function closeMobileMenu() {
    const burger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (burger) burger.classList.remove('open');
    if (mobileMenu) mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', initHamburger);