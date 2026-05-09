const landmarks = [
    { name: "Garni Temple", loc: "Garni, Armenia", wiki: "Garni_Temple", img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Garni_temple_2021_drone.jpg" },
    { name: "Himeji Castle", loc: "Himeji, Japan", wiki: "Himeji_Castle", img: "https://www.japan-guide.com/g21/3501_11.jpg" },
    { name: "Eiffel Tower", loc: "Paris, France", wiki: "Eiffel_Tower", img: "https://choosewhere.com/public/images/fQpK5xb/945_630/shutterstock_710380270.webp" },
    { name: "Colosseum", loc: "Rome, Italy", wiki: "Colosseum", img: "https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK.jpg" },
    { name: "Great Wall of China", loc: "Beijing, China", wiki: "Great_Wall_of_China", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg" },
    { name: "Big Ben", loc: "London, England", wiki: "Big_Ben", img: "https://www.burgerandlobster.com/wp-content/uploads/2025/08/gettyimages-17896921161.jpg" },
    { name: "Leaning Tower of Pisa", loc: "Pisa, Italy", wiki: "Leaning_Tower_of_Pisa", img: "https://www.historyhit.com/app/uploads/bis-images/5149833/Leaning-Tower-of-Pisa-788x537.jpg?x15201" },
    { name: "Sagrada Familia", loc: "Barcelona, Spain", wiki: "Sagrada_Família", img: "https://cdn.britannica.com/15/194815-050-08B5E7D1/Nativity-facade-Sagrada-Familia-cathedral-Barcelona-Spain.jpg" },
    { name: "Sydney Opera House", loc: "Sydney, Australia", wiki: "Sydney_Opera_House", img: "https://media.architecturaldigest.com/photos/63d82d299dd44a3242d15ade/3:2/w_3000,h_2000,c_limit/GettyImages-982774858.jpg" },
    { name: "Christ the Redeemer", loc: "Rio, Brazil", wiki: "Christ_the_Redeemer_(statue)", img: "https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20231122221124_45448c583eabca7ad6be347939c641312d4ce7570209ad29d3345175aea14fec.jpg" },
    { name: "Angkor Wat", loc: "Siem Reap, Cambodia", wiki: "Angkor_Wat", img: "https://images.pexels.com/photos/15890578/pexels-photo-15890578.jpeg" },
    { name: "Edinburgh Castle", loc: "Edinburgh, UK", wiki: "Edinburgh_Castle", img: "https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWRpbmJ1cmdoJTIwY2FzdGxlfGVufDB8fDB8fHww" },
    { name: "Westminster Abbey", loc: "London, UK", wiki: "Westminster_Abbey", img: "https://media.istockphoto.com/id/489645909/photo/westminster-abbey.jpg?s=612x612&w=0&k=20&c=CMmk-G62cITVm5gUhs2iRbSATKumbAM2FflzdFumHMw=" },
    { name: "Milan Cathedral", loc: "Milan, Italy", wiki: "Milan_Cathedral", img: "https://wallpapercat.com/w/full/3/1/9/787489-2880x1800-desktop-hd-milan-cathedral-background-photo.jpg" },
    { name: "Neuschwanstein Castle", loc: "Bavaria, Germany", wiki: "Neuschwanstein_Castle", img: "https://images.alphacoders.com/128/1287274.jpg" },
    { name: "Machu Picchu", loc: "Cusco, Peru", wiki: "Machu_Picchu", img: "https://images.alphacoders.com/131/1311351.jpeg" },
    { name: "Mont-Saint-Michel", loc: "Normandy, France", wiki: "Mont-Saint-Michel", img: "https://images5.alphacoders.com/592/592407.jpg" },
    { name: "Rialto Bridge", loc: "Venice, Italy", wiki: "Rialto_Bridge", img: "https://t3.ftcdn.net/jpg/00/93/83/46/360_F_93834632_VK3TVhvVRrxaZsxvdo0njCTHT5zQaURv.jpg" },
    { name: "Alhambra", loc: "Granada, Spain", wiki: "Alhambra", img: "https://images.pexels.com/photos/4472152/pexels-photo-4472152.jpeg?cs=srgb&dl=pexels-juliogarciaphotos-4472152.jpg&fm=jpg" },
    { name: "De Haar Castle", loc: "Utrecht, Netherlands", wiki: "De_Haar_Castle", img: "https://privatetransfersholland.com/wp-content/uploads/2023/12/Castle-de-Haar.png" },
    { name: "Stonehenge", loc: "Wiltshire, UK", wiki: "Stonehenge", img: "https://images.alphacoders.com/102/1027379.jpg" },
    { name: "Alcázar of Segovia", loc: "Segovia, Spain", wiki: "Alc%C3%A1zar_of_Segovia", img: "https://cdn-imgix.headout.com/media/images/0455179dc661f9e77562ef07b95fbcd2-10953-Madrid-Segovia-Alcazar---Toledo-Guided-Tour-with-Optional-Cathedral-Tour-03.jpg" },
    { name: "Statue of Liberty", loc: "New York, USA", wiki: "Statue_of_Liberty", img: "https://wallpapercave.com/wp/wp9270773.jpg" },
    { name: "Castillo de San Marcos", loc: "Florida, USA", wiki: "Castillo_de_San_Marcos", img: "https://c4.wallpaperflare.com/wallpaper/212/977/289/architecture-bartizan-castillo-de-san-marcos-clouds-wallpaper-preview.jpg" },
    { name: "Conwy Castle", loc: "Conwy, Wales", wiki: "Conwy_Castle", img: "https://i.ytimg.com/vi/AA97yq6_-j4/maxresdefault.jpg" },
    { name: "Pantheon", loc: "Rome, Italy", wiki: "Pantheon,_Rome", img: "https://images.ansharimages.com/photo/italy/rome/pantheon-in-the-morning-rome-italy.jpg" },
    { name: "Trevi Fountain", loc: "Rome, Italy", wiki: "Trevi_Fountain", img: "https://images.unsplash.com/photo-1596627116790-af6f46dddbda?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJldmklMjBmb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D" }
];

function initGrid() {
    const grid = document.getElementById('main-grid');
    grid.innerHTML = ""; 
    landmarks.forEach(item => {
        const card = document.createElement('div');
        card.className = 'museum-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" 
                 style="width:100%; height:250px; object-fit:cover; image-rendering: auto; display:block;">
            <div class="card-info">
                <h3>${item.name}</h3>
                <p>${item.loc}</p>
                <button class="open-history" onclick="showHistory('${item.wiki}', '${item.name}', '${item.loc}')">Read History</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

async function showHistory(wikiTag, name, loc) {
    document.getElementById('main-grid').style.display = 'none';
    document.getElementById('welcome-header').style.display = 'none';
    const view = document.getElementById('history-view');
    view.style.display = 'block';

    document.getElementById('h-title').innerText = name;
    document.getElementById('h-location').innerText = loc;
    document.getElementById('h-text').innerHTML = "";
    document.getElementById('h-loading').style.display = 'block';

    try {
        const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${wikiTag}&origin=*&explaintext=true`;
        const response = await fetch(url);
        const data = await response.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        let rawContent = pages[pageId].extract;

        if (rawContent) {
            let cleanText = rawContent.replace(/==+.*?==+/g, ''); 
            let paragraphs = cleanText.split('\n').filter(p => p.trim().length > 50).slice(0, 12);
            
            document.getElementById('h-text').innerHTML = paragraphs.map(p => `<p style="margin-bottom:20px; line-height:1.6;">${p}</p>`).join('');
        } else {
            document.getElementById('h-text').innerHTML = "<p>Archived data not found.</p>";
        }
    } catch (e) {
        document.getElementById('h-text').innerHTML = "<p>Error loading records.</p>";
    } finally {
        document.getElementById('h-loading').style.display = 'none';
        window.scrollTo(0,0);
    }
}

function goBack() {
    document.getElementById('history-view').style.display = 'none';
    document.getElementById('main-grid').style.display = 'grid';
    document.getElementById('welcome-header').style.display = 'flex';
}

initGrid();

function syncHistory() {
    if (window.location.hash) {
        const hashId = window.location.hash.substring(1).toLowerCase();
        const item = landmarks.find(l => {
            const masterId = l.name.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            return masterId === hashId || masterId.includes(hashId) || hashId.includes(masterId);
        });
        if (item) showHistory(item.wiki, item.name, item.loc);
    }
}
window.addEventListener('load', syncHistory);
window.addEventListener('hashchange', syncHistory);