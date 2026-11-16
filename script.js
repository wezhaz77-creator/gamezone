const searchInput = document.getElementById("newsSearch");
const newsCards = document.querySelectorAll(".news-card");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();

    newsCards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();
        const searchWords = card.dataset.search || "";

        if (
            cardText.includes(searchText) ||
            searchWords.includes(searchText)
        ) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});