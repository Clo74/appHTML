/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//document.querySelectorAll(".vocemenu").forEach(function (elm, i) {
//    elm.onfocus = chiediget(elm.href);
//});
document.querySelectorAll(".vocemenu").forEach(function (elm, i) {
    elm.onclick = voceAttiva;
});

function voceAttiva() {
    document.querySelectorAll(".vocemenu").forEach(function (elm, i) {
        elm.classList.remove("active");
    });
    this.classList.add("active");
}
//elm.classList.remove("attivo")

document.querySelector("#battNav").onmouseover = chiediget;
document.querySelector("#astronav").onmouseover = chiediget;
document.querySelector("#tastiera").onmouseover = chiediget;

function chiediget() {
    var chiamata = null;
    chiamata = new XMLHttpRequest();
    chiamata.open("GET", this.href, false);

    /*setTimeout(function(){*/
    chiamata.send(null);
    document.getElementById('contenuto').innerHTML = chiamata.responseText;
    var scrpt = document.createElement('script');

    switch (this.id) {
        case "astronav":
            scrpt.src = 'jsGiocoAstronave3.js';
            break;
        case "tastiera":
            scrpt.src = 'tastiera.js';
            break;

        default:
            scrpt.src = '';
            break;
    }
    document.head.appendChild(scrpt);

    //    
//    if (jschiam != "") {
//        chiamata2.open("GET", jschiam, true);
//        chiamata2.send(null);
//       // eval(chiamata2.responseText);
//       jschiam="";
//    }

    /* }, 5000);*/


}

document.querySelector("#home").onclick = function home() {
    document.getElementById('contenuto').innerHTML = "Passa con il mouse sopra le voci di menù per avere un'anteprima della pagina richiamata";
};
//document.getElementById('contenuto').innerHTML = chiediget('giocoAstronave3.html');  