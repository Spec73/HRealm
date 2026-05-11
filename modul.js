const landmarkData = [
    { name: "Garni Temple", loc: "Armenia", img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Garni_temple_2021_drone.jpg", model: "2f79ca88a9244f3e8b64494c397c8db7" },
    { name: "Himeji Castle", loc: "Japan", img: "https://t4.ftcdn.net/jpg/03/33/72/51/360_F_333725130_Tig9X4SDp0ImKyqrR8OgbaVrF7tfxH6H.jpg", model: "6e33b2a9dd42486da236b015bce8c366" },
    { name: "Eiffel Tower", loc: "France", img: "https://wallpapercave.com/wp/wp2530917.jpg", model: "f5df073e159044bfa9ce005e841c9607" },
    { name: "Colosseum", loc: "Italy", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800", model: "535dc96e586f40bd956ea3cbff810055" },
    { name: "Great Wall", loc: "China", img: "https://images7.alphacoders.com/898/898714.jpg", model: "3d085397bf904e649ce97eb6c4bd9c7a" },
    { name: "Big Ben", loc: "England", img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=800", model: "f6ee7199db484ffc9198b7f13369941b" },
    { name: "Leaning Tower", loc: "Italy", img: "https://images.pexels.com/photos/1144271/pexels-photo-1144271.jpeg", model: "abf56101911447b7bd65ff098dcd455a" },
    { name: "Sagrada Familia", loc: "Spain", img: "https://i.ytimg.com/vi/XN0VDdtz6Eg/maxresdefault.jpg", model: "7b49e57dde984534981b83eefee652ce" },
    { name: "Opera House", loc: "Australia", img: "https://images8.alphacoders.com/488/488169.jpg", model: "73267b70f8fd46a8a175bd51f1c77b1c" },
    { name: "Christ the Redeemer", loc: "Brazil", img: "https://wallpapercave.com/wp/wp1991596.jpg", model: "ff383db6f1304ba9b488015968cbe77d" },
    { name: "Angkor Wat", loc: "Cambodia", img: "https://images.pexels.com/photos/15890578/pexels-photo-15890578.jpeg", model: "be70b89f9c264fc19d63dca2ae78b224" },
    { name: "Edinburgh Castle", loc: "Scotland", img: "https://images.unsplash.com/photo-1535448033526-c0e85c9e6968", model: "b494fdf5e2754259bc90c536b18fcfff" },
    { name: "Westminster Abbey", loc: "UK", img: "https://www.burgerandlobster.com/wp-content/uploads/2025/08/westminster-abbey1.jpeg", model: "33175190a3ab441e908bd18796c3803d" },
    { name: "Milan Cathedral", loc: "Italy", img: "https://wallpapercat.com/w/full/3/1/9/787489-2880x1800-desktop-hd-milan-cathedral-background-photo.jpg", model: "1bcbcd5885f74d1990ddb6cd3edce4e1" },
    { name: "Neuschwanstein", loc: "Germany", img: "https://images.alphacoders.com/128/1287274.jpg", model: "7d6d970009724dbda4fc5c5ffa303577" },
    { name: "Machu Picchu", loc: "Peru", img: "https://images.alphacoders.com/131/1311351.jpeg", model: "29a1d1bfc60448cc81d4787af5b09289" },
    { name: "Mont-Saint-Michel", loc: "France", img: "https://images5.alphacoders.com/592/592407.jpg", model: "24189ce5f6b6491dbdc2490cce84cfa8" },
    { name: "Rialto Bridge", loc: "Italy", img: "https://images8.alphacoders.com/101/1018805.jpg", model: "f1d74984f52540ddbdd763bfeef78e6a" },
    { name: "Alhambra", loc: "Spain", img: "https://images.pexels.com/photos/4472152/pexels-photo-4472152.jpeg", model: "163da113b0c74d4daa8624a5b3bce244" },
    { name: "De Haar Castle", loc: "Netherlands", img: "https://exploringthenetherlands.com/wp-content/uploads/2020/08/De-Haar-Castle-Netherlands.jpg", model: "07e15548ad4947e9a13fd52f98dbfd83" },
    { name: "Stonehenge", loc: "UK", img: "https://images.alphacoders.com/102/1027379.jpg", model: "7e7febabef2045a68755cc39c8c7c91f" },
    { name: "Alcázar of Segovia", loc: "Spain", img: "https://cloud.inspain.org/imgwbp/sitios/8/0/0/e7p3cf6vlih5qjxddaxqkycsyu_2000.webp", model: "7664bfa3ec8b4409a7f16b41ce23b416" },
    { name: "Statue of Liberty", loc: "USA", img: "https://wallpapercave.com/wp/wp9270773.jpg", model: "8401e1c10480476e8d7e3085d1aec923" },
    { name: "San Marcos", loc: "USA", img: "https://cdn.britannica.com/33/128533-050-3C11AAE9/Castillo-de-San-Marcos-National-Monument-Florida.jpg", model: "dcca2dc48ad94f88ad8579d07b5ae22a" },
    { name: "Conwy Castle", loc: "Wales", img: "https://i.ytimg.com/vi/AA97yq6_-j4/maxresdefault.jpg", model: "6785663453f545519b736da577cdce37" },
    { name: "Pantheon", loc: "Italy", img: "https://images.ansharimages.com/photo/italy/rome/pantheon-in-the-morning-rome-italy.jpg", model: "074e9fe9154f41169cb2e79f5330e58f" },
    { name: "Trevi Fountain", loc: "Italy", img: "https://images.unsplash.com/photo-1596627116790-af6f46dddbda?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJldmklMjBmb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D", model: "36bea7ec68844e0f94f2e2effa7e05eb" }
];

function createCleanId(name) {
    return name.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function openModel(name, url) {
    document.getElementById('m-title').innerText = name;
    const frame = document.getElementById('m-frame');
    frame.style.opacity = '0';
    frame.src = url;
    document.getElementById('modelModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    frame.onload = () => {
        frame.style.transition = 'opacity 0.4s ease';
        frame.style.opacity = '1';
    };
}

function closeModel() {
    document.getElementById('modelModal').style.display = 'none';
    document.getElementById('m-frame').src = '';
    document.body.style.overflow = '';
}
function renderGallery() {
    const gallery = document.getElementById('landmark-gallery');
    if (!gallery) return;
    gallery.innerHTML = landmarkData.map(item => `
        <div class="card" onclick="openModel('${item.name}', 'https://sketchfab.com/models/${item.model}/embed')">
            <div class="image-box"><img src="${item.img}"></div>
            <div class="card-info"><h3>${item.name}</h3><span>${item.loc}</span></div>
        </div>
    `).join('');
}

function initSearch() {
    const searchInput = document.querySelector('.nav-search');
    const resultsDiv = document.getElementById('search-results');
    
    if (!searchInput || !resultsDiv) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        resultsDiv.innerHTML = "";
        
        if (!query) {
            resultsDiv.style.display = 'none';
            return;
        }

        const filtered = landmarkData.filter(l => 
            l.name.toLowerCase().includes(query) || l.loc.toLowerCase().includes(query)
        );

        if (filtered.length > 0) {
            resultsDiv.style.display = 'block';
            filtered.forEach(l => {
                const id = createCleanId(l.name);
                const itemDiv = document.createElement('div');
                itemDiv.className = 'result-item';

                itemDiv.innerHTML = `
                    <img src="${l.img}" class="res-img">
                    <div class="res-info">
                        <span>${l.name}</span>
                        <div class="result-btns">
                            <a href="history.html#${id}" class="res-btn">History</a>
                            <a href="pictures.html#${id}" class="res-btn">Gallery</a>
                            <a href="model.html#${id}" class="res-btn">3D Model</a>
                        </div>
                    </div>
                `;
                resultsDiv.appendChild(itemDiv);
            });
        } else {
            resultsDiv.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
            resultsDiv.style.display = 'none';
        }
    });
}

function syncModel() {
    if (window.location.hash) {
        const hashId = window.location.hash.substring(1).toLowerCase();
        const item = landmarkData.find(l => {
            const masterId = createCleanId(l.name);
            return masterId === hashId || masterId.includes(hashId) || hashId.includes(masterId);
        });
        if (item) openModel(item.name, `https://sketchfab.com/models/${item.model}/embed`);
    }
}

(function initLoader() {
    const iconBox = document.getElementById('loader-icon');
    const descBox = document.getElementById('loader-desc');
    const path = window.location.pathname;

    const setContent = () => {
        if (!iconBox || !descBox) return;
        if (path.includes("history.html")) {
            iconBox.innerHTML = '<i class="fa-solid fa-scroll"></i>';
            descBox.innerText = "Uncovering Hidden Truths & Facts";
        } else if (path.includes("pictures.html")) {
            iconBox.innerHTML = '<i class="fa-solid fa-camera-retro"></i>';
            descBox.innerText = "Capturing the Beauty of the Past";
        } else if (path.includes("model.html")) {
            iconBox.innerHTML = '<i class="fa-solid fa-cube"></i>';
            descBox.innerText = "Reconstructing Lost Architecture";
        } else if (path.includes("store.html")) {
            iconBox.innerHTML = '<i class="fa-solid fa-coins"></i>';
            descBox.innerText = "Browsing the Museum Collection";
        } else {
            iconBox.innerHTML = '<i class="fa-solid fa-landmark"></i>';
            descBox.innerText = "Entering the Gates of HRealm";
        }
    };

    setContent();

    window.addEventListener('DOMContentLoaded', () => {
        const loader = document.getElementById('page-loader');
        document.body.classList.add('fade-in');
        document.body.classList.remove('hidden-content');
        
        setTimeout(() => {
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 300);
            }
        }, 400);

        renderGallery();
        initSearch();
        syncModel();
    });

    document.querySelectorAll('.hey, .log, .contactn').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href && href !== 'javascript:void(0)' && !href.startsWith('#')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                setTimeout(() => window.location.href = href, 300);
            }
        });
    });
})();

window.addEventListener('hashchange', syncModel);
