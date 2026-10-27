
function nextPage(pageNumber) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById("page" + pageNumber);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    document.getElementById("counter").textContent =
        pageNumber + " / " + pages.length;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
