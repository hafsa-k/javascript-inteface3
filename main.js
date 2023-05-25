//alert("Hello, je suis un cookie"); 
//alert("es-tu sur que tu veux passer, mon cookie est bon"); 
var monObjet = {x:5, y:6};
console.log(monObjet);

monObjet.x = 1;
console.log(monObjet);

var forSideEffect = 5;
function add(x){

    var result = x +forSideEffect;
    return result;
};
console.log(add(2));

var multiply = function (x){
    return x*2;
};

console.log(multiply(5));

//chaine de caracter 

var monTexte = "hello - sunshine - j'ai - faim"
var splited = monTexte.split("-")
var searched = monTexte.search("feoijf")
console.log(monTexte[8])

var isOk = 3 == 3 ; 
console.log(isOk)
if (monObjet.x >=8){
    console.log("test if");
}
else if(monObjet.x < 8){
    console.log("test if 2");
    
}
else{
    console.log("test if 3");

};

var array =[1,5,7,3,];
for (let i = 0; i <55; i++){
    const element = array[i];
    console.log(element);
}; 

var index = 0;
while(index< 5){
    console.log(55);
    index++;    
};

// on définit la fonction callack
var onClick  = function (event){
    console.log(event);
}
//on recupere le button
var myButton = document.querySelector('.button');
//on lie les element entre eux
myButton.addEventListener('click', onClick);

// ajouter des élément programatiquement
var newElement = document.createElement("p")
newElement.innerHTML = "ajouté"
console.log(newElement)
document.body.appendChild(newElement)


console.log(myButton);