document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let sole=1000;
    let sommes, confirmer, print_out;
    sommes = parseInt(prompt("combien voulez vous retirer?"));
    confirmer = confirm("Voulez-vous confirmer votre sommes?");
    print_out = document.querySelector("section h2");
    console.log(typeof sommes);
    //tester l'sommes
    if (sommes >= 20 && sommes <= 100) {
        if (confirmer) {
            alert("merci d'avoir confirmé");
            print_out.innerText = `Votre age : ${sommes} €`;
        } else {
            alert("Demande annulée");
            print_out.innerText = `Demande annulée`;
        }
    } else if (!sommes) {
        alert("Attention, veuillez saisir  des chiffres");
        document.location.reload();
    } else {
        alert("Votre sommes doit être comprise entre 20 et 100€");
        document.location.reload();
    }
});

