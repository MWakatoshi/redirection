const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");
const select = document.querySelector(".search__select");

button.addEventListener('click', redirection);

function redirection(event) {
    event.preventDefault();

    const value = input.value;
    const selectedBrowse = select.value;

    let params;

    if (selectedBrowse == "google" || selectedBrowse == "bing") {
        params = "search?q=";
    } else if (selectedBrowse == "yandex") {
        params = "search?text=";
    } else if (selectedBrowse == "duckduckgo") {
        params = "?q=";
    }

    window.location.href = `https://www.${selectedBrowse}.com/${params}${value}`;
}
