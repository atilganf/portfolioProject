function displaynav(){
    var menu = document.querySelector("nav");
    if(menu.style.height == "0px"){
        menu.style.height = "340px";
    }else{
        menu.style.height = "0px";
    }

}