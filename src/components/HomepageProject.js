export default function HomepageProject(props) {

    const projectBackgroundImage = props.projectBackgroundImage;
    const projectName = props.projectName;
    const projectYear = props.projectYear;

    return (
      <>
        <div className={"homepage-project"} style={{background:`url(${projectBackgroundImage})`}}>
            <p className={"homepage-project-name"}>{projectName}</p>
            <p className={"homepage-project-year"}>{projectYear}</p>
        </div>
      </>
    );

}