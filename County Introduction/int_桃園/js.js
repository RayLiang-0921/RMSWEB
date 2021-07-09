const to_top= document.getElementById("to_top");
to_top.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
    });
}
);

const P1 = document.getElementById("1");
P1.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="桃園.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        image.src="";
        image.alt="";
        image.remove();
    });
});

const P2 = document.getElementById("2");
P2.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="國旗屋雲南米干.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        image.src="";
        image.alt="";
        image.remove();
    });
});

const P3 = document.getElementById("3");
P3.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="goose.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        image.src="";
        image.alt="";
        image.remove();
    });
});

const P4 = document.getElementById("4");
P4.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="小烏來瀑布.JPG";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        image.src="";
        image.alt="";
        image.remove();
    });
});

const P5 = document.getElementById("5");
P5.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="大溪老街.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        image.src="";
        image.alt="";
        image.remove();
    });
});