// para el Menu
document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});

var lastScrollTop = 0;
window.addEventListener("scroll", function(){
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop){
    document.getElementById('nav-background').style.display="none";
    document.getElementById("nav-header").classList.remove("header-in");
    document.getElementById("nav-header").style.opacity = 0;
  } else{
    document.getElementById('nav-background').style.display="table";
    document.getElementById("nav-header").classList.add("header-in");
    document.getElementById("nav-header").classList.add("solid");
    document.getElementById("nav-header").style.opacity = 1;
    if(currentScroll<=3){
      document.getElementById("nav-header").classList.remove("solid");
      document.getElementById("nav-header").classList.remove("header-in");
    }
  }
  lastScrollTop = currentScroll;
}, false);

// variables principales
var divContenedor= document.getElementById("gallery");
var docFragment = document.createDocumentFragment();
var infoCoders = ["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado",
"Yessenia Huamán","Miriam Mendoza","Elizabeth Condori","Arantza Burga",
"Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo",
"Jenny Velasquez","Nadia Cuadros","Michell More","Marilu Llamocca",
"Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera",
"Stephanie Hiyagon","Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco",
"Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello","Leslie Avendaño",
"Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez",
"Nakarid Jave","Angie Condor","Maricarmen Rojas","Ariana Cabana","Flor Condori",
"Mitch Rodríguez","Naomi Villanueva","Mari Castillo","Miriam Peralta","Karin Alejo",
"Liliana Peña","Ruth Salvador","Maribel Sevilla","Wendy Reyes","Cinthia Avendaño",
"Maria Grecia Cutipa","Ana Durand","Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];

// un for para mostrar a todas las coders
window.onload = function() {
  for (var i = 1; i <= infoCoders.length; i++) {
    var span = document.createElement("span");
    var figCaption = document.createElement("figcaption");
    var img = document.createElement("img");
    var figure = document.createElement("figure");
    var divCoder = document.createElement("div");
    var nombreCoder = document.createTextNode(infoCoders[i-1]);
    img.setAttribute("src","assets/img/students/"+i+".png");
    figure.setAttribute("class","coder");

    span.appendChild(nombreCoder);
    figCaption.appendChild(span);
    figure.appendChild(img);
    figure.appendChild(figCaption);
    divCoder.appendChild(figure);
    docFragment.appendChild(divCoder);
    divContenedor.appendChild(docFragment);
  }
}
