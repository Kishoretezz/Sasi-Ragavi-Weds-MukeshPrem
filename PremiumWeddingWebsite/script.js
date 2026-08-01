// ==============================
// AOS INITIALIZE
// ==============================

AOS.init({

    duration:1200,
    once:true

});




// ==============================
// LOADER
// ==============================

window.addEventListener("load",()=>{


    const loader=document.getElementById("loader");


    setTimeout(()=>{


        loader.style.opacity="0";
        loader.style.visibility="hidden";


    },1800);


});






// ==============================
// GSAP HERO ANIMATION
// ==============================


gsap.from(".hero-content",{

    opacity:0,
    y:100,
    duration:2,
    ease:"power3.out"

});


gsap.from(".hero-image",{

    scale:1.2,
    duration:3,
    ease:"power2.out"

});







// ==============================
// SWIPER GALLERY
// ==============================


const swiper = new Swiper(".mySwiper", {


    loop:true,


    autoplay:{


        delay:3000,
        disableOnInteraction:false


    },


    effect:"coverflow",


    grabCursor:true,


    centeredSlides:true,


    slidesPerView:1,


    coverflowEffect:{


        rotate:30,
        stretch:0,
        depth:150,
        modifier:1,
        slideShadows:true


    },


    pagination:{


        el:".swiper-pagination",
        clickable:true


    },


    navigation:{


        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"


    }



});







// ==============================
// COUNTDOWN
// ==============================


const weddingDate = new Date("August 23, 2026 10:00:00").getTime();



const timer = setInterval(()=>{


    let now = new Date().getTime();


    let distance = weddingDate-now;



    let days = Math.floor(
        distance/(1000*60*60*24)
    );


    let hours = Math.floor(
        (distance%(1000*60*60*24))
        /(1000*60*60)
    );


    let minutes = Math.floor(
        (distance%(1000*60*60))
        /(1000*60)
    );


    let seconds = Math.floor(
        (distance%(1000*60))
        /1000
    );



    document.getElementById("days").innerHTML=days;

    document.getElementById("hours").innerHTML=hours;

    document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;



    if(distance<0){


        clearInterval(timer);


        document.querySelector(".timer").innerHTML=
        "❤️ Today Is The Day ❤️";


    }



},1000);








// ==============================
// FLOWER PETALS
// ==============================


function createPetal(){


    const petal=document.createElement("div");


    petal.className="petal";


    petal.innerHTML="🌸";



    petal.style.left=
    Math.random()*100+"%";



    petal.style.fontSize=
    (Math.random()*15+15)+"px";



    petal.style.animationDuration=
    (Math.random()*5+5)+"s";



    document.body.appendChild(petal);



    setTimeout(()=>{


        petal.remove();


    },10000);


}



setInterval(createPetal,500);







// ==============================
// BACKGROUND MUSIC
// ==============================


const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");



let playing=false;



musicBtn.addEventListener("click",()=>{


    if(playing){


        music.pause();


        musicBtn.innerHTML="🎵";


        playing=false;


    }

    else{


        music.play();


        musicBtn.innerHTML="⏸️";


        playing=true;


    }


});







// ==============================
// SMOOTH SCROLL
// ==============================


document.querySelectorAll('a[href^="#"]').forEach(link=>{


    link.addEventListener("click",function(e){


        e.preventDefault();



        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({


            behavior:"smooth"


        });



    });


});

// ==============================
// OPEN INVITATION SCREEN & DIRECT SCROLL
// ==============================

window.addEventListener("load", () => {
    const openBtn = document.getElementById("openInvitation");
    const openingScreen = document.getElementById("opening-screen");
    const storySection = document.getElementById("story"); // Target the story section
    const music = document.getElementById("music");
    const musicBtn = document.getElementById("musicBtn");

    if (openBtn && openingScreen && storySection) {
        openBtn.addEventListener("click", () => {
            // 1. Enable page scrolling
            document.body.classList.add("invitation-open");

            // 2. Play background music
            if (music) {
                music.play().then(() => {
                    if (musicBtn) musicBtn.innerHTML = "⏸️";
                }).catch(err => console.log("Audio play blocked:", err));
            }

            // 3. Fade out the cover overlay
            openingScreen.style.transition = "opacity 0.8s ease, visibility 0.8s ease";
            openingScreen.style.opacity = "0";
            openingScreen.style.visibility = "hidden";

            // 4. Smoothly scroll directly past the hero image to the Love Story section
            setTimeout(() => {
                openingScreen.style.display = "none";
                storySection.scrollIntoView({ behavior: "smooth" });
            }, 600);
        });
    }
});