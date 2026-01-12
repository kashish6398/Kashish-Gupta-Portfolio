const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
    if(aboutTabs){
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab)=>{
    tab.addEventListener('click',(e)=>{
        e.preventDefault();

        aboutTabs.forEach((a)=>{
            a.classList.remove("active");
        });
        tab.classList.add("active");

        aboutContent.forEach((c)=>{
            c.classList.remove("active");
        });
        
        const activeTab = tab.dataset.section;
        document.getElementById(activeTab).classList.add("active");
        
        if(activeTab === "experience"){
            const experiences = document.querySelector(".experience-list");
            // const experienceList = [{
            //     id: 1,
            //     date: "December 2024 - Present",
            //     position: "UI/UX Designer",
            //     company: "Computer Society of India",
            //     details: " Led end-to-end UI/UX design for 3 major projects (including IRCTC), managing a 4-person team to deliver fully responsive interfaces that improved accessibility and user engagement.",
            // },{id: 2,
            //     date: "November 2025 - Present",
            //     position: "UI/UX Designer",
            //     company: "Aormify Area Pvt. Ltd.",
            //     details: "Spearheaded the UI redesign of the Aormify platform, creating high-fidelity prototypes and user flows that streamlined the PG flat booking process.",
            // },{id: 3,
            //     date: "May 2025 - September 2025",
            //     position: "UI/UX Designer",
            //     company: "Raj and Sons Proprietor firm",
            //     details: "Architected a B2B service platform in Figma, optimizing Information Architecture to reduce bounce rates and improve navigation efficiency for industrial clients.",
            // }];

            const experienceContent = experienceList.map((ele) => {
            return `

            `;
            });

        }
    });
});
