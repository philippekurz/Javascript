// Créer 3 variables i, j, k et leur affecter 3 valeurs numériques différentes
let i = 45;
let j = 46;
let k = 47;
// Additionner les 3 variables et afficher le résultat
let l = i + j + k;
console.log("La somme = ", l);
// OU
console.log(i + j + k);
// OU
console.log(i, "+", j, "+", k, "=", i + j + k);


// Créer 3 variables x, y, z et leur affecter 3 valeurs numériques différentes

let x = 10, y = 5, z = 2;

// Afficher x + y * z
console.log(x + (y * z)); // x + (y * z)
console.log((x + y) * z); // (x + y) * z

// Afficher x * y + z
console.log(x * y + z); // x * y + z
console.log(x * (y + z)); // x * (y + z)

// Afficher x - y * z
console.log(x - y * z); // x - y * z
console.log(x - (y * z)); // x - (y * z)

// Afficher x / y + z
console.log(x / y + z); // x / y + z
console.log(x / (y + z)); // x / (y + z)

console.log("***********************");
// Déclarer 2 variables a et b et leur affecter des valeurs numériques
// let a = 10;
// let b = 3;
let a = 10, b = 3;

// Déterminer si la première variable est divisible par la deuxième, à l'aide du modulo (%)
//let divisible = (a % b == 0);

// Afficher le résultat en utilisant une condition if...else
if (a % b == 0) 
    console.log(a, "est divisible par", b);
else
    console.log(a, "n'est pas divisible par", b);
