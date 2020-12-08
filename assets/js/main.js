function changebutton(){
    console.log("clicked");
    console.log(document.querySelector("#bars").style.opacity);
    if ((document.querySelector("#bars").style.opacity==="1")||(!document.querySelector("#bars").style.opacity)){
        document.querySelector("#bars").classList.add("defaultHide");
        document.querySelector("#bars").style.opacity = "0";
        document.querySelector("#closeX").classList.add("hoverShow");
        document.querySelector("#closeX").style.opacity = "1";
        document.querySelector("#brand").style.display = "none";
    }
    else{
        document.querySelector("#bars").classList.remove("defaultHide");
        document.querySelector("#closeX").classList.remove("hoverShow");
        document.querySelector("#closeX").style.opacity = "0";
        document.querySelector("#bars").style.opacity = "1";
        document.querySelector("#brand").style.display = "block";
        
    }

}
let hight = window.innerHeight;
let width = window.innerWidth;