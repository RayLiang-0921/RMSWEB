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
    image.src ="keelung.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P2 = document.getElementById("2");
P2.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="TienPienTso.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P3 = document.getElementById("3");
P3.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="tuvzeTl.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P4 = document.getElementById("4");
P4.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="廟口.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P5 = document.getElementById("5");
P5.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="忘憂谷.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P6 = document.getElementById("6");
P6.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="海洋廣場.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P7 = document.getElementById("7");
P7.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="NTPC.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P8 = document.getElementById("8");
P8.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="鐵蛋.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P9 = document.getElementById("9");
P9.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="下載.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P10 = document.getElementById("10");
P10.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="九份.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P11 = document.getElementById("11");
P11.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="yehliu.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P12 = document.getElementById("12");
P12.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="Taipei.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P13 = document.getElementById("13");
P13.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="下載 (1).jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P14 = document.getElementById("14");
P14.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="Raohe.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P15 = document.getElementById("15");
P15.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="Beitou.jpg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

const P16 = document.getElementById("16");
P16.addEventListener("click", function(){
    const image=document.createElement("img");
    image.src ="taipei101.jpeg";
    image.className = "max";
    const b = document.getElementById("point");
    b.style.transform = "translateY(0%)";
    b.appendChild(image);
    image.addEventListener("click", function(){
        b.style.transform ="translateY(-100%)";
        setTimeout(()=>{
            image.src="";
            image.alt="";
            image.remove();
        },250);
    });
});

