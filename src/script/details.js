const $card = document.getElementById("card-details");
const $arrowLeft = document.querySelector(".arrow-left");
const $arrowRight = document.querySelector(".arrow-right");
const $randomBtn = document.querySelector('.random');
const $searchForm = document.getElementById("search-form");

let id = null;

const typesColors = {
  "normal" : "#6d6d4e",
  "fire": "#f08030",
  "fighting": "#c03028",
  "water": "#6890f0",
  "flying": "#a890f0",
  "grass": "#78c850",
  "poison": "#a040a0",
  "electric": "#f8d030",
  "ground": "#e0c068",
  "psychic": "#f85888",
  "rock": "#b8a038",
  "ice": "#98d8d8",
  "bug": "#a8b820",
  "dragon": "#7038f8",
  "ghost": "#705898",
  "dark": "#705848",
  "steel": "#b8b8d0",
  "fairy": "#ee99ac",
}    


async function getPokemonDetails(pokemonId) {
  $card.innerHTML = generateLoading();
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(res => res.json());

  id = data.id;

  $card.style.background = "#fff";
  inserCardIntoHTML(generateCard(data));
}

function inserCardIntoHTML(cardContent) {
  $card.innerHTML = cardContent;
}

function generateLoading() {
  return `
    <div class="load-animation">
      <svg height="424pt" viewBox="0 -5 424.99424 424" width="424pt" xmlns="http://www.w3.org/2000/svg"><path d="m315.765625 256.496094c0 84.832031-68.765625 153.601562-153.597656 153.601562s-153.601563-68.769531-153.601563-153.601562c0-84.828125 68.769532-153.597656 153.601563-153.597656s153.597656 68.769531 153.597656 153.597656zm0 0" fill="#c1dbdc"/><path d="m227.820312 407.460938c80.78125 0 146.269532-66.0625 146.269532-147.546876h-292.539063c0 81.484376 65.484375 147.546876 146.269531 147.546876zm0 0" fill="#fff"/><path d="m227.816406 414.285156c-84.414062 0-153.089844-69.25-153.089844-154.371094 0-3.773437 3.054688-6.828124 6.824219-6.828124h292.535157c3.773437 0 6.828124 3.054687 6.828124 6.828124 0 85.121094-68.679687 154.371094-153.097656 154.371094zm-139.273437-147.546875c3.535156 74.433594 64.65625 133.890625 139.273437 133.890625 74.625 0 135.746094-59.457031 139.28125-133.890625zm0 0" fill="#4c241d"/><path d="m278.257812 123.769531c-15.722656-5.722656-32.710937-8.847656-50.4375-8.847656-80.785156 0-146.269531 64.914063-146.269531 144.992187h292.539063c0-41.742187-17.796875-79.367187-46.273438-105.820312" fill="#f53e28"/><path d="m374.085938 266.738281h-292.535157c-3.769531 0-6.824219-3.058593-6.824219-6.828125 0-83.714844 68.675782-151.816406 153.089844-151.816406 18.148438 0 35.90625 3.117188 52.777344 9.265625 3.542969 1.289063 5.367188 5.207031 4.078125 8.75-1.285156 3.542969-5.203125 5.375-8.75 4.074219-15.375-5.59375-31.554687-8.433594-48.105469-8.433594-74.578125 0-135.667968 58.308594-139.269531 131.335938h278.550781c-1.734375-35.980469-17.179687-69.144532-43.929687-93.992188-2.761719-2.566406-2.917969-6.882812-.351563-9.648438 2.5625-2.761718 6.890625-2.921874 9.644532-.351562 30.792968 28.601562 48.457031 68.996094 48.457031 110.820312-.003907 3.765626-3.058594 6.824219-6.832031 6.824219zm0 0" fill="#4c241d"/><path d="m308.238281 138.992188c-2.425781-1.601563-4.902343-3.128907-7.429687-4.585938" fill="#f53e28"/><path d="m308.230469 145.816406c-1.289063 0-2.59375-.363281-3.75-1.125-2.316407-1.527344-4.675781-2.988281-7.082031-4.371094-3.261719-1.886718-4.382813-6.0625-2.5-9.328124 1.886718-3.265626 6.050781-4.386719 9.328124-2.5 2.640626 1.527343 5.230469 3.125 7.769532 4.800781 3.148437 2.074219 4.015625 6.308593 1.945312 9.453125-1.316406 1.992187-3.492187 3.070312-5.710937 3.070312zm0 0" fill="#4c241d"/><path d="m274.542969 261.191406c0 25.804688-20.917969 46.722656-46.722657 46.722656-25.804687 0-46.722656-20.917968-46.722656-46.722656 0-25.804687 20.917969-46.722656 46.722656-46.722656 25.804688 0 46.722657 20.917969 46.722657 46.722656zm0 0" fill="#edebdc"/><path d="m227.816406 314.742188c-29.527344 0-53.546875-24.023438-53.546875-53.550782 0-29.53125 24.019531-53.554687 53.546875-53.554687 29.53125 0 53.554688 24.023437 53.554688 53.554687 0 29.527344-24.023438 53.550782-53.554688 53.550782zm0-93.449219c-22 0-39.894531 17.898437-39.894531 39.898437s17.894531 39.898438 39.894531 39.898438c22.003906 0 39.902344-17.898438 39.902344-39.898438s-17.898438-39.898437-39.902344-39.898437zm0 0" fill="#4c241d"/><path d="m248.160156 261.191406c0 11.234375-9.105468 20.339844-20.339844 20.339844-11.234374 0-20.339843-9.105469-20.339843-20.339844s9.105469-20.339844 20.339843-20.339844c11.234376 0 20.339844 9.105469 20.339844 20.339844zm0 0" fill="#edebdc"/><g fill="#4c241d"><path d="m227.816406 288.355469c-14.976562 0-27.164062-12.1875-27.164062-27.164063 0-14.980468 12.1875-27.167968 27.164062-27.167968 14.980469 0 27.167969 12.1875 27.167969 27.167968 0 14.976563-12.1875 27.164063-27.167969 27.164063zm0-40.679688c-7.449218 0-13.511718 6.066407-13.511718 13.515625 0 7.449219 6.0625 13.511719 13.511718 13.511719 7.449219 0 13.515625-6.0625 13.515625-13.511719 0-7.449218-6.066406-13.515625-13.515625-13.515625zm0 0"/><path d="m384.035156 61.9375c-3.769531 0-6.828125-3.058594-6.828125-6.828125v-20.480469c0-3.769531 3.058594-6.824218 6.828125-6.824218 3.769532 0 6.824219 3.054687 6.824219 6.824218v20.480469c0 3.769531-3.054687 6.828125-6.824219 6.828125zm0 0"/><path d="m384.035156 109.722656c-3.769531 0-6.828125-3.054687-6.828125-6.824218v-20.480469c0-3.769531 3.058594-6.828125 6.828125-6.828125 3.769532 0 6.824219 3.058594 6.824219 6.828125v20.480469c0 3.769531-3.054687 6.824218-6.824219 6.824218zm0 0"/><path d="m370.382812 75.589844h-20.480468c-3.769532 0-6.828125-3.054688-6.828125-6.824219 0-3.773437 3.058593-6.828125 6.828125-6.828125h20.480468c3.769532 0 6.824219 3.054688 6.824219 6.828125 0 3.769531-3.054687 6.824219-6.824219 6.824219zm0 0"/><path d="m418.167969 75.589844h-20.480469c-3.769531 0-6.828125-3.054688-6.828125-6.824219 0-3.773437 3.058594-6.828125 6.828125-6.828125h20.480469c3.769531 0 6.828125 3.054688 6.828125 6.828125 0 3.769531-3.058594 6.824219-6.828125 6.824219zm0 0"/><path d="m21.039062 209.886719c-3.417968 0-6.804687-.839844-9.90625-2.5-4.957031-2.652344-8.589843-7.078125-10.21875-12.460938-1.628906-5.382812-1.070312-11.078125 1.585938-16.039062 2.652344-4.957031 7.078125-8.589844 12.460938-10.21875 11.097656-3.375 22.886718 2.929687 26.257812 14.042969 3.367188 11.113281-2.933594 22.890624-14.042969 26.261718-2.019531.613282-4.085937.914063-6.136719.914063zm.023438-28.472657c-.710938 0-1.429688.105469-2.144531.320313-1.890625.574219-3.445313 1.851563-4.378907 3.59375-.933593 1.742187-1.128906 3.746094-.554687 5.640625.570313 1.894531 1.847656 3.445312 3.589844 4.378906 1.742187.929688 3.753906 1.132813 5.640625.554688 3.90625-1.179688 6.121094-5.324219 4.9375-9.230469-.972656-3.195313-3.914063-5.257813-7.089844-5.257813zm0 0"/><path d="m34.554688 42.609375c-11.609376 0-21.054688-9.445313-21.054688-21.054687 0-11.609376 9.445312-21.058594 21.054688-21.058594 11.609374 0 21.058593 9.449218 21.058593 21.058594 0 11.609374-9.449219 21.054687-21.058593 21.054687zm0-28.457031c-4.082032 0-7.402344 3.316406-7.402344 7.402344 0 4.082031 3.320312 7.402343 7.402344 7.402343 4.085937 0 7.402343-3.320312 7.402343-7.402343 0-4.085938-3.320312-7.402344-7.402343-7.402344zm0 0"/><path d="m99.070312 114.714844c-1.746093 0-3.496093-.667969-4.828124-2-2.664063-2.667969-2.664063-6.988282 0-9.652344l20.125-20.128906c2.667968-2.664063 6.988281-2.664063 9.65625 0 2.664062 2.667968 2.664062 6.988281 0 9.652344l-20.128907 20.128906c-1.335937 1.332031-3.078125 2-4.824219 2zm0 0"/><path d="m119.195312 114.714844c-1.746093 0-3.492187-.667969-4.828124-2l-20.125-20.128906c-2.667969-2.664063-2.667969-6.984376 0-9.652344 2.664062-2.664063 6.984374-2.664063 9.652343 0l20.125 20.128906c2.667969 2.664062 2.667969 6.984375 0 9.652344-1.332031 1.332031-3.078125 2-4.824219 2zm0 0"/><path d="m224.03125 33.578125c0 6.289063-5.097656 11.386719-11.386719 11.386719-6.285156 0-11.382812-5.097656-11.382812-11.386719 0-6.285156 5.097656-11.382813 11.382812-11.382813 6.289063 0 11.386719 5.097657 11.386719 11.382813zm0 0"/><path d="m415.175781 176.9375c0 6.289062-5.09375 11.386719-11.382812 11.386719-6.289063 0-11.386719-5.097657-11.386719-11.386719 0-6.285156 5.097656-11.382812 11.386719-11.382812 6.289062 0 11.382812 5.097656 11.382812 11.382812zm0 0"/></g></svg>
    </div>
  `;
}

function generateCard(pokemon) {
  const stats = {
    "attack": "Atk",
    "hp": "Hp",
    "defense": "Def",
    "special-attack": "Sp.Atk",
    "special-defense": "Sp.Def",
    "speed": "Speed"
   };

  return `
    <header class="card-details-header">
      <h1>${pokemon.name}</h1>
      <span>#${pokemon.id}</span>

      <ul class="pokemon-types">
        ${pokemon.types.map(({ type }) => {
          const imgName = type.name.charAt().toUpperCase() + type.name.substr(1);

          return `<li style="border-color: ${typesColors[type.name]}">
                    <img src="src/images/pokemon-types/${imgName}.png" alt="Normal">
                    <span style="background-color: ${typesColors[type.name]}">${type.name}</span>
                  </li>`
        }).join("")}
      </ul>
    </header>

    <div class="pokemon-photo">
      <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
    </div>

    <p class="pokemon-basic-info">
      <span>
        <strong>Weigth:</strong>
        ${pokemon.weight}kg
      </span>

      <span>
        <strong>Height:</strong>
        ${pokemon.height}m
      </span>
    </p>

    <ul class="pokemon-stats">
     ${pokemon.stats.map(item => `<li>${item.base_stat} <p>${stats[item.stat.name]}</p></li>`).join("")}
    </ul>

    <a href="https://www.pokemon.com/us/pokedex/${pokemon.name}" target="_blank">
      More about this pokemon
    </a>
  `
}

window.addEventListener('load', () => {

  const [_, pokeid] = window.location.search.split("=");

  getPokemonDetails(pokeid);

  id = pokeid;

});

window.addEventListener('popstate', () => {
  const [_, pokeid] = window.location.search.split("=");

  getPokemonDetails(pokeid);

  id = pokeid;
});

$arrowLeft.addEventListener('click', () => {
  if(id === 1) {
    return;
  }

  id = Number(id) - 1;
  history.pushState({}, '', `details.html?id=${id}`);
  getPokemonDetails(id);
});

$arrowRight.addEventListener('click', () => {
  if(id === 1) {
    return;
  }


  id = Number(id) + 1;
  history.pushState({}, '', `details.html?id=${id}`);
  getPokemonDetails(id);
});

$randomBtn.addEventListener('click', () => {
  const id = Math.round(Math.random() * 932);

  history.pushState({}, '', `details.html?id=${id}`);
  getPokemonDetails(id);
});

$searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let pokeName = e.target[0].value;

  location.href = `details.html?name=${pokeName.toLowerCase()}`;
});