// GLOBAL VARIABLES
var totalPictures = 39;
var totalArtworks = 16;
var emailToSend = "sergey@time-dance.com";
// ----------------------------------------------

var texts1 = [
    ["Saturn", "ink, pencils, acryl and crystals on paper"],
    ["Flower Fairies", "Ink, colored pencils, acryl, crystals on paper."],
    ["Lady of Marshland", "for sale! 270 euro, free delivery. watercolor on paper"],
    ["Lady of Marshland", "watercolor on paper"],
    ["Tamerlan", "For sale! 200euro, free delivery"],
    ["Fae. Original for sale!", "50 euro, free delivery. Colored pencils on paper"],
    ["Summer day. Original for sale!", "120 euro, free delivery. watercolor on paper"],
    ["Diving with mermaids", "Digital art"],
    [`"She was a catch" Original for sale! 200 euro`, "Free delivery! ink, colored pencils, acryl and crystals on paper"],
    ["Spring", "Digital art"],
    ["in China", "oil on canvas"],
    ["Western wind", " "],
    ["Spring evening. For sale! 350 euro", "Free delivery. Watercolor and pencils on paper"],
    ["The Star", "ink, colored pencils, acryl and crystals in paper"],
    ["Gethsemane Garden.", "oil on canvas"],
    ["Sarah Jane", " "]
];

var blog = [
    ["WORKING AT LOXODROM, BERLIN", "", "I'm working at Loxodrom Tattoo Studio in Berlin most of the time. Please contact me via Facebook, Instagram, this site or by making appointment in Loxodrom directly."],
    ["ORIGINAL ART WORKS FOR SALE!", "<a href='https://www.etsy.com/shop/MariaKorolevaArt?ref=seller-platform-mcnav'>Etsy store</a>", "I would like to offer some of my original paintings and drawings for sale. You can find them all with the prices in the Art Gallery. Also you can order original art prints from my <a href='https://malimalia.bigcartel.com'>malimalia.bigcartel.com</a>"],
    ["GUEST SPOT IN ANDY'S BODY ELECTRIC TATTOO", "", "I will be working as a guest artist in <a href='https://www.andysbodyelectric.de'>Andy's Body Electric Tattoo</a>. In Willich. For any inquiries please contact the studio."]
];


var texts = [];
var images = [];
var animationArray = [['slower', ''], ['faster', ''], ['slower', 'vertical'], ['slower', 'slower-down'], ['', ''], ['slower', ''], ['faster1', ''], ['slower', 'slower1'], ['', ''], ['slower', 'slower1'], ['faster1', '']]
var windWidth = window.innerWidth;
var windHeight = window.innerHeight;

function startHtml() {

    
    var ua = navigator.userAgent;
    var proportion=.4;

    fillBlog();
    if (( navigator.userAgent.match(/Android/i)) && ( navigator.userAgent.match(/Chrome/i))) {
        fillGallery("tatoos", totalPictures, 2);
    } else {
        console.log(ua)
        rw=fillGallery("tatoos", totalPictures, 1);

     
        var cssAnimation = document.createElement('style');
        console.log(.65*window.innerHeight)
        console.log(rw*.65*window.innerHeight-window.innerWidth)
        var rules = document.createTextNode(`@-webkit-keyframes scroll {0% {transform: translateX(0px);} 100% {transform: translateX(-${(rw*.65*window.innerHeight/2-window.innerWidth*.96)}px);}}`);
        cssAnimation.appendChild(rules);
        document.getElementsByTagName("head")[0].appendChild(cssAnimation);

    }
    fillGallery("artworks", totalArtworks, 0);
    if (windWidth <= 768) {
        document.querySelector("#toggledMenu").style.display = "none";
        document.querySelector("#closeX").style.opacity = "0";
        document.querySelector("#bars").style.opacity = "1";
        document.querySelector("#brandA").style.opacity = "1";
    } else {
        document.querySelector("#closeX").style.opacity = "0";
        document.querySelector("#bars").style.opacity = "0";
        document.querySelector("#brandA").style.opacity = "1";
    }
    document.getElementById('sendto').defaultValue = emailToSend;

    // window.scrollTo(0,0);
    if (windWidth <= 768)  proportion=.6;
    document.querySelector("#brand").style.width=`${(proportion-.2)*100}vw`;
    var hHeader=document.querySelector("#header1").offsetHeight;
    // console.log("header height");
    // console.log(hHeader);
    document.querySelector("#logoStart").style.width=`${proportion*100}vw`;
    document.querySelector("#logoStart").style.left=`${Math.floor(windWidth*(1-proportion)/2-10)}px`;
    document.querySelector("#logoStart").style.top=`${-Math.floor(windHeight/2+hHeader-(windWidth*proportion/461*311)/2)}px`;
    
    gsap.timeline({delay:7})
    .to("#text1", {duration:.1,x:-300,opacity:0})
    .to("#text1", {duration:1,ease:'ease',x:0, opacity:1})
    
// wings flap
    gsap.timeline({repeat:-1, delay:10})
    .to("#leftWing", {duration:.5,transformOrigin:"0% 80%",rotate:-9,ease: "back"})
    .to("#leftWing", {duration:.5,transformOrigin:"0% 80%",rotate:0,ease: "back"})

    gsap.timeline({repeat:-1, delay:10})
    .to("#rightWing", {duration:.5,transformOrigin:"100% 80%",rotate:9,ease: "back"})
    .to("#rightWing", {duration:.5,transformOrigin:"100% 80%",rotate:0,ease: "back"})
// crown moves
    gsap.timeline({repeat:-1, delay:10})
    .to("#crown", {duration:.8,transformOrigin:"50% 100%",rotate:3,ease: "back"})
    .to("#crown", {duration:.8,transformOrigin:"50% 100%",rotate:-3,ease: "back"})
// text swings
    gsap.timeline({repeat:-1, delay:10})
    .to("#text1", {duration:1,transformOrigin:"center top",rotate:1.5,ease: "back"})
    .to("#text1", {duration:1,transformOrigin:"center top",rotate:-1.5,ease: "back"})


    gsap.timeline({ delay:10}) 
    .to("#logoStart", {duration:3,scale:.4,y:-Math.floor(windHeight/2+hHeader-(windWidth*proportion/461*311)/2)})
    .to("#logoStart", {duration:2,rotationY:360,transformOrigin:"50% 50%",opacity:0})
    gsap.timeline({ delay:12}).to("header",{duration:2,opacity:1})
    gsap.timeline({ delay:12}).to("#mainSite",{duration:3,opacity:1})

    // console.log('#earRing1 ', document.querySelector('#earRing1').getTotalLength())
    // console.log('#earRing2 ', document.querySelector('#earRing2').getTotalLength()) 
    // console.log('#mouth ', document.querySelector('#mouth').getTotalLength())
    // console.log('#nose ', document.querySelector('#nose').getTotalLength()) 
    // console.log('#nose1 ', document.querySelector('#nose1').getTotalLength()) 
    // console.log('#rightPuple ', document.querySelector('#rightPuple').getTotalLength())
    // console.log('#rightEye ', document.querySelector('#rightEye').getTotalLength())
    // console.log('#leftPuple ', document.querySelector('#leftPuple').getTotalLength()) 
    // console.log('#leftEye ', document.querySelector('#leftEye').getTotalLength()) 
    // console.log('#hair ', document.querySelector('#hair').getTotalLength())
    // console.log('#hair1 ', document.querySelector('#hair1').getTotalLength())
    // console.log('#face ', document.querySelector('#face').getTotalLength())
    // console.log('#hair2 ', document.querySelector('#hair2').getTotalLength())
    // console.log('#hair3 ', document.querySelector('#hair3').getTotalLength())
    // console.log('#hair4 ', document.querySelector('#hair4').getTotalLength())
    // console.log('#hair5 ', document.querySelector('#hair5').getTotalLength())
};
function fillBlog() {
    let parentElement = document.querySelector('#blog');
    parentElement.innerHTML = "";
    let parentBl, childBlog, childDiv, subDiv, spanDiv, childImg;
    for (let i = 0; i < blog.length; i++) {
        childBlog = document.createElement("div");
        childBlog.classList.add('tile');
        childImg = document.createElement('img');
        childImg.src = `assets/images/news/image${i + 1}.webp`;
        childImg.alt = `blog image number ${i + 1}`;
        childBlog.appendChild(childImg);
        childDiv = document.createElement("div");
        childDiv.classList.add('text');
        subDiv = document.createElement("h1");
        subDiv.innerHTML = blog[i][0];
        childDiv.appendChild(subDiv);
        subDiv = document.createElement("h2");
        subDiv.classList.add('animate-text');
        subDiv.innerHTML = blog[i][1];
        childDiv.appendChild(subDiv);
        subDiv = document.createElement("p");
        subDiv.classList.add('animate-text');
        subDiv.innerHTML = blog[i][2];
        childDiv.appendChild(subDiv);
        subDiv = document.createElement("div");
        subDiv.classList.add('dots');
        spanDiv = document.createElement("span");
        subDiv.appendChild(spanDiv);
        subDiv.appendChild(spanDiv);
        subDiv.appendChild(spanDiv);
        childDiv.appendChild(subDiv);
        childBlog.appendChild(childDiv);
        parentElement.appendChild(childBlog);
    }

}

function fillGallery(name, picTotal, animateOrigin) {
    let childDiv, childImg;
    let node = document.querySelector('#' + name + "Gallery");
    let relativeWidth=0;
    for (let i = 1; i <= picTotal; i++) {
        childDiv = document.createElement("div");
        childImg = document.createElement('img');
        if (animateOrigin === 1) {
            childImg.classList.add('gallery-image');
            childDiv.classList.add('image-wrapper');
            if (animationArray[(i - 1) % 11][0] !== '') childDiv.classList.add(animationArray[(i - 1) % 11][0]);
            if (animationArray[(i - 1) % 11][1] !== '') childDiv.classList.add(animationArray[(i - 1) % 11][1]);

        } 
        else if (animateOrigin===0){
            childDiv.classList.add('slide');
            childImg.classList.add('continue-scroll');

        }
        else if (animateOrigin===2){
            childDiv.classList.add('slide');
        }
        childImg.src = `assets/images/${name}/gallery${i}.webp`;
        childImg.alt = `gallery image number${i}`;
        // childImg.loading = 'lazy';
        childImg.setAttribute("onclick", `callModal('${name}/gallery',${i},${picTotal})`);
        childDiv.appendChild(childImg);
        relativeWidth+=childImg.width/childImg.height;
        node.appendChild(childDiv)
    }
    if (animateOrigin === 1) {
        childDiv.classList.add("last");
    }
    if (animateOrigin === 2) {
        node.classList.remove("horizontal-scroll");
        node.classList.add("carousel");
    }
    return relativeWidth;
}
function removeAnime(event) {
    // event.preventDefault();
    // let node=event.target.firstChild;
    // node.firstChild.classList.remove("continue-scroll");
    // let node1=node.nextSibling;
    // let i=1;
    // while ((node1!==null)&&(i<40)){
    //     node1.firstChild.classList.remove("continue-scroll");
    //     node1=node.nextSibling;
    //     console.log(i++)
    // }
    // .forEach(function(el){el.firstElementChild.classList.remove("continue-scroll")});

    // anim.classList.remove("continue-scroll");
}
function emailSend(event) {
    event.preventDefault();
    let subject = "Form submission";
    let subject2 = "Copy of your form submission";
    let first_name = document.getElementById("first-name").value;
    let last_name = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    message = `${first_name}  ${last_name} Address: ${address} \n Phone: ${phone} /\n/ wrote the following: \n\n ${message}`;
    let message2 = `Here is a copy of your message  ${first_name} \n \n ${message}`
    let mailto_link = 'mailto:' + emailToSend + '?subject=' + subject + '&body=' + message;
    let mailto_link2 = 'mailto:' + email + '?subject=' + subject2 + '&body=' + message2;
    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) {
        console.log("sent email");
        win.close();
        win = window.open(mailto_link2, 'emailWindow');
        if (win && win.open && !win.closed) { console.log("sent second email"); win.close(); }
    }
    location.reload();






}

function callModal(imgURL, num, total) {
    // let fileName='assets/images/'+imgURL+num+'.webp';
    // if ((num>0)&&(num<=total)){
    //     let image1=document.querySelector('#modalIMG');
    // image1.src=fileName;
    // let imgHeight=image1.naturalHeight;
    // let imgWidth=image1.naturalWidth;
    // if (((windWidth>=windHeight)&&(imgWidth<=imgHeight))||(((windWidth>=windHeight)&&(imgWidth>imgHeight))&&(windHeight/windWidth>imgHeight/imgWidth))
    // ||(((windWidth<windHeight)&&(imgWidth<imgHeight))&&(windHeight/windWidth<imgHeight/imgWidth))){
    //     image1.style.height=Math.floor(windHeight*.9)+'px';
    //     image1.style.width='auto';
    // }else{
    //     image1.style.width=Math.floor(windWidth*.9)+'px';
    //     image1.style.height='auto';
    // }
    // document.querySelector('#nextBnt').setAttribute("onclick",`callModal('${imgURL}',${num+1},${total})`);
    // document.querySelector('#prevBnt').setAttribute("onclick",`callModal('${imgURL}',${num-1},${total})`);
    images = [];
    texts = [];
    for (let i = num; i <= total; i++) {
        images.push('assets/images/' + imgURL + i + '.webp');
        if (imgURL === 'artworks/gallery') {
            texts.push(texts1[i - 1]);
        }
    }
    for (i = 1; i < num; i++) {
        images.push('assets/images/' + imgURL + i + '.webp');
        if (imgURL === 'artworks/gallery') {
            texts.push(texts1[i - 1]);
        }
    }
    rgbKineticSlider = new rgbKineticSlider({

        slideImages: images, // array of images > must be 1920 x 1080
        itemsTitles: texts, // array of titles / subtitles

        backgroundDisplacementSprite: 'map-3.jpg', // slide displacement image 
        cursorDisplacementSprite: 'displace-circle.png', // cursor displacement image

        cursorImgEffect: true, // enable cursor effect
        cursorTextEffect: false, // enable cursor text effect
        cursorScaleIntensity: 0.65, // cursor effect intensity
        cursorMomentum: 0.14, // lower is slower

        swipe: true, // enable swipe
        swipeDistance: window.innerWidth * 0.4, // swipe distance - ex : 580
        swipeScaleIntensity: 2, // scale intensity during swipping

        slideTransitionDuration: 1, // transition duration
        transitionScaleIntensity: 30, // scale intensity during transition
        transitionScaleAmplitude: 160, // scale amplitude during transition

        nav: true, // enable navigation
        navElement: '.main-nav', // set nav class

        imagesRgbEffect: false, // enable img rgb effect
        imagesRgbIntensity: 0.9, // set img rgb intensity
        navImagesRgbIntensity: 80, // set img rgb intensity for regular nav 

        textsDisplay: true, // show title
        textsSubTitleDisplay: true, // show subtitles
        textsTiltEffect: true, // enable text tilt
        googleFonts: ['Josefin Sans:400', 'Josefin Sans:200'],  //select google font to use
        buttonMode: true, // enable button mode for title
        textsRgbEffect: true, // enable text rgb effect
        textsRgbIntensity: 0.1, // set text rgb intensity
        navTextsRgbIntensity: 15, // set text rgb intensity for regular nav

        textTitleColor: 'white', // title color
        textTitleSize: 45, // title size
        mobileTextTitleSize: 50, // title size
        textTitleLetterspacing: 2, // title letterspacing

        textSubTitleColor: 'white', // subtitle color ex : 0x000000
        textSubTitleSize: 35, // subtitle size
        mobileTextSubTitleSize: 30, // mobile subtitle size
        textSubTitleLetterspacing: 2, // subtitle letter spacing
        textSubTitleOffsetTop: 300, // subtitle offset top
        mobileTextSubTitleOffsetTop: 300, // mobile subtitle offset top
    });
    $('#myModal').modal('show');
    // }
}

function changebutton() {
    // ≥768px
    if (windWidth > 768) {

        document.querySelector("#closeX").style.opacity = "0";
        document.querySelector("#bars").style.opacity = "0";
        document.querySelector("#brandA").style.opacity = "1";
    }
    else {
        if (document.querySelector("#bars").style.opacity === "1") {
            document.querySelector("#bars").classList.add("defaultHide");
            document.querySelector("#bars").style.opacity = "0";
            document.querySelector("#closeX").classList.add("hoverShow");
            document.querySelector("#closeX").style.opacity = "1";
            document.querySelector("#brandA").style.display = "none";
            document.querySelector("#toggledMenu").style.display = "block";

        }
        else {
            document.querySelector("#bars").classList.remove("defaultHide");
            document.querySelector("#closeX").classList.remove("hoverShow");
            document.querySelector("#closeX").style.opacity = "0";
            document.querySelector("#bars").style.opacity = "1";
            document.querySelector("#brandA").style.display = "block";
            document.querySelector("#toggledMenu").style.display = "none";
        }
    }
}



