// Déclarer une fonction abs qui prend un paramètre nb et retourne sa valeur absolue
function abs(nb){
    if (nb < 0){
        return -nb;
    }
    else{
        return nb;
    }
}

function abs2(nb) {
    let a = nb < 0 ? -nb : nb;
    // Condition ternaire
    return nb < 0 ? -nb : nb;  // Condition ? si vrai : si faux
    //return nb < 0 ? -nb : nb;
    if (nb < 0) nb = -nb;            
    return nb;
}

let a = abs(45);
let b = abs(-45);
let c = abs(0);

console.log(abs(45));
console.log(abs(-45));
console.log(abs(0));