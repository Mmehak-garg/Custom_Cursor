var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var img = document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    // console.log("movinng");
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out"
    })
})
img.addEventListener("mouseenter",function(){
    cursor.innerHTML="Know More";
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#fffff7c"
    })
})
img.addEventListener("mouseleave",function(){
    cursor.innerHTML="";
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
    })
})


