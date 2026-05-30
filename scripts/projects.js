const designProjects = [
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

const devProjects = [
  {
    number: "01",
    title: "Hirred - Job Platform",
    description:
      "Built a job platform with user and recruiter modules for job search, application tracking, and job posting.",
    tech: ["React.js", "Tailwind CSS", "Clerk", "Supabase"],
    image: "Assests/projects/project 4.png", // Using existing placeholder images
    githubLink: "https://github.com/kashish6398/Hirred",
    demoLink: "https://hirred-sepia.vercel.app/"
  },
  {
    number: "02",
    title: "Aura AI - Smart AI Directory",
    description:
      "Developed a full-stack directory with custom recommendation engine for AI tools. Implemented advanced dashboard layouts with Framer Motion for premium, high-performance user interactions.",
    tech: ["Next.js", "Node.js", "Typescript", "MongoDB", "Framer Motion"],
    image: "Assests/projects/project 5.png",
    githubLink: "https://github.com/kashish6398/aura-discover",
    demoLink: "https://aura-discover.vercel.app/"
  },
];

let currentDesignIndex = 0;
let currentDevIndex = 0;

// Design Elements
const designNumber = document.querySelector("#design-info h3");
const designTitle = document.querySelector("#design-info h4");
const designDesc = document.querySelector("#design-info p");
const designTechStack = document.querySelector("#design-tech");
const designImage = document.querySelector("#design-carousel img");
const designLink = document.querySelector("#design-links a");
const designPrevBtn = document.getElementById("design-previous");
const designNextBtn = document.getElementById("design-next");

// Development Elements
const devNumber = document.querySelector("#dev-info h3");
const devTitle = document.querySelector("#dev-info h4");
const devDesc = document.querySelector("#dev-info p");
const devTechStack = document.querySelector("#dev-tech");
const devImage = document.querySelector("#dev-carousel img");
const devGithubLink = document.querySelector("#dev-links .github-link");
const devDemoLink = document.querySelector("#dev-links .demo-link");
const devPrevBtn = document.getElementById("dev-previous");
const devNextBtn = document.getElementById("dev-next");

function updateDesignButtons() {
  if (currentDesignIndex === 0) designPrevBtn.classList.add("disabled-btn");
  else designPrevBtn.classList.remove("disabled-btn");

  if (currentDesignIndex === designProjects.length - 1) designNextBtn.classList.add("disabled-btn");
  else designNextBtn.classList.remove("disabled-btn");
}

function updateDevButtons() {
  if (currentDevIndex === 0) devPrevBtn.classList.add("disabled-btn");
  else devPrevBtn.classList.remove("disabled-btn");

  if (currentDevIndex === devProjects.length - 1) devNextBtn.classList.add("disabled-btn");
  else devNextBtn.classList.remove("disabled-btn");
}

function renderDesignProject(index) {
  const project = designProjects[index];
  designNumber.textContent = project.number;
  designTitle.textContent = project.title;
  designDesc.textContent = project.description;
  designImage.src = project.image;
  designLink.href = project.link;

  designTechStack.innerHTML = "";
  project.tech.forEach(t => {
    const span = document.createElement("span");
    span.textContent = t;
    designTechStack.appendChild(span);
  });

  updateDesignButtons();
}

function renderDevProject(index) {
  const project = devProjects[index];
  devNumber.textContent = project.number;
  devTitle.textContent = project.title;
  devDesc.textContent = project.description;
  devImage.src = project.image;
  devGithubLink.href = project.githubLink;
  devDemoLink.href = project.demoLink;

  devTechStack.innerHTML = "";
  project.tech.forEach(t => {
    const span = document.createElement("span");
    span.textContent = t;
    devTechStack.appendChild(span);
  });

  updateDevButtons();
}

// Design Listeners
designNextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentDesignIndex < designProjects.length - 1) {
    currentDesignIndex++;
    renderDesignProject(currentDesignIndex);
  }
});

designPrevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentDesignIndex > 0) {
    currentDesignIndex--;
    renderDesignProject(currentDesignIndex);
  }
});

// Dev Listeners
devNextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentDevIndex < devProjects.length - 1) {
    currentDevIndex++;
    renderDevProject(currentDevIndex);
  }
});

devPrevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentDevIndex > 0) {
    currentDevIndex--;
    renderDevProject(currentDevIndex);
  }
});

// Initial load
renderDesignProject(currentDesignIndex);
renderDevProject(currentDevIndex);
