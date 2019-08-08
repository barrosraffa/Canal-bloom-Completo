window.addEventListener("DOMContentLoaded", function () {

    // variables
    const show = document.getElementById('btn1'); // botão +
    const hide = document.getElementById('btn2'); // botão -
    const paragraph = document.getElementById('p1'); // resposta

    // event - button plus
    show.addEventListener("click", function () {
        paragraph.style.display = "block";
        hide.classList.add("active");
        show.classList.remove("active");

    });

    // event - button minus
    hide.addEventListener("click", function () {
        paragraph.style.display = "none";
        hide.classList.remove("active");
        show.classList.add("active");
    });

});