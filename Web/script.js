let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to(".row", 3 , {y:300},"-=3")
.to(".po", 3 ,{top:'0%'},'-=3')
.fromTo('.col-md-6',3,{opacity:0},{opacity:1},'-=3')

let scene = new ScrollMagic.Scene({
    triggerElement:"section",
    duration:"50%",
    triggerHook:0,
})
    .setTween(timeline)
    .setPin("section")
    .addTo(controller)