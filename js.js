var hash = location.hash;
function copy() {
	var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("link").innerHTML);
    document.body.appendChild(aux);
    aux.select();
	document.execCommand("copy");
    document.body.removeChild(aux);

}

function decode(){
var decode1 = hash.substring(1);
var decode2 = window.atob(decode1)
var decode3 = decodeURI(decode2)
document.getElementById("txt").innerHTML = decode3
$("#link").show()
$("#copybtn").show()
$("#sonuc").show()
document.getElementById("beforelink").innerHTML = "Bu Yazının Linki: "
document.getElementById("link").innerHTML = window.location
}

function encode(){
var gettxt = prompt("Çevirilecek Yazı")
var uriencodedtxt = encodeURI(gettxt)
location.hash = window.btoa(uriencodedtxt);
/*
$("#link").show()
$("#copybtn").show()
$("#sonuc").show()
document.getElementById("beforelink").innerHTML = "Bu Yazının Linki: "
document.getElementById("link").innerHTML = window.location
*/
location.reload();
}
function main(){
function goster(){
$("#content").slideToggle(1000);
}
setTimeout(goster,3000);

if(hash!==""){
document.getElementById("uyari").innerHTML = "Yazı Bulundu !!!"
decode();
}
}