let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}




let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
 }


 var slideIndex = 0;
 showSlides();
 
 function showSlides() {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}
   slides[slideIndex-1].style.display = "block";
   setTimeout(showSlides, 3000); // Change image every 3 seconds
 }
 

 /*about-content starts */
 function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }



  function openNav1() {
    document.getElementById("myNav1").style.width = "100%";
  }
  
  function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
  }



  function openNav2() {
    document.getElementById("myNav2").style.width = "100%";
  }
  
  function closeNav2() {
    document.getElementById("myNav2").style.width = "0%";
  }


  function openNav3() {
    document.getElementById("myNav3").style.width = "100%";
  }
  
  function closeNav3() {
    document.getElementById("myNav3").style.width = "0%";
  }

  function openNav4() {
    document.getElementById("myNav4").style.width = "100%";
  }
  
  function closeNav4() {
    document.getElementById("myNav4").style.width = "0%";
  }

  function openNav5() {
    document.getElementById("myNav5").style.width = "100%";
  }
  
  function closeNav5() {
    document.getElementById("myNav5").style.width = "0%";
  }

  function openNav6() {
    document.getElementById("myNav6").style.width = "100%";
  }
  
  function closeNav6() {
    document.getElementById("myNav6").style.width = "0%";
  }

  function openNav7() {
    document.getElementById("myNav7").style.width = "100%";
  }
  
  function closeNav7() {
    document.getElementById("myNav7").style.width = "0%";
  }

  function openNav8() {
    document.getElementById("myNav8").style.width = "100%";
  }
  
  function closeNav8() {
    document.getElementById("myNav8").style.width = "0%";
  }



  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}