var item=document.querySelector(".nav-items");
var grid=document.querySelector(".grid");
var close=document.querySelector(".close");
var moon=document.querySelector(".moon");
var sun=document.querySelector(".sun");
var main=document.querySelector(".main");
var footer=document.querySelector(".footer");
var nam=document.querySelector(".name");
var home=document.querySelector(".home");
var about=document.querySelector(".about");
var skill=document.querySelector(".skill");
var con=document.querySelector(".contact");
var homel=document.querySelector(".homel");
var aboutl=document.querySelector(".aboutl");
var skilll=document.querySelector(".skilll");
var conl=document.querySelector(".contactl");
grid.addEventListener("click", more);
close.addEventListener("click", less);
moon.addEventListener("click", dark);
sun.addEventListener("click", light);
home.addEventListener("click", hover1);
about.addEventListener("click", hover2);
skill.addEventListener("click", hover3);
con.addEventListener("click", hover4);
function more() {
item.style.top="-20vh";
}
function less() {
item.style.top="30vh";
}
function light() {
sun.style.display="none";
moon.style.display="flex";
main.style.background="whitesmoke";
footer.style.background="lavender";
moon.style.color="#202020";
grid.style.color="#202020";
nam.style.color="#202020";
item.style.background="lavender";
close.style.color="#202020";
home.style.color="#202020";
skill.style.color="#202020";
con.style.color="#202020";
about.style.color="#202020";
homel.style.color="#202020";
skilll.style.color="#202020";
conl.style.color="#202020";
aboutl.style.color="#202020";
}
function dark() {
moon.style.display="none";
sun.style.display="flex";
main.style.background="#202020";
footer.style.background="#202022";
sun.style.color="lavender";
grid.style.color="lavender";
nam.style.color="lavender";
item.style.background="#333";
close.style.color="lavender";
home.style.color="lavender";
skill.style.color="lavender";
con.style.color="lavender";
about.style.color="lavender";
homel.style.color="lavender";
skilll.style.color="lavender";
conl.style.color="lavender";
aboutl.style.color="lavender";
}
function hover1() {
home.style.color="tomato";
homel.style.color="tomato";
if(item.style.background=="rgb(51, 51, 51)") {
about.style.color="lavender";
aboutl.style.color="lavender";    
skill.style.color="lavender";
skilll.style.color="lavender";
con.style.color="lavender";
conl.style.color="lavender";
}else {
console.log(item.style.background);
skill.style.color="#202020";
con.style.color="#202020";
about.style.color="#202020";
skilll.style.color="#202020";
conl.style.color="#202020";
aboutl.style.color="#202020";   
}
}
function hover2() {
about.style.color="tomato";
aboutl.style.color="tomato";
if(item.style.background=="rgb(51, 51, 51)") {
home.style.color="lavender";
homel.style.color="lavender";    
skill.style.color="lavender";
skilll.style.color="lavender";
con.style.color="lavender";
conl.style.color="lavender";
}else {
skill.style.color="#202020";
con.style.color="#202020";
home.style.color="#202020";
skilll.style.color="#202020";
conl.style.color="#202020";
homel.style.color="#202020";   
}
}
function hover3() {
skill.style.color="tomato";
skilll.style.color="tomato";
if(item.style.background=="rgb(51, 51, 51)") {
about.style.color="lavender";
aboutl.style.color="lavender";    
home.style.color="lavender";
homel.style.color="lavender";
con.style.color="lavender";
conl.style.color="lavender";
}else {
home.style.color="#202020";
con.style.color="#202020";
about.style.color="#202020";
homel.style.color="#202020";
conl.style.color="#202020";
aboutl.style.color="#202020";   
}
}
function hover4() {
con.style.color="tomato";
conl.style.color="tomato";
if(item.style.background=="rgb(51, 51, 51)") {
about.style.color="lavender";
aboutl.style.color="lavender";    
skill.style.color="lavender";
skilll.style.color="lavender";
home.style.color="lavender";
homel.style.color="lavender";
}else {
skill.style.color="#202020";
home.style.color="#202020";
about.style.color="#202020";
skilll.style.color="#202020";
homel.style.color="#202020";
aboutl.style.color="#202020";   
}
}