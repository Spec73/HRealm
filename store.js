function showToast(msg) {
    let toast = document.getElementById('site-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'site-toast';
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

const items = [
    { name: "Cambodia Poster", price: 29.99, img: "https://i.ebayimg.com/images/g/RG8AAeSw371pjibK/s-l1600.webp", desc: "Այս անփայլ ուղղահայաց պաստառը Կամբոջան կբերի ձեր պատին՝ իր տաք, վինտաժային քարտեզագրական արվեստով, լոտոսի ծաղիկներով, սիրամարգերով և նուրբ գետային լանդշաֆտով" },
    { name: "Sydney Opera House 3D", price: 45, img: "https://m.media-amazon.com/images/I/61dPFjzkSNL._AC_SX679_.jpg", desc: "Սիդնեյի օպերային թատրոնի 3D փորագրված բյուրեղապակյա հավաքածուի հուշանվեր (մեծ)" },
    { name: "Himeji Castle Figure", price: 58, img: "https://i.ebayimg.com/images/g/1REAAOSw3NxiJWbY/s-l1600.webp", desc: "Զարդարեք ձեր սենյակը Շաչիհոկոյի կերպարով։ Շաչիհոկոն երևակայական արարած է՝ վագրի գլխով և կարպի մարմնով։ Այն ճապոնական ավանդական կերպար է, որը հաճախ կարելի է գտնել ճապոնական ամրոցների գագաթներին։" },
    { name: "Himeji Castle Art Print", price: 9.99, img: "https://i.ebayimg.com/images/g/YtcAAeSwpI9o4ID0/s-l1600.webp", desc: "Հիմեջիի ավանդական ճապոնական ոճով թանաքով նկարչական տպագրություն բալենու ծաղիկների տակ" },
    { name: "Eiffel Tower Bronze Edition", price: 27, img: "https://shop.toureiffel.paris/875-large_default/eiffel-tower-bronze-13-cm-signature-collection.webp", desc: "Էյֆելյան աշտարակի պաշտոնական հավաքածուից իսկական բրոնզե ծածկույթով մետաղական մանրանկար" },
    { name: "Stained Glass Eiffel Decor", price: 7.99, img: "https://m.media-amazon.com/images/I/81praE83wsL._AC_SX679_.jpg", desc: "Ձեռքով նկարված ապակե արևապաշտպան սարք, որը գեղեցիկ լուսային նախշեր է արձակում Փարիզի երկնաքերի վրա" },
    { name: "Preseli Bluestone Standing stone", price: 50, img: "https://i.ebayimg.com/images/g/5yYAAeSwArlpyVjh/s-l1600.webp", desc: "Յուրաքանչյուր կախազարդ յուրահատուկ է՝ բնական նախշերով և երանգներով, որոնք յուրաքանչյուր կախազարդ դարձնում են անկրկնելի" },
    { name: "Julius Caesar Statue", price: 24.99, img: "https://i.ebayimg.com/images/g/cwAAAOSwXbNgLylt/s-l1600.webp", desc: "Կեսարի այս կիսանդրին 5 դյույմ բարձրություն ունի և կշռում է մոտավորապես 85 գրամ: Տպագրված է մարմարի գույնի PLA պլաստիկով" },
    { name: "Vintage Colosseum Ornament", price: 4.99, img: "https://i.etsystatic.com/23863808/r/il/6c5eab/7257296734/il_1588xN.7257296734_kcri.jpg", desc: "Հռոմի լեգենդար Ֆլավիոսների ամֆիթատրոնի մաշված, վինտաժային ոճի արձանիկ" },
    { name: "Vintage Venice Italy Bridge", price: 48.99, img: "https://i.ebayimg.com/images/g/J4sAAeSwSpxoOOVb/s-l1600.webp", desc: "Վինտաժ Վենետիկ Իտալիա կամուրջ Պոնտե դի Ռիալտո գունավոր մատիտ շրջանակված 11x9" },
    { name: "Great Wall of China Postcard", price: 18, img: "https://i.ebayimg.com/images/g/-bwAAeSwi69p25cY/s-l1600.webp", desc: "Հին բացիկ-ՉԻՆԱՍՏԱՆ-Չինական մեծ պարիսպ, ճանապարհորդած" },
    { name: "Big Ben Pocket Watch", price: 29.99, img: "https://www.shop.parliament.uk/cdn/shop/files/32971-Limited-Edition-Big-Ben-Pocket-Watch-2024_2048px_480x480@2x.jpg?v=1742896348", desc: "Գրպանի ժամացույցը գեղեցիկ կերպով ներկայացված է փայտե նվերների տուփի մեջ, որի աստառում պատկերված են Բիգ Բենի պաշտոնական լոգոն և Եղիսաբեթի աշտարակը" },
    { name: "Big Ben Pipes", price: 89, img: "https://i.ebayimg.com/images/g/HNAAAeSwSx9p4IHs/s-l1600.webp", desc: "Ծխամորճը գտնվել է առանց ցողունի։ Մենք ավելացրել ենք Բիգ-Բենի բնօրինակ ցողուն, որը կատարյալ համապատասխանում է։ Մենք չգիտենք, թե ինչ է նշանակում REG.291418 դրոշմանիշը, մենք միայն գիտենք, որ ծխամորճը բավականին հին է։ Անկասկած, մինչև 1970 թվականը, հնարավոր է՝ նույնիսկ 1950-ական թվականներից" },
    { name: "Leaning Tower Snow Globe", price: 18, img: "https://i.ebayimg.com/images/g/C68AAeSw6~tpr4jX/s-l1600.jpg", desc: "Դասական ապակե ձնե գունդ, որը պարունակում է Պիզայի թեքված մարմարե հրաշքը" },
    { name: "Alabaster Pisa Figurine", price: 29, img: "https://i.ebayimg.com/images/g/3AoAAeSw-3lpdPln/s-l1600.jpg", desc: "Փորագրված է իսկական տոսկանական ալաբաստրե քարից՝ բարդ սյունակային մանրամասներով" },
    { name: "Silver Sagrada Rosary", price: 99.99, img: "https://api.laie.es/media/erp/2000000/2000000073811_4-391x500-data.JPG", desc: "Արծաթե վարդարան, օրհնված և նախագծված Բարսելոնայի Սագրադա Ֆամիլիա տաճարի կողմից" },
    { name: "Leaning Tower of Pisa Tower", price: 24, img: "https://i.ebayimg.com/images/g/ZWsAAeSwJSpp3awJ/s-l1600.webp", desc: "1940-ականների Պիզայի թեք աշտարակ, Իտալիա, Երկրորդ համաշխարհային պատերազմի զանգակատուն, ամերիկացի զինվոր, իրական լուսանկար" },
    { name: "Sydney Opera House Wallpaper", price: 40, img: "https://i.ebayimg.com/images/g/x0sAAOSwhLth6-9C/s-l1600.webp", desc: "Սիդնեյի օպերայի թատրոնի 3D պաստառ՝ որմնանկար, հանվող, ինքնասոսնձվող, 1832թ" },
    { name: "Vintage Alhambra Bracelet", price: 79.99, img: "https://i.ebayimg.com/images/g/JMYAAeSwWz1p26tF/s-l1600.webp", desc: "Վաճառվում է Van Cleef & Arpels-ի Alhambra 5 Motifs վինտաժային ապարանջան՝ 18 կարատ սպիտակ ոսկուց և կապույտ քաղկեդոնից, առանց կտրոնի։ Ներկայացված տուփերը ներառված են" },
    { name: "Westminster Abbey House", price: 40, img: "https://i.ebayimg.com/images/g/qncAAeSwiJ5p3Cdx/s-l1600.webp", desc: "Գերազանց վիճակում գտնվող Վեստմինստերյան աբբայության 56-րդ բաժնի Սուրբ Ծննդյան տուն" },
    { name: "Neuschwanstein Castle Vintage", price: 15, img: "https://i.ebayimg.com/images/g/~ckAAeSwY5xp4Uy9/s-l1600.webp", desc: "1993 թվականի Դենբերիի կախարդական ամրոցների վինտաժային հավաքածուն՝ Նոյշվանշտայնի ամրոցը, դեկորատիվ հավաքածու է, պատրաստված խառը նյութերից, այդ թվում՝ խեժից: Այս օրիգինալ իրը առանձնանում է գունագեղ բազմագույն դիզայնով՝ նորարարական հավաքածուի ոճով" },
    { name: "Rialto Bridge Painting", price: 85, img: "https://i.ebayimg.com/images/g/HXgAAeSwjKFpXqRo/s-l1600.webp", desc: "Նկարչի կողմից ստորագրված այս բնօրինակ նկարը ռեալիստական ​​ոճով պատկերում է Վենետիկի հայտնի տեսարժան վայրերը, մասնավորապես՝ խորհրդանշական Ռիալտո կամուրջը" },
    { name: "The Colosseum Painting", price: 60, img: "https://i.ebayimg.com/images/g/4jQAAOSwpoVm7I4E/s-l1600.webp", desc: "Նկարչի ձեռագործ ջրաներկ աշխատանքը կենդանություն է ստանում ուլտրամանուշակագույն ճառագայթներից պաշտպանող ապակիով զարդարված ապշեցուցիչ փայտե փորագրված շրջանակով, որի բարձրությունը 23 դյույմ է, իսկ երկարությունը՝ 19 դյույմ" },
    { name: "De Haar Castle Beer Pitcher", price: 19.99, img: "https://i.ebayimg.com/images/g/8qMAAOSwij1f9jZW/s-l1600.webp", desc: "Վինտաժ կերամիկական Enesco դեղին գարեջրի կուժ և 3 շշերի հավաքածու Դե Հաար / Ռեյն ամրոց" },
];

let cart = [];
const grid = document.getElementById('item-grid');

items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${item.img}">
        <h3>${item.name}</h3>
        <p class="price-tag">$${item.price}</p>
        <button class="buy-btn" onclick="event.stopPropagation(); add(${index})">Գնել</button>
    `;
    card.onclick = () => openDetails(index);
    grid.appendChild(card);
});

function openDetails(idx) {
    const item = items[idx];
    document.getElementById('det-img').src = item.img;
    document.getElementById('det-title').innerText = item.name;
    document.getElementById('det-desc').innerText = item.desc;

    const amd = (item.price * 400).toLocaleString();
    const eur = (item.price * 0.92).toFixed(2);

    document.getElementById('det-prices').innerHTML = `
        <p>USD: $${item.price}</p>
        <p>EUR: €${eur}</p>
        <p>AMD: ֏${amd}</p>
    `;

    document.getElementById('det-buy-trigger').onclick = () => { add(idx); closeDetails(); };
    document.getElementById('details-modal').classList.add('open');
}

function closeDetails() { document.getElementById('details-modal').classList.remove('open'); }

function add(idx) {
    const user = getUser();
    if (!user) {
        showToast('Please login to add items to your basket');
        setTimeout(() => openModal(), 400);
        return;
    }
    cart.push(items[idx]);
    document.getElementById('count').innerText = cart.length;
    showToast(`${items[idx].name} added to basket`);
}

function openCart() {
    const user = getUser();
    if (!user) {
        showToast('Please login to view your basket');
        setTimeout(() => openModal(), 400);
        return;
    }
    const list = document.getElementById('cart-list');
    list.innerHTML = '';
    let total = 0;
    cart.forEach(i => {
        total += i.price;
        list.innerHTML += `<div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #eee;"><span>${i.name}</span><strong>$${i.price}</strong></div>`;
    });
    document.getElementById('cart-sum').innerHTML = `<h3 style="text-align:right;margin-top:20px;color:#2d1b18;">Total: $${total.toFixed(2)}</h3>`;
    document.getElementById('cart-modal').classList.add('open');
}

function closeCart() {
    document.getElementById('cart-modal').classList.remove('open');
    document.getElementById('checkout-section').style.display = 'none';
    document.getElementById('go-check').style.display = 'block';
}

function startCheck() {
    if (cart.length === 0) { showToast('Basket is empty'); return; }
    document.getElementById('go-check').style.display = 'none';
    document.getElementById('checkout-section').style.display = 'block';

    const cardInput = document.querySelector('#checkout-section .row input:first-child');
    const cvvInput = document.getElementById('cvv-code');

    cardInput.addEventListener('input', () => {
        cardInput.value = cardInput.value.replace(/\D/g, '').slice(0, 16);
    });

    cvvInput.addEventListener('input', () => {
        cvvInput.value = cvvInput.value.replace(/\D/g, '').slice(0, 3);
    });
}

async function finish() {
    const a = document.getElementById('ship-addr').value;
    const c = document.getElementById('cvv-code').value;
    const cardInput = document.querySelector('#checkout-section .row input:first-child');

    if (a && c.length === 3 && cardInput.value.length >= 12) {
        document.getElementById('fill').style.width = '100%';

        const user = getUser();
        if (user) {
            const order = {
                id: 'ORD-' + Date.now(),
                date: new Date().toISOString().split('T')[0],
                total: '$' + cart.reduce((s, i) => s + i.price, 0).toFixed(2),
                items: cart.map(i => i.name)
            };

            try {
                const res = await fetch('http://localhost:3000/api/add-order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId: user.id, order })
                });
                if (res.ok) {
                    const updated = await res.json();
                    localStorage.setItem('hrealm_user', JSON.stringify(updated));
                }
            } catch {}
        }

        setTimeout(() => {
            closeCart();
            showToast('Order placed successfully — thank you!');
            cart = [];
            document.getElementById('count').innerText = 0;
        }, 800);
    } else {
        showToast('Please fill in address, card number and 3-digit CVV');
    }
}
