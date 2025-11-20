const data = [
  {
    name: "ПАТЧ 2.7",
    items: [
      { title: "САП", img: "./img/ChisaC.png", link: "https://docs.google.com/document/d/1Zt3AjO8TPUtSjbPBl5KfpBS4IvgmvXPOZAn6ke3Y7sE/edit?tab=t.0" },
      { title: "САБ-ДД / САП", img: "./img/BULINGC.png", link: "https://docs.google.com/spreadsheets/d/1HH0V8Ze23XbHHgsP2mASBWCnKBhq9wfm33TxHPcptc4/edit?gid=1815378469#gid=1815378469" },
    ]
  },
  {
    name: "ВСЕ ПЕРСОНАЖИ",
    items: [
      { title: "БУЛИНГ", img: "./img/what.png", link: "#" },
      { title: "КАРТЕФИЯ", img: "./img/what.png", link: "#" },
      { title: "ФИБИ", img: "./img/what.png", link: "#" }
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