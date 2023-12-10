const ProjectList = (projects) => {
  const date = projects.date;
  return (
    <>
      {date.map((project, index) => <img key={index} src={project.img}></img>)}
    </>
  )
}
export default ProjectList;