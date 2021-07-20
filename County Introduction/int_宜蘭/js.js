const to_top= document.getElementById("to_top");
to_top.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
    });
});

const navslide = ()=>{
    const NavBar = document.querySelector(".burger");
    const Navigation = document.querySelector(".pointer");
    NavBar.addEventListener("click", ()=>{
        Navigation.style.transform = "translateY(0%)";
    });
    Navigation.addEventListener("click",()=>{
        Navigation.style.transform = "translateY(-100%)";
    });
};

navslide();

const P1 = document.getElementById("1");
P1.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="宜蘭.jpg";
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
    image.src ="yashang.jpg";
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
    image.src ="蔥油餅.jpg";
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
    image.src ="烏石港.jpg";
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
    image.src ="礁溪溫泉.jpg";
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