var mouse = document.querySelector(".cursor")
var min = document.querySelector(".main")
min.addEventListener("mousemove",function(dets){
    mouse.style.left=dets.x+"px"
    mouse.style.top=dets.y+"px"
})