var totalPictures = 39;
var totalArtworks=16;
var animationArray=[['slower',''],['faster', ''],['slower', 'vertical'],['slower', 'slower-down'],['',''],['slower',''],['faster1',''],['slower', 'slower1'],['',''],['slower', 'slower1'],['faster1','']]
var windWidth = window.innerWidth;
var windHeight = window.innerHeight;
function startHtml() {
    fillGallery("tatoos",totalPictures);
    fillGallery("artworks",totalArtworks);
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
function fillGallery(name,picTotal){
    let childDiv,childImg;
    let node = document.querySelector('#'+name+"Gallery");
    for (let i = 1; i <= picTotal; i++) {
        childDiv = document.createElement("div");
        childDiv.classList.add('image-wrapper');
        if (animationArray[(i-1)%11][0]!=='') childDiv.classList.add(animationArray[(i-1)%11][0]);
        if (animationArray[(i-1)%11][1]!=='') childDiv.classList.add(animationArray[(i-1)%11][1]);
        childImg=document.createElement('img');
        childImg.src = `assets/images/${name}/gallery${i}.webp`;
        childImg.alt = `gallery image number${i}`;
        childImg.loading='lazy';
        childImg.setAttribute("onclick",`callModal('${name}/gallery',${i},${picTotal})`);
        // childImg.setAttribute("data-target","#myModal")
        childDiv.appendChild(childImg);
        node.appendChild(childDiv)
    }
    childDiv.classList.add("last");


}
function callModal(imgURL,num,total){
    let fileName='assets/images/'+imgURL+num+'.webp';
  
    if ((num>0)&&(num<=total)){
        let image1=document.querySelector('#modalIMG');
    image1.src=fileName;
    let imgHeight=image1.naturalHeight;
    let imgWidth=image1.naturalWidth;
    console.log(imgHeight, imgWidth)
    if (((windWidth>=windHeight)&&(imgWidth<=imgHeight))||(((windWidth>=windHeight)&&(imgWidth>imgHeight))&&(windHeight/windWidth>imgHeight/imgWidth))
    ||(((windWidth<windHeight)&&(imgWidth<imgHeight))&&(windHeight/windWidth<imgHeight/imgWidth))){
        image1.style.height=Math.floor(windHeight*.9)+'px';
        image1.style.width='auto';
    }else{
        image1.style.width=Math.floor(windWidth*.9)+'px';
        image1.style.height='auto';
    }
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


