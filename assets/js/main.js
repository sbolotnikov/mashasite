var totalPictures = 39
var animationArray=[['slower',''],['faster', ''],['slower', 'vertical'],['slower', 'slower-down'],['',''],['slower',''],['faster1',''],['slower', 'slower1'],['',''],['slower', 'slower1'],['faster1','']]
var windWidth = window.innerWidth;
function startHtml() {
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
        childImg.loading='lazy';
        childImg.setAttribute("onclick",`callModal('gallery',${i},${totalPictures})`);
        // childImg.setAttribute("data-target","#myModal")
        childDiv.appendChild(childImg);
        node.appendChild(childDiv)
    }
    childDiv.classList.add("last");
    if (windWidth<=768) {
        document.querySelector("#toggledMenu").style.display = "none";
        // document.querySelector("#closeX").style.opacity = "0";
        // document.querySelector("#bars").style.opacity = "1";
        // document.querySelector("#brand").style.opacity = "1";
    } else{
        document.querySelector("#closeX").style.opacity = "0";
        document.querySelector("#bars").style.opacity = "0";
        // document.querySelector("#toggledMenu").style.display = "block";
        // document.querySelector("#brand").style.opacity = "1";
    }
};
function callModal(imgURL,num,total){
    let fileName='assets/images/'+imgURL+num+'.webp';
  
    if ((num>0)&&(num<=total)){
    document.querySelector('#modalIMG').src=fileName;
    document.querySelector('#nextBnt').setAttribute("onclick",`callModal('${imgURL}',${num+1},${total})`);
    document.querySelector('#prevBnt').setAttribute("onclick",`callModal('${imgURL}',${num-1},${total})`);
    $('#myModal').modal('show');
    }
}

function changebutton() {
    // ≥768px
    if ((document.querySelector("#bars").style.opacity === "1") || (!document.querySelector("#bars").style.opacity)) {
        document.querySelector("#bars").classList.add("defaultHide");
        document.querySelector("#bars").style.opacity = "0";
        document.querySelector("#closeX").classList.add("hoverShow");
        document.querySelector("#closeX").style.opacity = "1";
        document.querySelector("#brand").style.opacity = "0";
        document.querySelector("#toggledMenu").style.display = "block";
        
    }
    else {
        document.querySelector("#bars").classList.remove("defaultHide");
        document.querySelector("#closeX").classList.remove("hoverShow");
        document.querySelector("#closeX").style.opacity = "0";
        document.querySelector("#bars").style.opacity = "1";
        document.querySelector("#brand").style.opacity = "1";
        document.querySelector("#toggledMenu").style.display = "none";
    }

}
let hight = window.innerHeight;

