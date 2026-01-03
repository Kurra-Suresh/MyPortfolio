function ProjectCard({ title, description, features, tech, github, demo }) {
 return (
<div className="card">
<h3>{title}</h3>
<p>{description}</p>
<ul>
       {features.map((item, index) => (
<li key={index}>{item}</li>
       ))}
</ul>
<small>{tech}</small>
<div style={{ marginTop: "20px" }}>
<a href={github} target="_blank" rel="noopener noreferrer" className="button">
         GitHub
</a>
<a
         href={demo}
         target="_blank"
         rel="noopener noreferrer"
         className="button"
         style={{ marginLeft: "12px" }}
>
         Live Demo
</a>
</div>
</div>
 );
}
export default ProjectCard;