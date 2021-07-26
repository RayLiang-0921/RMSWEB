//survey
const county1 =["Keelung,New Taipei,Taipei","Taoyuan","Taichung","Hsinchu","Tainan","Kaohsiung","Nantou","Yunlin",
"Chiayi","Pingtung","Hualien","Taitung","Yilan","Changhua","Miaoli","Penghu","Kinmen","Matsu"];
const ul_1 = document.querySelector(".q1");
const ul_2 = document.querySelector(".q2");
const ul_3 = document.querySelector(".q3");
var li_1 =document.getElementById("c1");
var li_2 =document.getElementById("c2");
var li_3 =document.getElementById("c3");
var li_4 =document.getElementById("c4");
var li_5 =document.getElementById("c5");
var li_6 =document.getElementById("c6");
const survey = document.querySelector(".survey");
const end = document.querySelector(".end");
const point = document.querySelector("#point");
// first q
li_1.addEventListener("click",function(){
    q1.remove()
    q2.style.display="block";
});
li_2.addEventListener("click",function(){
    q1.remove()
    q2.style.display="block";
});
// second
li_3.addEventListener("click",function(){
    q2.remove();
    q3.style.display="block";
});
li_4.addEventListener("click",function(){
    q2.remove();
    q3.style.display="block";
});
// third
li_5.addEventListener("click",function(){
    q3.remove();
    end.style.display="block";
});
li_6.addEventListener("click",function(){
    q3.remove();
    end.style.display="block";
});
//q1
const select = function(){
    county1.forEach((i)=>{
        const a=document.createElement("a");
        const b=document.createElement("img");
        b.className="image";
        a.className="ans";
        a.style.textDecoration="none";
        a.style.textDecorationColor="white";
        a.innerText="\n"+ i +" \n";
        b.src= i +'.jpg';
        if(i=="Taoyuan"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%8C%97%E5%8C%97%E5%9F%BA/%E5%8C%97%E5%8C%97%E5%9F%BA.html";
        };
        if(i=="Keelung,New Taipei,Taipei"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E6%A1%83%E5%9C%92/int_%E6%A1%83%E5%9C%92.html";
        };
        if(i=="Taichung"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%8F%B0%E4%B8%AD/int_%E5%8F%B0%E4%B8%AD.html";
        };
        if(i=="Hsinchu"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E6%96%B0%E7%AB%B9/int_%E6%96%B0%E7%AB%B9.html";
        };
        if(i=="Tainan"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%8F%B0%E5%8D%97/int_%E5%8F%B0%E5%8D%97.html";
        };
        if(i=="Kaohsiung"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E9%AB%98%E9%9B%84/int_%E9%AB%98%E9%9B%84.html";
        };
        if(i=="Nantou"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%8D%97%E6%8A%95/int_%E5%8D%97%E6%8A%95.html";
        };
        if(i=="Yunlin"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E9%9B%B2%E6%9E%97/int_%E9%9B%B2%E6%9E%97.html";
        };
        if(i=="Chiayi"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%98%89%E7%BE%A9/int_%E5%98%89%E7%BE%A9.html";
        };
        if(i=="Pingtung"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%B1%8F%E6%9D%B1/int_%E5%B1%8F%E6%9D%B1.html";
        };
        if(i=="Hualien"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E8%8A%B1%E8%93%AE/int_%E8%8A%B1%E8%93%AE.html";
        };
        if(i=="Taitung"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%8F%B0%E6%9D%B1/int_%E5%8F%B0%E6%9D%B1.html";
        };
        if(i=="Yilan"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%AE%9C%E8%98%AD/int_%E5%AE%9C%E8%98%AD.html";
        };
        if(i=="Changhua"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E5%BD%B0%E5%8C%96/int_%E5%BD%B0%E5%8C%96.html";
        };
        if(i=="Miaoli"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E8%8B%97%E6%A0%97/int_%E8%8B%97%E6%A0%97.html";
        };
        if(i=="Penghu"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E6%BE%8E%E6%B9%96/int_%E6%BE%8E%E6%B9%96.html";
        };
        if(i=="Kinmen"){
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E9%87%91%E9%96%80/int_%E9%87%91%E9%96%80.html";
        };
        if(i=="Matsu") {
            a.href= "https://rayliang-0921.github.io/RMSWEB/County%20Introduction/int_%E9%A6%AC%E7%A5%96/int_%E9%A6%AC%E7%A5%96.html";
        };
        const seleted_Images = document.createElement("img");
        ////popup
        b.addEventListener("click", ()=>{
            point.style.transform = "translateY(0)";
            point.className="max";
            seleted_Images.src= i+".jpg";
            point.appendChild(seleted_Images);
            seleted_Images.addEventListener("click", ()=>{
                point.style.transform = "translateY(-100%)";
                setTimeout(()=>{
                    seleted_Images.src="";
                    seleted_Images.alt="";
                    seleted_Images.remove();
                },250);
            });
        });
        change.appendChild(a);
        change.appendChild(b);
    });
};
li_1.addEventListener("click", function(){
    county1.splice(6,17);
        li_3.addEventListener("click", function(){
            county1.splice(4,1);
            county1.splice(3,1);
            li_5.addEventListener("click", function(){
                county1.splice(1,1);
                county1.splice(2,1);
                select();
            });
            li_6.addEventListener("click", function(){
                county1.splice(0,1);
                county1.splice(1,1);
                select();
            });
        });
        li_4.addEventListener("click", function(){
            county1.splice(0,3);
            li_5.addEventListener("click", function(){
                county1.splice(0,2);
                select();
            });
            li_6.addEventListener("click", function(){
                county1.splice(2,1);
                select();
            });
        });
});
li_2.addEventListener("click", function(){
    county1.splice(0,5);
        li_3.addEventListener("click", function(){
            county1.splice(0,1);
            county1.splice(2,3);
            li_5.addEventListener("click", function(){
                county1.splice(1,2);
                county1.splice(2,3);
                select();
            });
            li_6.addEventListener("click", function(){
                county1.splice(0,1);
                county1.splice(1,1);
                select();
            });
        });

        li_4.addEventListener("click", function(){
            county1.splice(0,2);
            county1.splice(3,3);
            li_5.addEventListener("click", function(){
                county1.splice(0,5);
                document.getElementById("change").innerHTML=("They are all rural, sorry for not helping...");
                select();
            });
            li_6.addEventListener("click", function(){
                county1.splice(0,2);
                select();
            });
        });
});
//survey

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