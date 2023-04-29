"use strict"

let basketBtn = document.querySelectorAll("#add");
let arr = JSON.parse(localStorage.getItem("basket"));

basketBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let id = this.parentNode.parentNode.getAttribute("data-id");
    if (localStorage.getItem("basket") == null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    arr = JSON.parse(localStorage.getItem("basket"));
    let existProduct = arr.find((p) => p.id == id);
    if (existProduct == undefined) {
      arr.push({
        id: id,
        imgUrl: this.parentNode.parentNode.previousElementSibling.firstElementChild.getAttribute("src"),
        name: this.parentNode.parentNode.firstElementChild.innerText,
        description: this.parentNode.parentNode.firstElementChild.nextElementSibling.innerText,
        price: this.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.innerText,
        count: 1
      });
    } else {
      existProduct.count++
    }
    localStorage.setItem("basket", JSON.stringify(arr));
    calculateProductCount();
    addBasket();
    calculateTotalPrice();
  });
});

function addBasket() {
  let ul = document.querySelector(".p-list");
  if (localStorage.getItem("basket") != null) {
    arr.forEach((p) => {
      let li = `<li style="list-style: none;">
  <div data-id="${p.id}" class="row">
    <div class="col-5">
      <img src="${p.imgUrl}" alt="">
    </div>
    <div class="col-7">
      <h6>${p.name}</h6>
      <p>Unit Price : ${p.price}</p>
      <div class="count">
        <button class="bttn">-</button>
        <h2 id="counting3"></h2>
        <button class="bttn2">+</button>
      </div>
    </div>
  </div>
  <div class="proceed d-flex">
    <p>Proceed To Checkout </p>
    <p class="total_price"></p>
  </div>
</div>
<i id="id" class="fa-solid fa-trash-can"  style="font-size: 25px; cursor: pointer; color: black; " "></i>
</li>`;
      ul.innerHTML += li;
    });
  }
}
addBasket();

function calculateProductCount() {
  let basketCount = document.querySelector("#shopping-count");
  if (localStorage.getItem("basket") != null) {
    arr = JSON.parse(localStorage.getItem("basket"));
    let sum = 0;
    arr.forEach((p) => {
      sum += p.count;
      basketCount.innerHTML = sum;
    });
    basketCount.innerHTML = sum;
  }
}
calculateProductCount();

function calculateTotalPrice() {
  if (localStorage.getItem("basket") != null) {
    let totalPrice = document.querySelector(".total_price");
    let sum = 0;
    arr.forEach((p) => {
      sum += p.price.slice(0, p.price.length - 1) * p.count;
      totalPrice.innerHTML = sum;
    });
  }
}
calculateTotalPrice();

let deleteBtn = document.querySelectorAll(".fa-trash-can");

deleteBtn.forEach((deleteBtn) => {
  deleteBtn.setAttribute("onclick", "Delete(this)");
});

function Delete(item) {
  let product = item.parentNode.firstElementChild.getAttribute("data-id").value;
  arr.splice(product, 1);
  localStorage.setItem("basket", JSON.stringify(arr));
  item.parentNode.remove();
  calculateProductCount();
}

$(function () {

  $('.cards').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  window.onload = function () {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });




    $('.slider2').slick({
      dots: false,
      autoplay: true,
      autoplaySpeed: 1500,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });


    $('.slider3').slick({
      dots: false,
      autoplay: true,
      autoplaySpeed: 1500,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });

  };

});


let data = 1;
document.querySelector("#counting").innerText = data;

function increment() {
  if (data > 1) {
    data = data - 1;
    document.querySelector("#counting").innerText = data;
  }
}
function decrement() {
  data = data + 1;
  document.querySelector("#counting").innerText = data;
}

if (localStorage.getItem("basket") != null) {
  let data3 = 1;
  document.querySelector("#counting3").innerHTML = data3;
  let bttn = document.querySelector(".bttn");
  let bttn2 = document.querySelector(".bttn2");


  bttn.addEventListener("click", function () {
    if (data3 > 1) {
      data3 = data3 - 1;
      document.querySelector("#counting3").innerText = data3;
    }
  })

  bttn2.addEventListener("click", function () {
    data3 = data3 + 1;
    document.querySelector("#counting3").innerText = data3;
  })
}






let icon = document.querySelector('#shopping-i')
let icon2 = document.querySelector('#view')
let bars_x = document.querySelector('#clos')
let shop = document.querySelector('.shop')

icon.addEventListener('click', () => {
  shop.classList.toggle('active');
})

icon2.addEventListener('click', () => {
  shop.classList.toggle('active');
})


bars_x.addEventListener('click', () => {
  shop.classList.remove('active');
})
