const stackData = [
  { tech_name: "HTML", icon_tech: "html.svg" },
  { tech_name: "CSS", icon_tech: "css.svg" },
  { tech_name: "Javascript", icon_tech: "javascript.svg" },
  { tech_name: "React JS", icon_tech: "react.svg" },
  { tech_name: "Node JS", icon_tech: "node_js.png" },
  { tech_name: "PHP", icon_tech: "php.png" },
  { tech_name: "Python", icon_tech: "python.svg" },
  { tech_name: "Java", icon_tech: "java.png" },
  { tech_name: "Kotlin", icon_tech: "kotlin.svg" },
  { tech_name: "Flutter", icon_tech: "flutter.svg" },
  { tech_name: "MySQL", icon_tech: "mysql.svg" },
  { tech_name: "Firebase", icon_tech: "firebase.png" },
  { tech_name: "MongoDB", icon_tech: "mongo.png" },
  { tech_name: "PostgreSQL", icon_tech: "postgresql.svg" },
  {tech_name:"C#",icon_tech:"Csharp.png"},


];

const container_tech = document.getElementById("tech-grid-container");

stackData.forEach(item => {
  const card = document.createElement("div");
  card.className = "icon-card shadow-sm";
  card.innerHTML = `
    <img src="${item.icon_tech}" alt="${item.tech_name}" />
    <small>${item.tech_name}</small>
  `;
  container_tech.appendChild(card);
});
