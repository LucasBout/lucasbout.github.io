// Expérience / Formation

const containerType = document.querySelector(".containerType");
const secCompetences = document.querySelector(".secCompetences");

containerType.addEventListener("click", (e) =>{

    // Si j'ai cliqué sur un bouton et que la classe active n'y est pas
    if(e.target.classList.contains("type-item") && !e.target.classList.contains("active")){

        // Enlève active sur les 2 boutons
        containerType.querySelector(".active").classList.remove("active");

        // Met active sur celui cliqué
        e.target.classList.add("active");

        //
        const target = e.target.getAttribute("data-target");

        // 
        secCompetences.querySelector(".ListCvContent.active").classList.remove("active");
        secCompetences.querySelector(target).classList.add("active");
    }
});