const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");
const select = document.querySelector(".search__select");

addEventListener('click', redirection);

function redirection(event) {
    event.preventDefault();

    const value = input.value;
    const selectedBrowse = select.value;
}
