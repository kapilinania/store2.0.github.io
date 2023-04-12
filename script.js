// -----------------top slider code is here-----------------
$(document).ready(function () {
    function detect_active() {
      // get active
      var get_active = $("#dp-slider .dp_item:first-child").data("class");
      $("#dp-dots li").removeClass("active");
      $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
    }
    $("#dp-next").click(function () {
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
      detect_active();
    });
  
    $("#dp-prev").click(function () {
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
  
      detect_active();
    });
  
    $("#dp-dots li").click(function () {
      $("#dp-dots li").removeClass("active");
      $(this).addClass("active");
      var get_slide = $(this).attr("data-class");
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]")
        .hide()
        .prependTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
    });
  
    $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
      var get_slide = $(this).attr("data-class");
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]")
        .hide()
        .prependTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
  
      detect_active();
    });
  });
  

//   ---------------------slider code is over now ------------------


fetch("https://dummyjson.com/products/")
.then((value)=>{
    return value.json()
})
.then((value2)=>{
    console.log(value2.products); 
    ihtml = ""
    for (item in value2.products) {   
        // console.log(value2[item])
        console.log(value2.products[item].title); 
        
        

        
    ihtml += `
    <div class="col-md-3 my-3 main_middle">
                   <div class="main_in_middle">
                   <div class="row middle_hidden ">
                   <div class="col-12 kapil">
                       <img src="${value2.products[item].thumbnail}" alt="" class="img-fluid middle_img_part" >
                   </div>
               </div>
               <div class="row p-3 pb-1 ">
                   <div class="col-10 kapil">${value2.products[item].title}</div>
                   <div class="col-2"><i class="bi bi-heart"></i></div>
               </div>
               <div class="row p-3 pb-1 ">
                   <div class="col-6 text-truncate kapil">${value2.products[item].description} </div>
                   <div class="col-6 " id="read_more"><button type="button" onclick="myFunction()"  class="btn btn-primary">Lead More</button> </div>
                  
               </div>
               <hr>
               <div class="row p-3 pt-0">
                   <div class="col-7 text-primary kapil">${value2.products[item].price} ₹ 
                   </div>
                   <div class="col-5 text-info kapil">Rating :${value2.products[item].rating}</div>
               </div>
               </div>
                </div>
                
    `    
}
allcard.innerHTML = ihtml;
})

//head heart icon color change

$("#heart").click(function(){
    $("#heart").html("<i class='bi bi-heart-fill  '></i>");
    $("#heart").css('color','red');
})
$("#sun_bright").click(function(){
    $("#sun_bright").html("<i class='bi bi-brightness-high-fill'></i>");
    $("#sun_bright").css('color','black');
})


//button css is herer
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//back to to button css is closed

//dark mode is here 
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 //dark mode is here

 //translate code is here 
 
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}