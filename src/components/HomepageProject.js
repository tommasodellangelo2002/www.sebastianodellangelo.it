import { useNavigate } from "react-router-dom";

export default function HomepageProject(props) {

    const navigate = useNavigate();

    const projectBackgroundImage = props.projectBackgroundImage;
    const projectName = props.projectName;
    const projectYear = props.projectYear;
    const projectPageRoute = props.projectPageRoute;

    return (
        <div onClick={() => navigate(projectPageRoute)} className={"homepage-project"}
             style={{background: `url(${projectBackgroundImage})`}}>
            <p className={"homepage-project-name"}>{projectName}</p>
            <p className={"homepage-project-year"}>{projectYear}</p>
        </div>
    );

}