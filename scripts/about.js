const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });
        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section;
        const targetSection = document.getElementById(activeTab);
        if (targetSection) {
            targetSection.classList.add("active");
        }
    });
});