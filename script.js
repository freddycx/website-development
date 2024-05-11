
let scrollcontainer =document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById( "nextbtn");

scrollcontainer.addEventListener("wheel",(evt) => {
    evt.prevent();
    scrollcontainer.scrollleft += evt.deltaY;
});

nextbtn.addEventListener("click",() => {
    scrollcontainer.style.scrollbehaviour="smooth";
    scrollcontainer.scrollleft += 900;
});
 backbtn.addEventListener("click",() => {
    scrollcontainer.style.scrollbehaviour="smooth";

    scrollcontainer.scrollleft -= 900;
});
