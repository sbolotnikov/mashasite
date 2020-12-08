var totalPictures = 39
var animationArray=[['slower',''],['faster', ''],['slower', 'vertical'],['slower', 'slower-down'],['',''],['slower',''],['faster1',''],['slower', 'slower1'],['',''],['slower', 'slower1'],['faster1','']]
$(document).ready(function () {
    // console.log(doesFileExist("/assets/images/gallery1.webp"))
    let childDiv,childImg;
    let node = document.querySelector('.horizontal-scroll');
    for (let i = 1; i <= totalPictures; i++) {
        childDiv = document.createElement("div");
        childDiv.classList.add('image-wrapper');
        if (animationArray[(i-1)%11][0]!=='') childDiv.classList.add(animationArray[(i-1)%11][0]);
        if (animationArray[(i-1)%11][1]!=='') childDiv.classList.add(animationArray[(i-1)%11][1]);
        childImg=document.createElement('img');
        childImg.src = `assets/images/gallery${i}.webp`;
        childImg.alt = `gallery image number${i}`;
        childDiv.appendChild(childImg);
        console.log(childDiv)
        node.appendChild(childDiv)
    }
    childDiv.classList.add("last");
    console.log(document.querySelector('horizontal-scroll'))
});
// function doesFileExist(urlToFile) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('HEAD', urlToFile, false);
//     xhr.send();

//     if (xhr.status == "404") {
//         return false;
//     } else {
//         return true;
//     }
// }

function changebutton() {
    console.log("clicked");
    console.log(document.querySelector("#bars").style.opacity);
    if ((document.querySelector("#bars").style.opacity === "1") || (!document.querySelector("#bars").style.opacity)) {
        document.querySelector("#bars").classList.add("defaultHide");
        document.querySelector("#bars").style.opacity = "0";
        document.querySelector("#closeX").classList.add("hoverShow");
        document.querySelector("#closeX").style.opacity = "1";
        document.querySelector("#brand").style.display = "none";
    }
    else {
        document.querySelector("#bars").classList.remove("defaultHide");
        document.querySelector("#closeX").classList.remove("hoverShow");
        document.querySelector("#closeX").style.opacity = "0";
        document.querySelector("#bars").style.opacity = "1";
        document.querySelector("#brand").style.display = "block";

    }

}
let hight = window.innerHeight;
let width = window.innerWidth;
