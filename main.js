/*let etaPrimo=prompt("inserire un età");
let etaSecondo=prompt("inserire un'altra età");

let eta=parseInt(etaPrimo);
let eta2=parseInt(etaSecondo);

if(eta>eta2){
    alert("Il primo soggetto è piu grande:" + eta );
}else if(eta<eta2){
    alert("Il secondo soggetto è piu grande:" + eta2)
}else{
    alert("hanno la stessa età")
}
*/
let pariDispari=prompt("scegliere pari o dispari");
let stringPari="pari";
let stringDispari="dispari";

let numeroUtente=prompt("inserisci un numero da 0 a 9");
let numeroUtenteFinale=parseInt(numeroUtente);

/*if(pariDispari==stringPari){
    let numeriPari=prompt("scegli un numero tra 0 e 9");
    numeroUtente=parseInt(numeriPari);
    alert("pari:" + numeroUtente);
}else if(pariDispari==stringDispari){
    let numeriDispari=prompt("scegli un numero tra 0 e 9");
    numeroUtente=parseInt(numeriDispari);
    alert("dispari:" + numeroUtente);
}else{
    alert("error");
}
*/
let randomNumber=Math.floor(Math.random() * 10);
alert(randomNumber);

let numeroFinale=numeroUtenteFinale+randomNumber;
alert(numeroFinale);

let quoziente=numeroFinale%2;

if((quoziente==0) && (pariDispari==stringPari)){
    alert("Hai vinto");

}else if((quoziente==1) && (pariDispari==stringPari)){
    alert("Hai perso");
}else if((quoziente==1)&&(pariDispari==stringDispari)){
    alert("Hai vinto");
}else if((quoziente==0)&&(pariDispari==stringDispari)){
    alert("Hai perso");
}