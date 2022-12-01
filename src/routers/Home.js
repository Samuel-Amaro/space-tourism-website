import { NavLink } from "react-router-dom";
import Section from "../components/Section";
import "./Home.css";
import replaceBg from "../utils/utils";
import Header from "../components/Header";


export default function Home() {
  /*useEffect(() => {
    replaceBg("body-page_Bg--Home");
  }, []);
  */
  replaceBg("body-page_Bg--Home");
  return (
    <Section nameSection={"Home"}>
      <Header />
      <div className="section__Content__Home">
        <div className="section__Side-Content">
          <h5 className="Title-Level5 title-level5_Mg">
            So, you want to travel to
          </h5>
          <h1 className="Title-Level1 title-level1_Mg">Space</h1>
          <p className="Description">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <NavLink
          to="/destination"
          className="section__Link-Explore"
          aria-label="Button Main Explore Landing Page"
          target="_self"
          rel="next"
        >
          Explore
        </NavLink>
      </div>
    </Section>
  );
}
