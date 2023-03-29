
function openmobilemenu(){
document.getElementById("mobilemenu").style.display = "flex";
document.getElementById("mobilemenucloseb").style.display = "block";
document.getElementById("mobilemenub").style.display = "none";
document.body.style.overflowY = "hidden";

}
function closemobilemenu(){
  
document.getElementById("mobilemenu").style.display = "none";
document.getElementById("mobilemenu").style.display = "none";
document.getElementById("mobilemenucloseb").style.display = "none";
document.getElementById("mobilemenub").style.display = "block";
document.body.style.overflowY = "scroll";
}
document.body.addEventListener('touchmove',function(e){
      e.preventDefault();
  });
