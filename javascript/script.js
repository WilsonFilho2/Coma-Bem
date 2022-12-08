let btn_bons_habitos = document.getElementById("btn-bons-habitos");
let lista_bons_habitos = document.getElementById("lista-bons-habitos");

btn_bons_habitos.addEventListener("click", () => {
    lista_bons_habitos.style.display = "flex";
    btn_bons_habitos.style.display = "none";
})

let btn_maus_habitos = document.getElementById("btn-maus-habitos");
let lista_maus_habitos = document.getElementById("lista-maus-habitos");

btn_maus_habitos.addEventListener("click", () => {
    lista_maus_habitos.style.display = "flex";
    btn_maus_habitos.style.display = "none";
})

let btn_evitar_maus_habitos = document.getElementById("btn-evitar-maus-habitos");
let lista_evitar_maus_habitos = document.getElementById("lista-evitar-maus-habitos");

btn_evitar_maus_habitos.addEventListener("click", () => {
    lista_evitar_maus_habitos.style.display = "flex";
    btn_evitar_maus_habitos.style.display = "none";
    lista_evitar_maus_habitos.style.marginTop = "-20px";
})
