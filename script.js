const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click",()=> {question.innerHTML = "Tadaaaaa,Ganteng Bett kann";
gif.src =
    "https://github.com/itsmeezi/its.git.hub.io/blob/main/_zyozyo-20221210-0001.jpg?raw=true";});

    noBtn.addEventListener("mouseover"), ()=>{
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const MaxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * MaxX);
        const randomY = Math.floor(Math.random() * MaxY);

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY +"px"
   }
