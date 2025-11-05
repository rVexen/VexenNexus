const data = [
  {
    name: "ПАТЧ 2.7",
    items: [
      { title: "САБ-ДД / САП", img: "./img/ChisaC.png", link: "https://docs.google.com/spreadsheets/d/1HH0V8Ze23XbHHgsP2mASBWCnKBhq9wfm33TxHPcptc4/edit?gid=0#gid=0" },
      { title: "САБ-ДД / САП", img: "./img/BULINGC.png", link: "https://docs.google.com/spreadsheets/d/1HH0V8Ze23XbHHgsP2mASBWCnKBhq9wfm33TxHPcptc4/edit?gid=1815378469#gid=1815378469" },
      { title: "Gunlancer", img: "https://media1.tenor.com/m/qGhQpBVaqJ8AAAAd/ado-ado-cute.gif", link: "#" }
    ]
  },
  {
    name: "ВСЕ ПЕРСОНАЖИ",
    items: [
      { title: "БУЛИНГ", img: "https://i.pinimg.com/474x/1f/d1/ac/1fd1ac50db9b7ac7676c4125bcd53ecc.jpg", link: "#" },
      { title: "Summoner", img: "https://i.pinimg.com/474x/1f/d1/ac/1fd1ac50db9b7ac7676c4125bcd53ecc.jpg", link: "#" },
      { title: "Summoner", img: "https://i.pinimg.com/474x/1f/d1/ac/1fd1ac50db9b7ac7676c4125bcd53ecc.jpg", link: "#" }
    ]
  },
  
  
];

// Функция для создания карточки
function createCard(item) {
  return `
    <div class="col-6 col-md-4 col-lg-3">
      <a href="${item.link}" class="text-decoration-none text-light">
        <div class="card h-100">
          <img src="${item.img}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title text-center text-light text-center">${item.title}</h5>
          </div>
        </div>
      </a>
    </div>`;
}

// Функция для рендера категорий и карточек
function renderCategories() {
  const container = document.getElementById('categories');
  container.innerHTML = '';

  data.forEach(category => {
    const cardsHTML = category.items.map(createCard).join('');
    container.innerHTML += `
      <section class="mb-5">
        <h2 class="mb-3 text-center">${category.name}</h2>
        <div class="row g-3">
          ${cardsHTML}
        </div>
      </section>`;
  });
}

renderCategories();