const to_top= document.getElementById("to_top");
to_top.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
    });
}
);

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
    image.src ="澎湖.jpg";
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

const P1 = document.getElementById("1");
P1.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="澎湖.jpg";
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

const P1 = document.getElementById("1");
P1.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="澎湖.jpg";
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

const P1 = document.getElementById("1");
P1.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="澎湖.jpg";
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

const P1 = document.getElementById("1");
P1.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="澎湖.jpg";
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