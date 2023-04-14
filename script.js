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

//api code start now

// fetch("https://dummyjson.com/products/")
// .then((value)=>{
//     return value.json()
// })
// .then((value2)=>{
//     console.log(value2.products); 
//     ihtml = ""
//     for (item in value2.products) {   
//         // console.log(value2[item])
//         console.log(value2.products[item].title);     
//     ihtml += `
//     <div class="col-md-3 my-3 main_middle">
//                    <div class="main_in_middle">
//                    <div class="row middle_hidden ">
//                    <div class="col-12 kapil">
//                        <img src="${value2.products[item].thumbnail}" alt="" class="img-fluid middle_img_part" >
//                    </div>
//                </div>
//                <div class="row p-3 pb-1 ">
//                    <div class="col-10 kapil">${value2.products[item].title}</div>
//                    <div class="col-2"><i class="bi bi-heart"></i></div>
//                </div>
//                <div class="row p-3 pb-1 ">
//                    <div class="col-6 text-truncate kapil">${value2.products[item].description} </div>
//                    <div class="col-6 " id="read_more"><button type="button" onclick="myFunction()"  class="btn btn-primary">Lead More</button> </div>
                  
//                </div>
//                <hr>
//                <div class="row p-3 pt-0">
//                    <div class="col-7 text-primary kapil">${value2.products[item].price} ₹ 
//                    </div>
//                    <div class="col-5 text-info kapil">Rating :${value2.products[item].rating}</div>
//                </div>
//                </div>
//                 </div>
                
//     `    
// }
// allcard.innerHTML = ihtml;
// })
//api code here are closed




//new api code is here
//crousal ends here

//checkbox by selector
var expanded = false;
//check box 1 code
function showCheckboxes() {
  var checkboxes = document.getElementById("navbarSupportedContent-category");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
//second check box code
  function showCheckboxes2(){
    var checkboxesbrand = document.getElementById("navbarSupportedContent-brand");
    if (!expanded) {
      checkboxesbrand.style.display = "block";
      expanded = true;
    } else {
      checkboxesbrand.style.display = "none";
      expanded = false;
    }
  }



//   ---------------------slider code is over now ------------------
function myFunction() {
  document.getElementById("read_more").style.whiteSpace = "pre-wrap";
}

fetch("https://dummyjson.com/products?offset=0&limit=100")
  .then((response) => response.json())
  .then((value2) => value2.products)
  .then((value2) => {
    iscategory(value2);
    isBrand(value2);
    idDisplayCard(value2);
    selectData(value2);
  });
iscategory = (value2) => {
  let categoryarray = [];
  value2.forEach((element) => {
    categoryarray.push(element["category"]);
  });
  categoryarray = new Set(categoryarray);
  let htmlContent = ``;

  console.log(categoryarray);
  for (const element of categoryarray) {
    htmlContent += `
    <input type="radio" id="radioButton-${element}" value="${element}" name="categoryFilter" class="custom-control-input position-absolute" onclick="categoriesFilterFunction()"><label class="custom-control-label" for="radioButton-${element}">${element}</label>`;
  }
  document.getElementById("navbarSupportedContent-category").innerHTML =
    htmlContent;
};

isBrand = (value2) => {
  let brandarray = [];
  value2.forEach((element) => {
    brandarray.push(element["brand"]);
  });
  brandarray = new Set(brandarray);
  let htmlContent = "";

  // For of is used for to fetch data from Objects and genderArray is an object
  for (const element of brandarray) {
    htmlContent += `<input class="form-check-input position-absolute" type="checkbox" value="${element}" id="checkboxInput-${element}" name="brandFilter" onclick="brandsFilterFunction()">
    <label class="form-check-label" for="checkboxInput-${element}">${element}</label>
  `;
  }
 
  // Calling DOM through ID and inserting values
  document.getElementById("navbarSupportedContent-brand").innerHTML +=
    htmlContent;
};

idDisplayCard = (value2) => {
  // Assigning variable
  let htmlContent = "";
  
  // ForEach loop is used to fetch data from object "products"
  value2.forEach((element) => {
    let percentagevalue= element.price/element.discountPercentage;
    percentagevalue = Number.parseInt(element.price-percentagevalue);

   
    htmlContent += `
     
    





    <div class="product-card">
    <a class="aaa" target="_blank"">
      <div class="product-front-image">
        <div class="front-image">
          <img alt="" class="img-fluid" src="${element.thumbnail}" onclick="singleproductdetail()>
        </div>
        <div class="owl-slider">
          <div id="carousel3" class="owl-carousel product-slider">
            <div class="product-image">
              <img alt="" src="${element.images[0]}">
            </div>
            <div class="product-image">
              <img alt="" src="${element.images[1]}">
            </div>
          </div>
        </div>
       <div class="row">
        <div class=" col-12">
                  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="${element.images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                        </div>
                        <div class="carousel-item">
                          <img src="${element.images[0]}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="${element.images[1]}" class="d-block w-100" alt="...">
                        </div>   
                      </div>
                    </div>
              </div>
        </div>
        <div class="product-like">
          <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
            <path
              d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
              class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
          </svg>
        </div>
      </div>
    </a>
    <div class="product-details">
      <div class="brand-name">${element.brand}</div>
      <a class="brand-desc" data-bs-toggle="modal" data-bs-target="#staticBackdrop" title="" onclick="singleiddescription(${element.id})">${element.title}</a>
      <div class="color-details">Grey</div>
      
      <a class="" target="_blank" href="#">
        <div class="price-info-sec">
          <div class="price">₹${percentagevalue} </div>
          <div class="cut-off">₹${element.price}</div>
          <div class="discount-percent"><span>${Math.ceil(element.discountPercentage)}% off</span></div>
        </div>
      </a>
    </div>
  </div>`;
  });

  // Calling DOM through ID and inserting values
  document.getElementById("allcard").innerHTML = htmlContent;
};
var filteredData = [];

// Fetching Filtered Data

const selectData = (data) => {
  filteredData = data;
};

function categoriesFilterFunction() {
  // Storing value in "categoryValue" variable with help of name attribute
  var categoryValue = document.querySelector(
    'input[name="categoryFilter"]:checked'
  ).value;

  // Filtering the selected data  and display accordingly
  var data = filteredData.filter(
    (categoryValueFiltered) => categoryValueFiltered.category === categoryValue
  );
  console.log(data);
  idDisplayCard(data);
}

function brandsFilterFunction() {
  // Storing value in "brandValue" variable with help of name attribute
  var brandValue = document.querySelectorAll(
    'input[name="brandFilter"]:checked'
  );
  var categoryValue = document.querySelector(
    'input[name="categoryFilter"]:checked'
  );

  // For multiple checks box creating an array named "brandArray"
  var brandArray = [];

  // Checking each check box wether checked or non checked with help of Ternary operator
  brandValue.forEach((brnElement) => {
    brnElement.checked && categoryValue.checked
      ? brandArray.push(brnElement.value)
      : null;
  });

  // New variable for multiple Checked-BOX
  var brandArrayResult = [];

  // Fetching Filtered Brand data
  brandArray.forEach((value) => {
    brandArrayResult = brandArrayResult.concat(
      filteredData.filter((checkBoxData) => checkBoxData.brand.includes(value))
    );
  });

  // Setting condition whether if check box are checked or not with help of Ternary operator
  brandArrayResult.length !== 0
    ? idDisplayCard(brandArrayResult)
    : idDisplayCard(filteredData);
  console.log(brandArrayResult);
}

function navSearchFunction() {
  // Storing value in "searchKeyword" variable with help of name attribute
  var searchKeyword = document.getElementById("navSearch").value.toUpperCase();

  // Fetching Result and Display Data accordingly
  var searchResult = filteredData.filter((searchItem) =>
    searchItem.title.toUpperCase().includes(searchKeyword)
  );

  idDisplayCard(searchResult);
}
function singleiddescription(data){
  let myproductid = data;
  let myproductdetail = '';
  fetch(`https://dummyjson.com/products/${myproductid}`)
    .then(response => response.json())    
    .then(element=>  {   
      let percentagevalue= element.price/element.discountPercentage;
      percentagevalue = Number.parseInt(element.price-percentagevalue);
    
     myproductdetail+=`     
     <div class="product-card">
     <a class="aaa" target="_blank"">
       <div class="product-front-image">
         <div class="front-image">
           <img alt="" class="img-fluid" src="${element.thumbnail}" onclick="singleproductdetail()>
         </div>
         <div class="owl-slider">
           <div id="carousel3" class="owl-carousel product-slider">
             <div class="product-image">
               <img alt="" src="${element.images[0]}">
             </div>
             <div class="product-image">
               <img alt="" src="${element.images[1]}">
             </div>
           </div>
         </div>
        <div class="row">
         <div class=" col-12">
                   <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                       <div class="carousel-inner">
                         <div class="carousel-item active">
                           <img src="${element.images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                         </div>
                         <div class="carousel-item">
                           <img src="${element.images[0]}" class="d-block w-100" alt="...">
                         </div>
                         <div class="carousel-item">
                           <img src="${element.images[1]}" class="d-block w-100" alt="...">
                         </div>   
                       </div>
                     </div>
               </div>
         </div>
         <div class="product-like">
           <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
             <path
               d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
               class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
           </svg>
         </div>
       </div>
     </a>
     <div class="product-details">
       <div class="brand-name">${element.brand}</div>
       <a class="brand-desc" title="" onclick="singleiddescription(${element.id})">${element.title} (Grey)</a>
       <div class="color-details">Grey</div>
       
       <a class="" target="_blank" href="#">
         <div class="price-info-sec">
           <div class="price">₹${percentagevalue} </div>
           <div class="cut-off">₹${element.price}</div>
           <div class="discount-percent"><span>${Math.ceil(element.discountPercentage)}% off</span></div>
         </div>
       </a>
     </div>
   </div>
   <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
       
    `

    thisismydetail.innerHTML=myproductdetail
  
})
 
}

//fetch data from github for users








//new api code is closed




//dark mode button code is here
$("#sun_bright").click(function(){
    $("#sun_bright").html("<i class='bi bi-brightness-high-fill'></i>");
    $("#sun_bright").css('color','black');
})
//dark mode is closed
//nav bar heart code is here
function favourite() {
            const heartRed = document.querySelector(".icon_heart>i.red");
            if (heartRed) {
                heartRed.classList.remove("red");
            }
            else {
                const heart = document.querySelector(".icon_heart>i");
                heart.classList.add("red");
            }

        }
//heart code is closed

//Get the button back to top button
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

 //google translate code is here 
 
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
  //date code is here

  let date_foot1 = new Date();
   let ftt = document.getElementById("date_foot").innerHTML = date_foot1.getFullYear();
//date code is closed here  

  
