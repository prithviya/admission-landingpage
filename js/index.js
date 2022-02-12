
// navigation
function home() 
{
  document.getElementById("home").style.display = "block";
  document.getElementById("admission").style.display = "none";
  document.getElementById("course").style.display = "none";
  document.getElementById("campus").style.display = "none";
  document.getElementById("scholar").style.display = "none";
  document.getElementById("loan").style.display = "none";
  document.getElementById("hostel").style.display = "none";
  document.getElementById("placement").style.display = "none";
}

function admission()
{
  document.getElementById("home").style.display = "none";
  document.getElementById("admission").style.display = "block";
  document.getElementById("course").style.display = "none";
  document.getElementById("campus").style.display = "none";
  document.getElementById("scholar").style.display = "none";
  document.getElementById("loan").style.display = "none";
  document.getElementById("hostel").style.display = "none";
  document.getElementById("placement").style.display = "none";
}
function course()
{
  document.getElementById("home").style.display = "none";
  document.getElementById("admission").style.display = "none";
  document.getElementById("course").style.display = "block";
  document.getElementById("campus").style.display = "none";
  document.getElementById("scholar").style.display = "none";
  document.getElementById("loan").style.display = "none";
  document.getElementById("hostel").style.display = "none";
  document.getElementById("placement").style.display = "none";
}
function campus()
{
  document.getElementById("home").style.display = "none";
  document.getElementById("admission").style.display = "none";
  document.getElementById("course").style.display = "none";
  document.getElementById("campus").style.display = "block";
  document.getElementById("scholar").style.display = "none";
  document.getElementById("loan").style.display = "none";
  document.getElementById("hostel").style.display = "none";
  document.getElementById("placement").style.display = "none";
}
function scholar()
{
  document.getElementById("home").style.display = "none";
  document.getElementById("admission").style.display = "none";
  document.getElementById("course").style.display = "none";
  document.getElementById("campus").style.display = "none";
  document.getElementById("scholar").style.display = "block";
  document.getElementById("loan").style.display = "none";
  document.getElementById("hostel").style.display = "none";
  document.getElementById("placement").style.display = "none";
}
function loan()
{
  document.getElementById("home").style.display = "none";
  document.getElementById("admission").style.display = "none";
  document.getElementById("course").style.display = "none";
  document.getElementById("campus").style.display = "none";
  document.getElementById("scholar").style.display = "none";
  document.getElementById("loan").style.display = "block";
  document.getElementById("hostel").style.display = "none";
  document.getElementById("placement").style.display = "none";
}
function hostel()
{
  document.getElementById("home").style.display = "none";
  document.getElementById("admission").style.display = "none";
  document.getElementById("course").style.display = "none";
  document.getElementById("campus").style.display = "none";
  document.getElementById("scholar").style.display = "none";
  document.getElementById("loan").style.display = "none";
  document.getElementById("hostel").style.display = "block";
  document.getElementById("placement").style.display = "none";
}
function placement()
{
  document.getElementById("home").style.display = "none";
  document.getElementById("admission").style.display = "none";
  document.getElementById("course").style.display = "none";
  document.getElementById("campus").style.display = "none";
  document.getElementById("scholar").style.display = "none";
  document.getElementById("loan").style.display = "none";
  document.getElementById("hostel").style.display = "none";
  document.getElementById("placement").style.display = "block";
}

// open off canva
openOffcanvas() 
 {
   UIkit.offcanvas('#offcanvas-slide').show();
   UIkit.scrollspyNav('#offcanvas-slide',
   {
     closest: 'a', scroll:true, offset: 50
    });
 }