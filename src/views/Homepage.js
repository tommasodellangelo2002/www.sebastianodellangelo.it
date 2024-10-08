import Navbar from "../components/Navbar";
import HomepageProject from "../components/HomepageProject";

export default function Homepage() {

    function scrollToTopOfThePage() {
        const scrollStep = -window.scrollY / (500 / 15);
        const scrollInterval = setInterval(function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 20);
    }

    return (
        <>
            <Navbar/>
            <HomepageProject
                projectBackgroundImage={`${process.env.PUBLIC_URL}/assets/flow/flow-homepage.png`}
                projectName={"FLOW"}
                projectYear={"2023"}
                projectPageRoute={"/flow"}
            />
            <div className="spacer"></div>
            <HomepageProject
                projectBackgroundImage={`${process.env.PUBLIC_URL}/assets/visioni-dai-fondi-homepage.png`}
                projectName={"VISIONI DAI FONDI"}
                projectYear={"2023"}
            />
            <div className="spacer"></div>
            <HomepageProject
                projectBackgroundImage={`${process.env.PUBLIC_URL}/assets/balansit-homepage.png`}
                projectName={"BALANSIT"}
                projectYear={"2022"}
            />
            <div className="spacer"></div>
            <div className="navigation-helper">
                <img onClick={scrollToTopOfThePage} src={`${process.env.PUBLIC_URL}/assets/arrow-homepage.png`} alt="Arrow icon"/>
            </div>
        </>
    );

}