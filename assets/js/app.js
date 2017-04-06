document.getElementById("toggle").addEventListener("click", function(e){
  e.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById("body").classList.toggle("overflow-hidden");
})
