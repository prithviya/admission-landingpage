
// navigation
function home() 
{
  document.getElementById("home").style.display = "block";
  document.getElementById("admission").style.display = "none";
  document.getElementById("course").style.display = "none";
  document.getElementById("campus").style.display = "none";
  document.getElementById("scholar").style.display = "none";
}

function admission()
{
  document.getElementById("home").style.display = "none";
  document.getElementById("admission").style.display = "block";
  document.getElementById("course").style.display = "none";
  document.getElementById("campus").style.display = "none";
  document.getElementById("scholar").style.display = "none";
}
function course()
{
  document.getElementById("home").style.display = "none";
  document.getElementById("admission").style.display = "none";
  document.getElementById("course").style.display = "block";
  document.getElementById("campus").style.display = "none";
  document.getElementById("scholar").style.display = "none";
}
function campus()
{
  document.getElementById("home").style.display = "none";
  document.getElementById("admission").style.display = "none";
  document.getElementById("course").style.display = "none";
  document.getElementById("campus").style.display = "block";
  document.getElementById("scholar").style.display = "none";
}
function scholar()
{
  document.getElementById("home").style.display = "none";
  document.getElementById("admission").style.display = "none";
  document.getElementById("course").style.display = "none";
  document.getElementById("campus").style.display = "none";
  document.getElementById("scholar").style.display = "block";
}