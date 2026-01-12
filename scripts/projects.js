const projects = [
  {
    number: "01",
    title: "Panchakarma Therapy management app Design",
    description:
      "Built a connected Panchakarma therapy management system linking users, doctors, and chemists for streamlined treatment workflows, digital records, and medication support.",
    tech: ["Figma"],
    image: "Assests/projects/project 1.png",
    link: "https://www.behance.net/gallery/237266037/Panchakarma-Therapy-management-app"
  },
  {
    number: "02",
    title: "B2B E-Commerce Website",
    description:
      "Developed a scalable B2B website and App UI focused on streamlined user flows for product discovery, service booking, and seamless procurement, ensuring an intuitive and efficient experience for industrial clients.",
    tech: ["Figma"],
    image: "Assests/projects/project 3.png",
    link: "https://www.behance.net/gallery/237752263/B2B-E-Commerce-Complete-website-%28User-Admin%29-and-App"
  },
  {
    number: "03",
    title: "Chef Finding Website",
    description:
      "The Savoryn is a modern platform connecting users with skilled chefs across cuisines, designed in Figma with 10+ responsive screens, featuring clean visuals, easy filtering, and smooth navigation.",
    tech: ["Figma"],
    image: "Assests/projects/project 2.png",
    link: "https://www.behance.net/gallery/237269809/The-Savoryn-Chef-Findingwebsite"
  }
];

let currentIndex = 0;

// Elements
const projectNumber = document.querySelector(".project-info h3");
const projectTitle = document.querySelector(".project-info h4");
const projectDesc = document.querySelector(".project-info p");
const techStack = document.querySelector(".tech-stack");
const projectImage = document.querySelector(".carousel img");
const projectLink = document.querySelector(".links a");

const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

function updateButtons() {
  // First project
  if (currentIndex === 0) {
    prevBtn.classList.add("disabled-btn");
  } else {
    prevBtn.classList.remove("disabled-btn");
  }

  // Last project
  if (currentIndex === projects.length - 1) {
    nextBtn.classList.add("disabled-btn");
  } else {
    nextBtn.classList.remove("disabled-btn");
  }
}

function renderProject(index) {
  const project = projects[index];

  projectNumber.textContent = project.number;
  projectTitle.textContent = project.title;
  projectDesc.textContent = project.description;
  projectImage.src = project.image;
  projectLink.href = project.link;

  techStack.innerHTML = "";
  project.tech.forEach(t => {
    const span = document.createElement("span");
    span.textContent = t;
    techStack.appendChild(span);
  });

  updateButtons(); //  important
}

// Next
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < projects.length - 1) {
    currentIndex++;
    renderProject(currentIndex);
  }
});

// Previous
prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    currentIndex--;
    renderProject(currentIndex);
  }
});

// Initial load
renderProject(currentIndex);

