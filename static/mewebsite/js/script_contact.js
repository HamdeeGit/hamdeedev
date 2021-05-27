// JavaScript Document
//  $(document).ready(function() {
//     $('#autoWidth').lightSlider({
//         autoWidth:true,
//         auto:true,
//         loop:true,
//         pauseOnHover: true,
//         onSliderLoad: function() {
//             $('#autoWidth').removeClass('cS-hidden');
//         } 
//     });  
//   });


  // Skill Section 
  // Try One
  // $('.progress::before').each(function(){
  //   var $this = $this;
  //   var per = $this.attr('per');
  //   $this.css("width",per+'%');
  //   $({animatedValue: 0}).animate({animatedValue: per},{
  //     duration: 1000,
  //     step: function(){
  //       $this.attr('per', Math.floor(this.animatedValue) + '%');
  //     },
  //     complete: function(){
  //       $this.attr('per', Math.floor(this.animatedValue) + '%');
  //     }
  //   });
  // });

  //Try Two
  // const progress = document.querySelector(".progress::before");
  // const per = progress.getAttribute("per");


  
  // for(i=0; i<=per; i++){
  //   console.log(i)
  //   progress.style.content="i";
  //   console.log(progress.style);
  // }
  
  




  // Header 

//   let header = document.querySelector('header');

//   window.addEventListener('scroll', function () {
//       let windowPosition = window.scrollY > 300;
//       header.classList.toggle('active', windowPosition)
//   })


//   let menuR = document.querySelector('.menuR');

//   window.addEventListener('scroll', function () {
//       let windowPosition = window.scrollY > 300;
//       menuR.classList.toggle('active', windowPosition)
//   })

  // let section = document.querySelector('section');

  // section.addEventListener('scroll', function () {
  //     let sectionPosition = section.scrollY < 300;
  //     section.classList.toggle('active', sectionPosition)
  //     menuR.classList.toggle('active', windowPosition)
  // })


  
//   Contact Section

  let contactInfo = document.querySelector('.contact-info');
  let contactForm = document.querySelector('.contact-form');

  let contactToggler=document.querySelector('#toggler-contact');
  let messageToggler=document.querySelector('#toggler-message');
  
  contactToggler.addEventListener("click", function(){
    messageToggler.checked = false;
  })

  messageToggler.addEventListener("click", function(){
    contactToggler.checked = false;
  })
