import Section from "../components/Section";
import dataJson from "../api/data.json";
import { useLoaderData } from "react-router-dom";
import LineDiviser from "../components/LineDiviser";
import { useEffect ,useState } from "react";
import replaceBg from "../utils/utils";
import Header from "../components/Header";
import "./Crew.css";

export async function loader() {
  //filter data to page crew
  return dataJson.crew;
}

export default function Crew() {
  const dataPageCrew = useLoaderData();

  function changeInput(event) {
    let crewSelectedInput = event.target.dataset.crewName;
    setCrew(crewSelectedInput);
  }

  function setCrew(crewName) {
    let filteredCrewSelected = dataPageCrew.filter((data) => {
      return data.name.toLowerCase() === crewName.toLowerCase();
    });
    setCrewSelected(filteredCrewSelected[0]);
  }

  useEffect(() => {
    replaceBg("body-page_Bg--Crew");
  }, []);

  const [crewSelected, setCrewSelected] = useState(dataPageCrew[0]);

  return (
    <Section nameSection="Crew">
      <Header />
      <h5 className="section__Title-Level5-Crew section-title-level5_Mod--Text">
        <span className="section-title-level5__Number-Page">02</span>Meet your
        crew
      </h5>
      <div className="section__Content-Crew">
        <picture className="section__Ilustration-Crew">
          <source
            type="image/webp"
            srcSet={`${process.env.PUBLIC_URL}${crewSelected.images.webp}`}
            className="section__Img-Crew"
          />
          <img
            src={`${process.env.PUBLIC_URL}${crewSelected.images.png}`}
            alt={crewSelected.bio}
            className="section__Img-Crew section__ilustration-Crew_Size"
            aria-live="polite"
            aria-atomic="true"
          />
        </picture>
        <LineDiviser />
        <ul
          className="section__List-Teams"
          aria-label="List of teams and crew"
          title="Pick your crew"
        >
          {dataPageCrew.map((data, index) => {
            /*TODO: pensar em uma forma de fazer o elemento escolhido se tornar ativo*/
            return (
              <li
                className="section__Item-Crew"
                key={data.name.toLowerCase().split("").join("-")}
              >
                <input
                  type="radio"
                  aria-label={`Choose crew of ${data.role} ${data.name}`}
                  title={`Choose crew of ${data.role} ${data.name}`}
                  name="crew"
                  className="section__Input-Crew"
                  data-crew-name={data.name}
                  onChange={changeInput}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      changeInput(event);
                    }
                  }}
                  tabIndex="0"
                  value={data.name}
                  checked={crewSelected.name === data.name ? true : false}
                />
              </li>
            );
          })}
        </ul>
        <div
          className="section__Container-Description"
          aria-live="polite"
          aria-atomic="true"
        >
          <h4 className="section__Title-Level4-Crew section__title-level4-crew_Mod--Text">
            {crewSelected.role}
          </h4>
          <h3 className="section__Title-Level3-Crew section__title-level3-crew_Mod--Text">
            {crewSelected.name}
          </h3>
          <p className="section__Description-Text-Crew section__description-text-crew_Mod-Text">
            {crewSelected.bio}
          </p>
        </div>
      </div>
    </Section>
  );
}
