// Preloader
$(document).ready(function () {
    $("#preloader").hide();
});

// Copyrigt Year
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
