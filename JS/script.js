document.addEventListener("DOMContentLoaded", () => {

    const btnTop = document.getElementById("btnTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    });

    btnTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btnBienvenida");

    // aparece después de 2 segundos
    setTimeout(() => {
        btn.style.display = "block";
    }, 2000);

    // mensaje al hacer click
    btn.addEventListener("click", () => {
        alert("Bienvenido a mi página web 😎✨");
    });

});
