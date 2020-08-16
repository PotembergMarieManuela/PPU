export default function dictionnary()
{
  fetch("https://morigann.be/projets/tfa/assets/data/dictionnary.json")
    .then(response => response.json())
    .then(data => {
      writeData(data);
      searchInput(data);
    });

  document.querySelector(".popup__close").addEventListener("click", e => 
  {
    e.preventDefault;
    document.querySelector(".popup").classList.remove("popup--active");
  });
}

function searchInput(cache)
{
  const input = document.getElementById("filter-term");

  input.addEventListener("input", e => {
    const searchValue = e.target.value.toLowerCase();
    // Check if search = null => return
    if (!searchValue) 
    {
      writeData(cache);
      return;
    }

    const letter = searchValue.charAt(0);
    const dataForTheLetter = cache[letter];

    const filtered = Object.keys(dataForTheLetter).filter(el =>
      el.includes(searchValue)
    );

    const dictionnaryBlock = document.querySelector(".dictionnary");
    dictionnaryBlock.innerHTML = "";

    let row = document.createElement("div");
    row.classList.add("dictionnary__block");

    let column = document.createElement("div");
    column.classList.add("dictionnary__letter");

    let ul = document.createElement("ul");
    ul.classList.add("dictionnary__list");

    filtered.forEach(w => {
      let li = document.createElement("li");
      li.classList.add("dictionnary__list-el");
      li.dataset.word = w;
      li.innerText = w;
      ul.appendChild(li);

      li.addEventListener("click", e => 
      {
        e.preventDefault();
        openWord(letter, e.currentTarget.dataset.word, cache);
      });
    });

    column.innerHTML = `<h3 class="dictionnary__letter--title">${letter}</h3>`;
    column.appendChild(ul);

    row.appendChild(column);
    dictionnaryBlock.appendChild(row);
  });
}

function writeData(cache) 
{
  const dictionnaryBlock = document.querySelector(".dictionnary");
  dictionnaryBlock.innerHTML = "";

  const rowsDektop = [];
  const rows = [];

  Object.keys(cache).forEach((el, index) => 
  {
    const title = el;

    if (index % 2 === 0) 
    {
      let row = document.createElement("div");
      row.classList.add("dictionnary__block");
      rows.push(row);
    }

    let column = document.createElement("div");
    column.classList.add("dictionnary__letter");

    let ul = document.createElement("ul");
    ul.classList.add("dictionnary__list");

    Object.keys(cache[el]).forEach(w => 
      {
      let li = document.createElement("li");
      li.classList.add("dictionnary__list-el");
      li.dataset.word = w;
      li.innerText = w;
      ul.appendChild(li);

      li.addEventListener("click", e => 
      {
        e.preventDefault();
        openWord(el, e.currentTarget.dataset.word, cache);
      });
    });

    column.innerHTML = `<h3 class="dictionnary__letter--title">${el}</h3>`;
    column.appendChild(ul);

    rows[Math.floor(index / 2)].appendChild(column);
  });

  rows.forEach(el => 
  {
    dictionnaryBlock.appendChild(el);
  });
}

function openWord(letter, word, data) {
  let definition = data[letter][word];

  document.querySelector(".popup__title").innerText = word;
  document.querySelector(".popup__text").innerText = definition.explain;

  document.querySelector(".popup").classList.add("popup--active");
}
