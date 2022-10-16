var pages=document.getElementById("pages");
var blogs=document.getElementById("blogs");
var contact=document.getElementById("contact");
var pagein=document.getElementById("pages-in");
var blogin=document.getElementById("blogs-in");
var contactin=document.getElementById("contact-in");
pagein.remove();
blogin.remove();
contactin.remove();

 pages.addEventListener("click", pageclick);
 function pageclick(e){
     e.preventDefault();
        if(pages.className=="off"){
            pagein.remove();
            pages.className=" ";
        }else{
            pages.appendChild(pagein);
            pages.className="off";
        }
 }

 blogs.addEventListener("click", blogclick);
 function blogclick(e){
     e.preventDefault();
        if(blogs.className=="off"){
            blogin.remove();
            blogs.className=" ";
        }else{
            blogs.appendChild(blogin);
            blogs.className="off";
        }
 }
 contact.addEventListener("click", contactclick);
 function contactclick(e){
     e.preventDefault();
        if(contact.className=="off"){
            contactin.remove();
            contact.className=" ";
        }else{
            contact.appendChild(contactin);
            contact.className="off";
        }
 }
// Slider2 Code...
 var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3500);    
}