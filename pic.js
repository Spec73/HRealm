let currentLandmark = null;
let currentIndex = 0;

const landmarkData = [
    { name: "Garni Temple", loc: "Armenia", imgs: ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Garni_temple_2021_drone.jpg", "https://absolutearmenia.com/wp-content/uploads/2021/01/shutterstock_517687225.jpg", "https://cdn.georgia.to/img/thumbnails/MkiHCWsjkgwxpZA7RphgDC_smedium.jpg", "https://i0.wp.com/www.armgeo.am/wp-content/uploads/2019/02/photo_2023-03-30_12-35-27.jpg?ssl=1", "https://www.levontravel.am/wp-content/uploads/2018/12/garni-winter.jpg"], model: "2f79ca88a9244f3e8b64494c397c8db7" },
    { name: "Himeji Castle", loc: "Japan", imgs: ["https://everwallpaper.com/cdn/shop/products/1_f964dda7-bee8-437e-87b2-f02878cc0264.jpg?v=1655369120", "https://www.travelcaffeine.com/wp-content/uploads/2017/02/himeji-castle-japan-20170219349.jpg", "https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2025-02/himeji-castle-cherry-blossom-viewing-festival-guide_5.jpg", "https://images.squarespace-cdn.com/content/v1/591b6cadf5e231dda1a0c802/1583072379025-5PF745VPMIW9T72LBTBK/thewanderingcam_sakura_himeji_cover-9.jpg", "https://www.snowmonkeyresorts.com/wp-content/uploads/2022/04/Himeji-Castle.webp"], model: "6e33b2a9dd42486da236b015bce8c366" },
    { name: "Eiffel Tower", loc: "France", imgs: ["https://choosewhere.com/public/images/fQpK5xb/945_630/shutterstock_710380270.webp", "https://images.alphacoders.com/905/thumb-1920-905423.jpg", "https://m.media-amazon.com/images/I/81org10CPpL._AC_UF894,1000_QL80_.jpg", "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/b8/a7.jpg", "https://images7.alphacoders.com/879/thumb-1920-879477.jpg"], model: "f5df073e159044bfa9ce005e841c9607" },
    { name: "Colosseum", loc: "Italy", imgs: ["https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK.jpg", "https://media.cntraveler.com/photos/58da7b6e1021b64be09794da/16:9/w_2560%2Cc_limit/GettyImages-177303568.jpg", "https://i0.wp.com/www.touristitaly.com/wp-content/uploads/2023/10/shutterstock_2087415520.jpg", "https://wallpaperaccess.com/full/389011.jpg", "https://www.crowntours.com/wp-content/uploads/2024/10/rome-colosseum-aerial-view-twilight-hour.jpg"], model: "535dc96e586f40bd956ea3cbff810055" },
    { name: "Great Wall", loc: "China", imgs: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg", "https://www.popsci.com/wp-content/uploads/2025/02/Great-Wall-China.jpg", "https://i.pinimg.com/736x/0a/21/ca/0a21ca209a71f1c0404da30411be770f.jpg", "https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg", "https://www.onthegotours.com/repository/Great-Wall-mountains-and-blue-sky--China-Tours--On-The-Go-Tours-279781450457645.jpg"], model: "3d085397bf904e649ce97eb6c4bd9c7a" },
    { name: "Big Ben", loc: "UK", imgs: ["https://www.burgerandlobster.com/wp-content/uploads/2025/08/gettyimages-17896921161.jpg", "https://www.london.de/fileadmin/_processed_/c/3/csm_big_ben_3_e8abd5d515.jpeg", "https://www.fattiretours.com/app/uploads/2022/03/london-big-ben.jpg", "https://media.cntraveler.com/photos/571f9be4afc531496352d2a9/16:9/w_2560%2Cc_limit/GettyImages-174726708.jpg", "https://guidelinestobritain.com/wp-content/uploads/2019/01/London-skyline-with-Big-Ben-and-environs-including-the-London-Eye-Portcullis-House-Parliament-Square-and-St-Margarets-Church.jpg"], model: "f6ee7199db484ffc9198b7f13369941b" },
    { name: "Leaning Tower", loc: "Italy", imgs: ["https://images.unsplash.com/photo-1598910332865-0a6b066d5602?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGlzYSUyMHRvd2VyfGVufDB8fDB8fHww", "https://www.airpano.com/files/pisa-tuscany-central-italy/image8a.jpg", "https://img.freepik.com/premium-photo/leaning-tower-pisa-italy-with-beautiful-sunrise_255553-5099.jpg", "https://c0.wallpaperflare.com/preview/1006/834/346/leaning-tower-of-pisa-rome.jpg", "https://static.vecteezy.com/system/resources/previews/032/329/497/large_2x/thes-leaning-tower-in-pisa-italy-with-beautiful-sunrise-ai-generated-free-photo.jpg"], model: "abf56101911447b7bd65ff098dcd455a" },
    { name: "Sagrada Familia", loc: "Spain", imgs: ["https://wallpapercat.com/w/full/0/5/f/783990-2880x1800-desktop-hd-sagrada-familia-background-photo.jpg", "https://cdn.britannica.com/15/194815-050-08B5E7D1/Nativity-facade-Sagrada-Familia-cathedral-Barcelona-Spain.jpg", "https://t3.ftcdn.net/jpg/05/13/89/94/360_F_513899490_ekFxvQky6l7WrXZQ5IOY00HIHPCCdcyf.jpg", "https://wallpapercat.com/w/full/4/8/3/784038-2880x1800-desktop-hd-sagrada-familia-wallpaper-photo.jpg", "https://d2prydcqrq5962.cloudfront.net/image/journal/article?img_id=1681246"], model: "7b49e57dde984534981b83eefee652ce" },
    { name: "Opera House", loc: "Australia", imgs: ["https://media.architecturaldigest.com/photos/63d82d299dd44a3242d15ade/3:2/w_3000,h_2000,c_limit/GettyImages-982774858.jpg", "https://media.cntraveler.com/photos/6536ad8d3647d48343ed9f92/1:1/w_3012,h_3012,c_limit/Sydney%20Opera%20House_marek-piwnicki-Lr12BUpEXWg-unsplash.jpg", "https://destinationlesstravel.com/wp-content/uploads/2023/10/Inside-the-concert-hall-of-the-Sydney-Opera-House-as-seen-on-a-tour.jpg.webp", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/bb/8f/8f/photo-credit-hamilton.jpg", "https://www.arup.com/globalassets/images/projects/s/sydney-opera-house/sydney-opera-house-hero.jpg"], model: "73267b70f8fd46a8a175bd51f1c77b1c" },
    { name: "Christ the Redeemer", loc: "Brazil", imgs: ["https://wallpapercave.com/wp/wp1991596.jpg", "https://wallpapercave.com/wp/wp1991635.jpg", "https://wallpapercave.com/wp/wp1991599.jpg", "https://wallpapercave.com/wp/wp1991621.jpg", "https://images6.alphacoders.com/925/thumb-1920-925763.jpg"], model: "ff383db6f1304ba9b488015968cbe77d" },
    { name: "Angkor Wat", loc: "Cambodia", imgs: ["https://images.pexels.com/photos/15890578/pexels-photo-15890578.jpeg", "https://images.unsplash.com/photo-1599283787923-51b965a58b05?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5na29yfGVufDB8fDB8fHww", "https://angkorwatadventures.com/wp-content/uploads/2024/05/Why-was-Angkor-Wat-Built-1024x675.jpg", "https://www.shutterstock.com/image-photo/unidentified-young-couple-green-traditional-600nw-2649651541.jpg", "https://chicvoyageproductions.com/wp-content/uploads/2024/02/Screen-Shot-2024-02-03-at-3.37.31-PM.jpg"], model: "be70b89f9c264fc19d63dca2ae78b224" },
    { name: "Edinburgh Castle", loc: "Scotland", imgs: ["https://images.unsplash.com/photo-1535448033526-c0e85c9e6968", "https://images8.alphacoders.com/469/thumb-1920-469681.jpg", "https://m.media-amazon.com/images/I/81AEBoHpl2S._AC_UF894,1000_QL80_.jpg", "https://wallpapercave.com/wp/wp7340440.jpg", "https://images.pexels.com/photos/28086723/pexels-photo-28086723.jpeg?cs=srgb&dl=pexels-spencphoto-28086723.jpg&fm=jpg"], model: "b494fdf5e2754259bc90c536b18fcfff" },
    { name: "Westminster Abbey", loc: "UK", imgs: ["https://res.cloudinary.com/dtljonz0f/image/upload/c_fill,ar_3:2,w_3840,g_auto/f_auto/q_auto/v1/gc-v1/london-pass/London_Westminster_Abbey_exterior_ss_non-editorial_wsuppx?_a=BAVAZGDY0", "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/WestminsterAbbey_ss_non-editorial_gmq4ec?_a=BAVAZGDY0", "https://www.burgerandlobster.com/wp-content/uploads/2025/08/westminster-abbey1.jpeg", "https://www.discoverbritain.com/_gatsby/file/33bd3cb4c89ef1dd9f99384d428f2e94/15046_Westminster-Abbey.jpg", "https://www.earthtrekkers.com/wp-content/uploads/2023/01/How-to-Visit-Westminster-Abbey-1200x675.jpg"], model: "33175190a3ab441e908bd18796c3803d" },
    { name: "Milan Cathedral", loc: "Italy", imgs: ["https://wallpapercat.com/w/full/3/1/9/787489-2880x1800-desktop-hd-milan-cathedral-background-photo.jpg", "https://plus.unsplash.com/premium_photo-1661962887170-e7db3f307c7a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlsYW4lMjBjYXRoZWRyYWx8ZW58MHx8MHx8fDA%3D", "https://c4.wallpaperflare.com/wallpaper/464/820/842/italy-arch-puddle-lombardy-wallpaper-preview.jpg", "https://cdn.pixabay.com/photo/2018/07/08/10/34/italy-3523640_960_720.jpg", "https://www.walksofitaly.com/blog/wp-content/uploads/2014/05/milan-cathedral-1.jpg"], model: "1bcbcd5885f74d1990ddb6cd3edce4e1" },
    { name: "Neuschwanstein", loc: "Germany", imgs: ["https://images.alphacoders.com/128/1287274.jpg", "https://images7.alphacoders.com/102/1023547.jpg", "https://images.unsplash.com/photo-1557067175-db3159d938ac?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV1c2Nod2Fuc3RlaW4lMjBjYXN0bGV8ZW58MHx8MHx8fDA%3D", "https://c4.wallpaperflare.com/wallpaper/931/682/569/neuschwanstein-castle-4k-download-best-hd-wallpaper-preview.jpg", "https://4kwallpapers.com/images/wallpapers/neuschwanstein-castle-ancient-architecture-autumn-schwangau-3840x2160-7282.jpg"], model: "7d6d970009724dbda4fc5c5ffa303577" },
    { name: "Machu Picchu", loc: "Peru", imgs: ["https://images.alphacoders.com/131/1311351.jpeg", "https://wallpapercave.com/wp/wp2301764.jpg", "https://wallpapershome.com/images/pages/ico_h/5361.jpg", "https://media.istockphoto.com/id/1339071089/photo/machu-picchu-inca-ruins.jpg", "https://img.freepik.com/premium-photo/machu-picchu-marvel-ancient-incan-architecture_1061150-141331.jpg"], model: "29a1d1bfc60448cc81d4787af5b09289" },
    { name: "Mont-Saint-Michel", loc: "France", imgs: ["https://images5.alphacoders.com/592/592407.jpg", "https://4kwallpapers.com/images/wallpapers/abbey-mont-saint-michel-normandy-france-ancient-4480x2520-7638.jpg", "https://images5.alphacoders.com/946/thumb-1920-946727.jpg", "https://images8.alphacoders.com/945/945313.jpg", "https://images4.alphacoders.com/108/thumb-1920-1081910.jpg"], model: "24189ce5f6b6491dbdc2490cce84cfa8" },
    { name: "Rialto Bridge", loc: "Italy", imgs: ["https://c1.wallpaperflare.com/preview/110/961/259/venice-italy-ponte-di-rialto-bridge-bridge.jpg", "https://images8.alphacoders.com/101/1018805.jpg", "https://w0.peakpx.com/wallpaper/325/822/HD-wallpaper-venice-rialto-bridge-city-water-houses-italy-reflection.jpg", "https://c4.wallpaperflare.com/wallpaper/201/650/320/rialto-bridge-venice-italy-grand-canal-at-venice-wallpaper-preview.jpg", "https://img.freepik.com/premium-photo/rialto-bridge-grand-canal-venice-italy-romantic-architecture-venice-famous-landmark-bright-sunny-day_87646-9253.jpg"], model: "f1d74984f52540ddbdd763bfeef78e6a" },
    { name: "Alhambra", loc: "Spain", imgs: ["https://images.pexels.com/photos/4472152/pexels-photo-4472152.jpeg", "https://t4.ftcdn.net/jpg/02/63/24/59/360_F_263245931_PnJhAEUymFqLQd8RekEBhwVLTeNIL1Pb.jpg", "https://images.alphacoders.com/697/697012.jpg", "https://cdn.pixabay.com/photo/2018/09/19/20/49/alhambra-3689538_640.jpg", "https://tripgranada.com/wp-content/uploads/2023/10/que-es-la-alhambra-de-granada.jpg"], model: "163da113b0c74d4daa8624a5b3bce244" },
    { name: "De Haar Castle", loc: "Netherlands", imgs: ["https://privatetransfersholland.com/wp-content/uploads/2023/12/Castle-de-Haar.png", "https://i.ytimg.com/vi/0JYPgIKcxCM/hq720.jpg", "https://c4.wallpaperflare.com/wallpaper/869/968/896/castles-castle-castle-de-haar-netherlands-wallpaper-preview.jpg", "https://exploringthenetherlands.com/wp-content/uploads/2020/08/De-Haar-Castle-Netherlands.jpg", "https://t3.ftcdn.net/jpg/06/48/03/52/360_F_648035241_qxyOXb1gfQHP1kJNRY3IO18kdnlTZYZo.jpg"], model: "07e15548ad4947e9a13fd52f98dbfd83" },
    { name: "Stonehenge", loc: "UK", imgs: ["https://images.alphacoders.com/102/1027379.jpg", "https://images5.alphacoders.com/131/1318724.jpeg", "https://images.pexels.com/photos/161798/stonehenge-architecture-history-monolith-161798.jpeg", "https://wallpapercave.com/wp/wp4125629.jpg", "https://c1.wallpaperflare.com/preview/926/456/27/ancient-dusk-england-photo.jpg"], model: "7e7febabef2045a68755cc39c8c7c91f" },
    { name: "Alcázar of Segovia", loc: "Spain", imgs: ["https://withlocals-com-res.cloudinary.com/image/upload/w_412,h_290,c_fill,g_auto,q_auto,dpr_3.0,f_auto/v1/destinations/spain/Segovia/Segovia_Alcazar_MAIN", "https://cloud.inspain.org/imgwbp/sitios/8/0/0/e7p3cf6vlih5qjxddaxqkycsyu_2000.webp", "https://fly-over-the-world-media.s3.amazonaws.com/uploads/highlights/61d84dbbd3c62-6322e0a70fadd_1280_720.jpg", "https://www.alcazardesegovia.com/wp-content/uploads/2022/10/amanecer-alcazar-de-segovia-1.jpg", "https://cdn-imgix.headout.com/media/images/0455179dc661f9e77562ef07b95fbcd2-10953-Madrid-Segovia-Alcazar---Toledo-Guided-Tour-with-Optional-Cathedral-Tour-03.jpg"], model: "7664bfa3ec8b4409a7f16b41ce23b416" },
    { name: "Statue of Liberty", loc: "USA", imgs: ["https://wallpapercave.com/wp/wp9270773.jpg", "https://images4.alphacoders.com/705/thumb-1920-705661.jpg", "https://t4.ftcdn.net/jpg/03/26/04/55/360_F_326045580_YUtDZNjzFuKLR6T1vcnLsypgj3AcTlfs.jpg", "https://wallpapercat.com/w/full/3/9/2/32930-1920x1200-desktop-hd-statue-of-liberty-wallpaper-image.jpg", "https://www.nyclips-production.com/cdn/shop/products/b7837058c4a7d2244087d5bd31cd08e4.jpg"], model: "8401e1c10480476e8d7e3085d1aec923" },
    { name: "San Marcos", loc: "USA", imgs: ["https://cdn.recreation.gov/public/2022/06/16/12/43/10088440_926984d6-fa34-426c-99f3-3dc9a8bec60e_700.webp", "https://castillodesanmarcos.com/wp-content/uploads/2020/01/Ponche-Caballero_77-copia-scaled.jpg", "https://historiccoastculture.com/wp-content/uploads/sites/historiccoastculture.com/images/2020/07/CASTILLO_AT_SUNRISE_1059925dafc489659acd47a728e6733c.jpg", "https://www.visitstaugustine.com/sites/default/files/styles/node_gallery_xxl/public/2024-06/Salt-Life-Bluewater-Tournament_25x15-WEB.jpg", "https://cdn.britannica.com/33/128533-050-3C11AAE9/Castillo-de-San-Marcos-National-Monument-Florida.jpg"], model: "dcca2dc48ad94f88ad8579d07b5ae22a" },
    { name: "Conwy Castle", loc: "Wales", imgs: ["https://i.ytimg.com/vi/AA97yq6_-j4/maxresdefault.jpg", "https://c4.wallpaperflare.com/wallpaper/243/174/529/bridge-lights-tower-wales-conwy-castle-hd-wallpaper-preview.jpg", "https://wallup.net/wp-content/uploads/2019/10/848631-england-conwy-castle-north-wales-england-north-wales-castle-fortress-bridge-river-mountain-night-evening-lights-landscape.jpg", "https://i.ytimg.com/vi/dcvFH24dSS0/hq720.jpg", "https://t3.ftcdn.net/jpg/03/98/84/72/360_F_398847254_7FmAwuGlTHE4gBgAMhg17dcKBEy1EebC.jpg"], model: "6785663453f545519b736da577cdce37" },
    { name: "Pantheon", loc: "Italy", imgs: ["https://images.ansharimages.com/photo/italy/rome/pantheon-in-the-morning-rome-italy.jpg", "https://c1.wallpaperflare.com/preview/467/721/164/rome-pantheon-piazza-rotonda.jpg", "https://c4.wallpaperflare.com/wallpaper/1013/750/396/night-lights-rome-italy-wallpaper-preview.jpg", "https://w0.peakpx.com/wallpaper/770/359/HD-wallpaper-pantheon-reflecting-the-sunsetting-rome-italy-building-people-place-colors-r-sky.jpg", "https://www.citalia.com/-/media/Bynder/Citalia-destinations/Italy/Cities/Rome/Rome-2024-Pantheon-Shutterstock-1400333222-Hybris.jpg"], model: "074e9fe9154f41169cb2e79f5330e58f" },
    { name: "Trevi Fountain", loc: "Italy", imgs: ["https://upload.wikimedia.org/wikipedia/commons/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg", "https://www.romesightseeing.net/media/rjhjmqnu/trevi-fountain.jpg?anchor=center&mode=crop&width=1200", "https://www.turismoroma.it/sites/default/files/Fontane%20-%20Fontana%20di%20Trevi_1920x1080mba-07410189%20%C2%A9%20Clickalps%20_%20AGF%20foto.jpg", "https://www.museumsrome.com/images/2018/La-Fontana-di-Trevi-a-Roma.jpg", "https://i0.wp.com/www.canadianaffairs.news/wp-content/uploads/2025/12/Screen-Shot-2025-12-19-at-9.14.32-PM-scaled.png?fit=2560%2C1252&ssl=1"], model: "36bea7ec68844e0f94f2e2effa7e05eb" }
];

const searchInput = document.querySelector('.nav-search');
const resultsBox = document.getElementById('search-results');

function createCleanId(name) {
    return name.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function renderGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;
    container.innerHTML = "";
    landmarkData.forEach(item => {
        const group = document.createElement('div');
        group.className = 'landmark-group';
        group.id = createCleanId(item.name);
        let imagesHtml = item.imgs.map(src => `<div class="img-box" onclick="openLeaf('${src}', '${item.name}')"><img src="${src}"></div>`).join('');
        const escapedName = item.name.replace(/'/g, "\\'");
        group.innerHTML = `<div class="landmark-header"><h2>${item.name}</h2><span>${item.loc}</span></div><div class="five-image-grid">${imagesHtml}</div><div class="dl-btn-wrap"><button class="dl-trigger-btn" onclick="openDownloadPicker('${escapedName}')"><i class="fa-solid fa-download"></i> Ներբեռնել</button></div>`;
        container.appendChild(group);
    });

    if (window.location.hash) {
        setTimeout(() => {
            const hashId = window.location.hash.substring(1).toLowerCase();
            const target = document.getElementById(hashId);
            if (target) {
                const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 400);
    }
}

function openLeaf(src, name) {
    const overlay = document.getElementById('imageLightbox');
    if (!overlay) return;
    currentLandmark = landmarkData.find(l => l.name === name);
    currentIndex = currentLandmark.imgs.indexOf(src);
    updateLightbox();
    overlay.classList.add('active');
}

function updateLightbox() {
    const imgElement = document.getElementById('lightboxImg');
    const captionElement = document.getElementById('lightboxCaption');
    if (currentLandmark && imgElement) {
        imgElement.src = currentLandmark.imgs[currentIndex];
        captionElement.innerText = `${currentLandmark.name} (${currentIndex + 1} / ${currentLandmark.imgs.length})`;
    }
}

function nextImage(e) {
    if (e) e.stopPropagation();
    if (!currentLandmark) return;
    currentIndex = (currentIndex + 1) % currentLandmark.imgs.length;
    updateLightbox();
}

function prevImage(e) {
    if (e) e.stopPropagation();
    if (!currentLandmark) return;
    currentIndex = (currentIndex - 1 + currentLandmark.imgs.length) % currentLandmark.imgs.length;
    updateLightbox();
}

function initSearch() {
    if (!searchInput || !resultsBox) return;
    searchInput.addEventListener('input', function () {
        const val = this.value.toLowerCase().trim();
        resultsBox.innerHTML = '';
        if (val.length < 1) { resultsBox.style.display = 'none'; return; }

        const matches = landmarkData.filter(l => l.name.toLowerCase().includes(val) || l.loc.toLowerCase().includes(val));

        if (matches.length > 0) {
            resultsBox.style.display = 'block';
            matches.forEach(l => {
                const id = createCleanId(l.name);
                const div = document.createElement('div');
                div.className = 'result-item';
                div.innerHTML = `
                    <img src="${l.imgs[0]}" class="res-img">
                    <div class="res-info">
                        <span>${l.name}</span>
                        <div class="result-btns">
                            <a href="history.html#${id}" class="res-btn">History</a>
                            <a href="pictures.html#${id}" class="res-btn">Gallery</a>
                            <a href="model.html#${id}" class="res-btn">3D Model</a>
                        </div>
                    </div>
                `;
                resultsBox.appendChild(div);
            });
        } else {
            resultsBox.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
            resultsBox.style.display = 'none';
        }
    });
}

document.addEventListener('keydown', (e) => {
    const overlay = document.getElementById('imageLightbox');
    if (overlay && overlay.classList.contains('active')) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") overlay.classList.remove('active');
    }
});

function openDownloadPicker(name) {
    const item = landmarkData.find(l => l.name === name);
    if (!item) return;

    let existing = document.getElementById('dl-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'dl-modal';
    modal.innerHTML = `
        <div id="dl-backdrop" onclick="closeDownloadPicker()"></div>
        <div id="dl-panel">
            <div id="dl-header">
                <span id="dl-title">${item.name} — Ընտրեք նկար</span>
                <button id="dl-close" onclick="closeDownloadPicker()"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div id="dl-thumbs">
                ${item.imgs.map((src, i) => `
                    <div class="dl-thumb" data-src="${src}" data-idx="${i}" onclick="selectDlPhoto(this)">
                        <img src="${src}" alt="Photo ${i + 1}">
                        <span>Նկար ${i + 1}</span>
                    </div>
                `).join('')}
            </div>
            <div id="dl-format-row">
                <span id="dl-fmt-label">Ձևաչափ:</span>
                <label class="dl-fmt"><input type="radio" name="dl-fmt" value="jpg" checked> JPG</label>
                <label class="dl-fmt"><input type="radio" name="dl-fmt" value="png"> PNG</label>
                <label class="dl-fmt"><input type="radio" name="dl-fmt" value="webp"> WEBP</label>
            </div>
            <button id="dl-confirm" onclick="executeDl('${item.name.replace(/'/g, "\\'")}')">
                <i class="fa-solid fa-download"></i> Ներբեռնել
            </button>
        </div>
    `;
    document.body.appendChild(modal);

    setTimeout(() => modal.classList.add('dl-visible'), 10);
    setTimeout(() => {
        const first = modal.querySelector('.dl-thumb');
        if (first) first.classList.add('dl-selected');
    }, 10);
}

function selectDlPhoto(el) {
    document.querySelectorAll('.dl-thumb').forEach(t => t.classList.remove('dl-selected'));
    el.classList.add('dl-selected');
}

function executeDl(name) {
    const selected = document.querySelector('.dl-thumb.dl-selected');
    if (!selected) return;
    const src = selected.dataset.src;
    const idx = selected.dataset.idx;
    const fmt = document.querySelector('input[name="dl-fmt"]:checked').value;
    const filename = `${name.replace(/\s+/g, '_')}_photo${parseInt(idx) + 1}.${fmt}`;

    closeDownloadPicker();

    fetch(src)
        .then(r => {
            if (!r.ok) throw new Error('fetch failed');
            return r.blob();
        })
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 2000);
        })
        .catch(() => {
            window.open(src, '_blank');
        });
}

function closeDownloadPicker() {
    const modal = document.getElementById('dl-modal');
    if (!modal) return;
    modal.classList.remove('dl-visible');
    setTimeout(() => modal.remove(), 300);
}

document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    initSearch();
});
