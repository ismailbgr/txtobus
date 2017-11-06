var hash = location.hash;
function selecttxt(){
var secilecek = document.getElementById("link")
secilecek.select()
}

function copy() {
	var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("link").innerHTML);
    document.body.appendChild(aux);
    aux.select();
	document.execCommand("copy");
    document.body.removeChild(aux);
    alert("Kopyalandı!")
}

function decode(){
	var date = new Date;
var dateday = date.getDate();
if(dateday < 10){
	dateday ="0"+dateday
}
var decode1 = hash.substring(1);
var decode2 = window.atob(decode1)
var decode3 = decodeURI(decode2)
if(decode3.substring(0,2)==dateday){
document.getElementById("txt").innerHTML = decode3.substring(2)
$("#link").show()
$("#copybtn").show()
$("#sonuc").show()
document.getElementById("beforelink").innerHTML = "Bu Yazının Linki: "
document.getElementById("link").value = window.location
}else{
	alert("Bu Yazının Süresi Dolmuştur...")
}
}

function encode(){
var date = new Date;
var dateday = date.getDate();
if(dateday < 10){
	dateday ="0"+dateday
}
var gettxt = prompt("Çevirilecek Yazı")
if(gettxt == "" || gettxt == null){
	
}else{
var uriencodedtxt = encodeURI(dateday+gettxt)
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