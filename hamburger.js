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

    const navLinks = document.querySelectorAll('.nav-links .hey');
    const userStr = localStorage.getItem('hrealm_user');
    const user = userStr ? JSON.parse(userStr) : null;

    let linksHtml = `
        <div class="mobile-menu-search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search..." class="mobile-nav-search">
        </div>
    `;

    navLinks.forEach(link => {
        linksHtml += `<a href="${link.getAttribute('href')}" class="mobile-menu-link">${link.innerText}</a>`;
    });

    linksHtml += `<div class="mobile-menu-bottom">`;

    if (user) {
        linksHtml += `
            <a href="account.html" class="mobile-account-btn">
                <i class="fa-solid fa-user"></i> ${user.name}
            </a>
            <button class="mobile-signout-btn" onclick="logout()">
                <i class="fa-solid fa-right-from-bracket"></i> Դուրս գալ
            </button>
        `;
    } else {
        linksHtml += `
            <button class="mobile-login-btn" onclick="openModal(); closeMobileMenu();">
                <i class="fa-solid fa-user"></i> Մուտք
            </button>
        `;
    }

    linksHtml += `
        <a href="help.html" class="mobile-support-btn">Support</a>
    </div>`;

    mobileMenu.innerHTML = linksHtml;
    document.body.appendChild(mobileMenu);

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href && href !== 'javascript:void(0)' && !href.startsWith('#')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.overflow = '';
                setTimeout(() => window.location.href = href, 280);
            }
        });
    });

    mobileMenu.querySelectorAll('a[href="help.html"], a[href="account.html"]').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href) {
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.overflow = '';
                setTimeout(() => window.location.href = href, 280);
            }
        });
    });

    const mobileSearch = mobileMenu.querySelector('.mobile-nav-search');
    const desktopSearch = document.querySelector('.nav-search');
    const searchResults = document.getElementById('search-results');

    if (mobileSearch && desktopSearch) {
        mobileSearch.addEventListener('input', () => {
            desktopSearch.value = mobileSearch.value;
            desktopSearch.dispatchEvent(new Event('input'));
            if (searchResults) {
                searchResults.style.position = 'fixed';
                searchResults.style.top = '70px';
                searchResults.style.left = '50%';
                searchResults.style.transform = 'translateX(-50%)';
                searchResults.style.width = '90vw';
                searchResults.style.zIndex = '99999';
            }
        });
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMobileMenu();
    });
}

function closeMobileMenu() {
    const burger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (burger) burger.classList.remove('open');
    if (mobileMenu) mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', initHamburger);