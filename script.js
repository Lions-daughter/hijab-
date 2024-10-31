
var elems = document.querySelectorAll(".elem")
var page1 = document.querySelector(".page1")
console.log(elems)
elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        var bgimg = ele.getAttribute("data-img")
        page1.style.backgroundImage = `url(${bgimg})`
    })

})
var mouse = document.querySelector(".cursor")
var min = document.querySelector(".main")
min.addEventListener("mousemove",function(dets){
    mouse.style.left=dets.x+"px"
    mouse.style.top=dets.y+"px"
})




const images = [
  "https://i.pinimg.com/564x/77/17/2e/77172e7321a1d5b8f38957cde745a4b8.jpg",
  "https://source.unsplash.com/featured/?hiking",
  "https://source.unsplash.com/featured/?kayak",
  "https://source.unsplash.com/featured/?forest",
  "https://source.unsplash.com/featured/?mountain",
  "https://source.unsplash.com/featured/?trail",
  "https://source.unsplash.com/featured/?outdoors",
  "https://source.unsplash.com/featured/?norway",
];

$('div.card-image').each(function() {
  const random_image_index = Math.floor(images.length * Math.random());
  $(this).css('background-image', 'url(' + images[random_image_index] + ')');
});
