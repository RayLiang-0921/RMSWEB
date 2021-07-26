const ul_1 = document.querySelector(".option1");
var li_1 =document.getElementById("c1");
var li_2 =document.getElementById("c2");
var li_3 =document.getElementById("c3");
var li_4 =document.getElementById("c4");
var li_5 =document.getElementById("c5");
var li_6 =document.getElementById("c6");
var change=document.getElementById("change");
var twist=document.getElementById("twist");
const survey = document.querySelector(".survey");
const end = document.querySelector(".end");
li_1.addEventListener("click", function(){
    change.innerText=("\nPingtung \n");
    change.className="ans";
    change.href=("https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%B1%8F%E6%9D%B1/int_%E5%B1%8F%E6%9D%B1.html");
    var a = document.createElement("img");
    a.src="Pingtung.jpg";
    a.className="image";
    a.id="1";
    twist.appendChild(a);
    const P1 = document.getElementById("1");
    P1.addEventListener("click", function(){
        const image=document.createElement("img");
        image.src =a.src;
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
    ul_1.remove();
    end.style.display="block";
});
li_2.addEventListener("click", function(){
    change.innerText=("\nTaipei \n");
    change.className="ans";
    change.href=("https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%8C%97%E5%8C%97%E5%9F%BA/%E5%8C%97%E5%8C%97%E5%9F%BA.html");
    var a = document.createElement("img");
    a.src="Keelung,New Taipei,Taipei.jpg";
    a.className="image";
    a.id="1";
    twist.appendChild(a);
    const P1 = document.getElementById("1");
    P1.addEventListener("click", function(){
        const image=document.createElement("img");
        image.src =a.src;
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
    ul_1.remove();
    end.style.display="block";
});
li_3.addEventListener("click", function(){
    change.innerText=("\nHualien \n");
    change.className="ans";
    change.href=("https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E8%8A%B1%E8%93%AE/int_%E8%8A%B1%E8%93%AE.html");
    var a = document.createElement("img");
    a.className="image";
    a.src="Hualien.jpg";
    a.id="1";
    twist.appendChild(a);
    const P1 = document.getElementById("1");
    P1.addEventListener("click", function(){
        const image=document.createElement("img");
        image.src =a.src;
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
    ul_1.remove();
    end.style.display="block";
});
li_4.addEventListener("click", function(){
    change.innerText=("\nNantou \n");
    change.className="ans";
    change.href=("https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%8D%97%E6%8A%95/int_%E5%8D%97%E6%8A%95.html");
    var a = document.createElement("img");
    a.className="image";
    a.src="Nantou.jpg";
    a.id="1";
    twist.appendChild(a);
    const P1 = document.getElementById("1");
    P1.addEventListener("click", function(){
        const image=document.createElement("img");
        image.src =a.src;
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
    ul_1.remove();
    end.style.display="block";
});
li_5.addEventListener("click", function(){
    change.innerText=("\nNew Taipei \n");
    change.className="ans";
    change.href=("https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%8C%97%E5%8C%97%E5%9F%BA/%E5%8C%97%E5%8C%97%E5%9F%BA.html");
    var a = document.createElement("img");
    a.className="image";
    a.src="Keelung,New Taipei,Taipei.jpg";
    a.id="1";
    twist.appendChild(a);
    const P1 = document.getElementById("1");
    P1.addEventListener("click", function(){
        const image=document.createElement("img");
        image.src =a.src;
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
    ul_1.remove();
    end.style.display="block";
});
li_6.addEventListener("click", function(){
    change.innerText=("\nTaipei \n");
    change.className="ans";
    change.href=("https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%8C%97%E5%8C%97%E5%9F%BA/%E5%8C%97%E5%8C%97%E5%9F%BA.html");
    var a = document.createElement("img");
    a.className="image";
    a.src="Keelung,New Taipei,Taipei.jpg";
    a.id="1";
    twist.appendChild(a);
    const P1 = document.getElementById("1");
    P1.addEventListener("click", function(){
        const image=document.createElement("img");
        image.src =a.src;
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
    ul_1.remove();
    end.style.display="block";
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
