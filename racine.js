// Créez un programme qui affiche la racine carrée d’un entier positif.


// Exemples d’utilisation :
// $> node exo.js 9
// 3

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.


const args = process.argv.slice(2);

function square(a){
  let aModified = a.replace(/-/g,'');
  if (isNaN(aModified) || args.length !== 1){
    console.log("Erreur !")
  } else {
    let calcul = Math.sqrt(aModified);
    console.log(calcul);
  }
}


square(args[0]);