btnnavbarcon = document.querySelector(".navbar__icon");
navlink = document.querySelector(".nav__link");
workDate = document.querySelectorAll(".work-date");
// btnlight = document.querySelector("#btn-light");
imglight = document.getElementById("img-light");
switchModebtn = document.getElementById("switchModebtn");
navlinkli = document.querySelectorAll(".nav__link_li");
lighthight = document.getElementById("light-hight");
nav__link_liactive = document.querySelector(".nav__link_li.active");
title = document.querySelectorAll(".title");
// recentprogress = document.querySelectorAll(".recent-progress");
recentitem = document.getElementsByClassName("recent-item")[0];

overlay = document.getElementById("overlay");
title.forEach((element, index) => {
  console.log("H2 actual width:", element.getBoundingClientRect().width);
});

// imglight = document.querySelector("#")
isCheck = false;

workcontent = document.querySelectorAll(".work-content");

workcontent.forEach((element) => {
  const workDate = element.querySelector(".work-date");
  const line = element.querySelector(".line");
  const workContentThings = element.querySelectorAll(".work-content__thing");

  if (workDate && line && workContentThings.length > 0) {
    // Đặt vị trí top của line theo vị trí của workDate
    line.style.top = workDate.offsetTop - 5 + "px";

    // Tính tổng chiều cao của tất cả các work-content__thing
    let totalHeight = 0;
    workContentThings.forEach((thing) => {
      totalHeight += thing.offsetHeight;
    });

    // Đặt vị trí top mới cho line dựa trên tổng chiều cao
    line.style.height = totalHeight + 100 + "px";
  } else {
    console.error("Missing required elements in:", element);
  }
});

navlinkli.forEach((element, index) => {
  element.addEventListener("click", () => {
    nav__link_liactive.classList.remove("active");
    element.classList.add("active");
    console.log({ element }, index);
  });
});

/**Thanh menu**/

btnnavbarcon.addEventListener("click", () => {
  navlink.classList.toggle("nav__link__active");
  btnnavbarcon.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  navlink.classList.toggle("nav__link__active");
  btnnavbarcon.classList.toggle("open");
  overlay.classList.toggle("show");
});

switchModebtn.addEventListener("change", () => {
  if (switchModebtn.checked) {
    document.querySelector("body").classList.add("light-themes");
  } else {
    document.querySelector("body").classList.remove("light-themes");
  }
});

// recentprogress.forEach((val) => {
//   numDots = val.getAttribute("dot");
//   pt = ``;
//   rot = 360 / numDots;
//   for (a = 1; a <= numDots; a++) {
//     pt += ` <div class="ponts" style="--i:${a}; --rot:${rot}"></div>`;
//   }
//   val.innerHTML = pt;
// });
for (var i = 1; i < 100; i++) {
  // console.log({ recentitem });
  recentitem.innerHTML += "<div class='recent-progress'></div>";
  // recent-progress.style.transform = "rotate("+3.6*i+"deg)";
  // recentprogress.forEach((item, index) => {
  //   console.log("item: ", item, "index: ", index);
  // });
}

var recentprogress = document.querySelectorAll(".recent-progress");

recentprogress.forEach((item, index) => {
  item.style.transform = "rotate(" + 3.6 * (index + 1) + "deg)";
  item.style.animationdelay = `${i / 40}s`;
});

counter = document.querySelector(".counter");
// counter.innetText = 0;
counter.innerText = 0;

target = counter.getAttribute("data-target");

numberCounter = () => {
  const value = +counter.innerText;
  console.log("value", value);
  if (value < target) {
    counter.innerText = Math.ceil(value + 1);
    setTimeout(() => {
      numberCounter();
    }, 2);
  }
};

numberCounter();
// console.log(target);
