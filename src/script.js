document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 200, 400, 400);
    counter("count2", 50, 150, 150);
    counter("count3", 40, 192, 192);
   });
  

   

   const hamburger = document.querySelector(".hamburger");
   const navMenu = document.querySelector(".nav-menu");
   
   hamburger.addEventListener("click", () => {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
   })
   
   document.querySelectorAll("nav-link").forEach(n => n.
     addEventListener("click", () => {
       hamburger.classList.remove("active");
       navContent.classList.remove("active");
     }))

     var slideIndex = 0;
     showSlides();
     
     function showSlides() {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       var dots = document.getElementsByClassName("dot");
       for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
       }
       slideIndex++;
       if (slideIndex > slides.length) {slideIndex = 1}    
       for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active2", "");
       }
       slides[slideIndex-1].style.display = "flex";  
       dots[slideIndex-1].className += " active2";
       setTimeout(showSlides, 2000); // Change slide every 2 seconds
     }
    