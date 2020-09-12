// mixitup plagin

var mixer = mixitup('.grid-portfolio-container');


// scorllify plagin
 $(function() {
          $.scrollify({
            section : ".scrollify",
               setHeights: false,
               updateHash: false,
          });
        });


// Humbermenu class


function openMenu(){
    document.getElementById('navbar').style.height = '100%';
}


function closeMenu(){
    document.getElementById('navbar').style.height = '0%';
}


$(function(){
    
   $('.menu-item a .scroll-down a .totop a').on('click',function(){
    $('html, body').animate({
scrollTop:$($.attribute(this, 'href')).offset().top        
        
    },1000);  
       
       return false;
       
       
   }); 
});










