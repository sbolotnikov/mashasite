// GLOBAL VARIABLES
var totalPictures = 39;
var totalArtworks=16;
var emailToSend="sergey@time-dance.com";
// ----------------------------------------------

const images = [
    "assets/images/artworks/gallery1.webp",
    "assets/images/artworks/gallery2.webp",
    "assets/images/artworks/gallery3.webp"
    
    // "439746.jpg",
];
// const images = [
//     "../assets/images/artworks/gallery1.webp",
//     "../assets/images/artworks/gallery2.webp",
//     "../assets/images/artworks/gallery3.webp",
// ];
// content setup
const texts = [
    ["Saturn", "ink, pencils, acryl and crystals on paper"],
    ["Flower Fairies", "Ink, colored pencils, acryl, crystals on paper."],
    ["Lady of Marshland", "for sale! 270 euro, free delivery. watercolor on paper"],
]

rgbKineticSlider = new rgbKineticSlider({

    slideImages: images, // array of images > must be 1920 x 1080
    itemsTitles: texts, // array of titles / subtitles

    backgroundDisplacementSprite: 'map-3.jpg', // slide displacement image 
    cursorDisplacementSprite: 'displace-circle.png', // cursor displacement image

    cursorImgEffect : true, // enable cursor effect
    cursorTextEffect : false, // enable cursor text effect
    cursorScaleIntensity : 0.65, // cursor effect intensity
    cursorMomentum : 0.14, // lower is slower

    swipe: true, // enable swipe
    swipeDistance : window.innerWidth * 0.4, // swipe distance - ex : 580
    swipeScaleIntensity: 2, // scale intensity during swipping

    slideTransitionDuration : 1, // transition duration
    transitionScaleIntensity : 30, // scale intensity during transition
    transitionScaleAmplitude : 160, // scale amplitude during transition

    nav: true, // enable navigation
    navElement: '.main-nav', // set nav class
    
    imagesRgbEffect : false, // enable img rgb effect
    imagesRgbIntensity : 0.9, // set img rgb intensity
    navImagesRgbIntensity : 80, // set img rgb intensity for regular nav 

    textsDisplay : true, // show title
    textsSubTitleDisplay : true, // show subtitles
    textsTiltEffect : true, // enable text tilt
    googleFonts :['brandongrotesque:900', 'brandongrotesque:800'],  //select google font to use
    buttonMode : false, // enable button mode for title
    textsRgbEffect : true, // enable text rgb effect
    textsRgbIntensity : 0.03, // set text rgb intensity
    navTextsRgbIntensity : 15, // set text rgb intensity for regular nav

    textTitleColor : 'white', // title color
    textTitleSize : 85, // title size
    mobileTextTitleSize : 50, // title size
    textTitleLetterspacing : 3, // title letterspacing

    textSubTitleColor : 'white', // subtitle color ex : 0x000000
    textSubTitleSize : 15, // subtitle size
    mobileTextSubTitleSize : 12, // mobile subtitle size
    textSubTitleLetterspacing : 2, // subtitle letter spacing
    textSubTitleOffsetTop : 200, // subtitle offset top
    mobileTextSubTitleOffsetTop : 200, // mobile subtitle offset top
});



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
    document.getElementById('sendto').defaultValue=emailToSend;
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
        childImg.classList.add('gallery-image');
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


