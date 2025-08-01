const features = [
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Mobile App Development",
    description: "We build user-friendly mobile applications for both Android and iOS."
  },
  {
    icon: "fa-solid fa-earth-americas",
    title: "Website Development",
    description: "Custom websites built to ensure responsiveness and seamless user experiences."
  },
  {
    icon: "fa-solid fa-robot",
    title: "Natural Language Processing",
    description: "Appplications with the ability to understand human language through NLP models."
  },
  
  
  {
    icon: "fa-solid fa-display",
    title: "Desktop Applications",
    description: "Robust, cross-platform desktop software tailored to your business needs."
  },
  {
    icon: "fa-regular fa-image",
    title: "Image Processing",
    description: "Image analysis using the modern industry techniques."
  },
  {
  icon: "fa-solid fa-brain",
  title: "Machine Learning",
  description: "Advanced machine learning solutions to enhance your business intelligence."
}
];


    const container = document.getElementById("services");

    features.forEach((item) => {
      const col = document.createElement("div");
      col.className = "col-md-6"; // 3 columns per row on desktop

      col.innerHTML = `
        <div class="feature-card">
          <div class="feature-icon"><i class="${item.icon}"></i></div>
          <div class="feature-title">${item.title}</div>
          <div class="feature-desc">${item.description}</div>
        </div>
      `;

      container.appendChild(col);
    });
  