

	// navbarDropdown
	if ($(window).width() < 992) {
		$('.navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}
  
  // product Slider
  $('.product-image-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data('image');
      return '<img class="img-fluid" src="' + image + '" alt="product-image">';
    }
  });

  // Product slider
  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  /*** start search in bar */
  function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
   /*** end search in bar */

/**start search in homepage for brands */
let suggestions = [
  "apple",
  "samsung",
  "sony",
  "realme",
  "Motorola Watch",
  "Redmi Watch",
  "OnePlus Watch 4",
  "OnePlus Watch 5",
  "OnePlus Watch 1",
  "OnePlus Watch 2",
  "OnePlus Watch 3",
  "Oppo Watch 1x",
  "Oppo Watch 2x",
  "Oppo Watch 3x",
  "price",
  "best watch",
  "Galaxy Watch 2022",
  "Galaxy Watch 2021",
  "apple watch series 7",
  "apple watch series 8",
  "apple watch series 6",
  "Apple Watch SE",
  "Xiaomi Watch",
  "Oppo Watchl",
  "oppo 2",
  "samsung ",
];

// getting all required elements
const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let linkTag = searchInput.querySelector("a");
let webLink;

// if user press any key and release
input.onkeyup = (e)=>{
  let userData = e.target.value; //user enetered data
  let emptyArray = [];
  if(userData){
      emptyArray = suggestions.filter((data)=>{
          //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
          return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
      });
      emptyArray = emptyArray.map((data)=>{
          // passing return data inside li tag
          return data = '<li>'+ data +'</li>';
      });
      searchInput.classList.add("active"); //show autocomplete box
      showSuggestions(emptyArray);
      let allList = resultBox.querySelectorAll("li");
      for (let i = 0; i < allList.length; i++) {
          //adding onclick attribute in all li tag
          allList[i].setAttribute("onclick", "select(this)");
      }
  }else{
      searchInput.classList.remove("active"); //hide autocomplete box
  }
}

function showSuggestions(list){
  let listData;
  if(!list.length){
      userValue = inputBox.value;
      listData = '<li>'+ userValue +'</li>';
  }else{
      listData = list.join('');
  }
  resultBox.innerHTML = listData;
}
/**end search in homepage for brands */

/** start form validation */
function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function val()
{
  if(document.getElementById("message").value==null || document.getElementById("message").value=="")
alert("blank text area")
} 

/** end form validation */