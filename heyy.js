document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll(".accordion-header");
    headers.forEach(function(header) {
        header.addEventListener("click", function() {
            var content = this.nextElementSibling;
            var icon = this.querySelector(".accordion-icon");
            if (content.style.display === "block") {
                content.style.display = "none";
                icon.classList.remove("open");
            } else {
                content.style.display = "block";
                icon.classList.add("open");
            }
        });
    });
});