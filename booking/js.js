import apikey from "./apikey";
const to_top= document.getElementById("to_top");
to_top.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
    });
}
);
const gallery = document.querySelector(".gallery");
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
////////////////////////////////
const GetData = async () => {
    fetch('https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos?hotel_id=363464', {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": apikey,
            "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com"
        }
    })
    .then(response =>(response.json()))
    .then(response => {
        console.log(response);
        for(i = 0; i < response.length; i++) {
            const image = response[i].mainUrl;
            const cell = document.createElement("div");
            cell.className = "cell";
            gallery.appendChild(cell);
            const HotelsName = document.createElement("a");
            cell.appendChild(HotelsName);
            const photo = document.createElement("img");
            cell.appendChild(photo);
            const PhoneNumber = document.createElement("div");
            PhoneNumber.innerText="123"
            cell.appendChild(PhoneNumber);
            const Discription = document.createElement("div");
            cell.appendChild(Discription);

        };

    })
    .catch(err => {
        console.error(err);
    });
};

GetData();
