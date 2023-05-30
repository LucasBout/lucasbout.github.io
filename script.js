// Récupère les éléments
let text = document.getElementById("text");
let developpeur = document.getElementById("developpeur");
let containerResumeProjet = document.getElementById("containerResumeProjet");
let feuille = document.getElementById("feuille");
let colline1 = document.getElementById("colline1");
let colline4 = document.getElementById("colline4");
let colline5 = document.getElementById("colline5");

// Lorsqu'on scroll
window.addEventListener('scroll',  () => {

    // Récupère la valeur du scroll
    let value = window.scrollY;

    if(text !== null){
        // Déplace les élément en fonction du scroll
        text.style.marginTop = value * 1.2 +  "px";
        developpeur.style.marginTop = value * 1.2 + "px";
    }

    if(containerResumeProjet !== null){
        // Déplace les élément en fonction du scroll
        containerResumeProjet.style.marginTop = value * 1.2 +  "px";
    }

    feuille.style.top = value * -0.7 + "px";
    feuille.style.left = value * 0.7 + "px";
    colline1.style.top = value * 0.55 + "px";
    colline4.style.left = value * -0.7 + "px";
    colline5.style.left = value * 0.7 + "px";

});


