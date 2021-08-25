// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
// 1 creare un array vuoto
var contenitore = [];
for(var i=0;i<6;i++){
    // 2) Chiedi per 6 volte all’utente di inserire un numero
    var inputUtente= parseInt(prompt("Inserisci il " + (i+1) +"° numero:"));
    // 3) Inserisci una verifica input utente, per assicurarsi che venga inserito un numero
    if(isNaN(inputUtente)==true){
        alert("Inserisci un numero!!");
        i--;
    }
    else if(isNaN(inputUtente)==false){
        // condizione per il caso dispari
        if(inputUtente%2==1){
            contenitore.push(inputUtente);
        }
    }     
}
for(var i=0;i<contenitore.length;i++){
    alert("Il contenuto dell'array in posizione "+ (i+1) + " è : "+contenitore[i]);
    console.log(contenitore[i]);
}