/*let etaPrimo=prompt("inserire un età");
let etaSecondo=prompt("inserire un'altra età");

let eta=parseInt(etaPrimo);
let eta2=parseInt(etaSecondo);

if(eta>eta2){
    alert("Il primo è piu grande:" + eta );
}else if(eta<eta2){
    alert("Il secondo soggetto è piu grande:" + eta2)
}else{
    alert("hanno la stessa età")
}
*/
let pariDispari=prompt("scegliere pari o dispari");
let stringPari="pari";
let stringDispari="dispari";
let numeroUtente;

if(pariDispari==stringPari){
    let numeriPari=prompt("scegli un numero tra 0-2-4-6-8");
    numeroUtente=parseInt(numeriPari);
    alert("pari:" + numeroUtente);
}else if(pariDispari==stringDispari){
    let numeriDispari=prompt("scegli un numero tra 1-3-5-7-9");
    numeroUtente=parseInt(numeriDispari);
    alert("dispari:" + numeroUtente);
}else{
    alert("error");
}

let randomNumber=Math.floor(Math.random() * 10);
alert(randomNumber);
let numeroFinale=numeroUtente+randomNumber;
let quoziente=numeroFinale%2;
if(quoziente==0){
    alert("Ha vinto pari");
}else{
        alert("Ha vinto dispari");
}
