const toggle = document.getElementById('menu-toggle');
if(toggle){
    toggle.addEventListener("change",() => {
        document.body.classList.toggle("no-scroll", toggle.checked);
    });
}

const words = ["Web Developer", "UI/UX Designer", "Coder"];

const typingtext = document.getElementById('typing-span');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if(!isDeleting){
        typingtext.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex == currentWord.length){
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        }else{
            setTimeout(type, typingDelay);
        }
    } else{
        typingtext.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if(charIndex == 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }else{
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if(words?.length) type();
})

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();

        navlinks.forEach((l)=>{
            if(l ===link){
                l.classList.add("active");
            }else{
                l.classList.remove("active");
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if(tab.id === tabName){
                tab.classList.add("active");
            }else{
                tab.classList.remove("active");
            }
        });

        if(tabName === "services"){
            const serviceList = [{
                id: 1,
                icon: "ph-code",
                text:"Web Development",
                para: "I Build responsive and modern websites using the latest technologies like HTML, CSS, Javascript, React.",
            },{
                id: 2,
                icon: "ph-paint-brush",
                text:"UI/UX Designer",
                para: "I design user-centric, visually appealing, and responsive UI/UX solutions that enhance usability, engagement, and overall digital experience.",
            }];
            const services = document.getElementsByClassName("service-List");
            
            const innerContent = serviceList.map((l) => {
                return `
                <div class="box" key =${l?.id}>
                   <div class="head-icons">
                    <i class="ph ${l?.icon}"></i>
                    <span><i class="ph ph-arrow-down-right"></i></span>
                   </div>
                   <h3>${l?.text}</h3>
                   <span class="spacer"></span>
                   <p>${l?.para}</p>
                </div>
                `;
        }).join("");

        Array.from(services).forEach((ele) => {
            ele.innerHTML = innerContent;
        });
        }

        toggle.checked = false;
    });
});
