import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name)
const technoList = technologies.map(tech=>{
  return <span key={tech}>{tech}</span>
})


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technoList}
      </div>
    </div>
  );
}

export default ProjectItem;
