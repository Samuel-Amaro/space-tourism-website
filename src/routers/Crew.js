import Picture from "../components/Picture";
import Section from "../components/Section";
import SubheadingPage from "../components/SubheadingPage";
import dataJson from "../api/data.json";
import { useLoaderData } from "react-router-dom";
import LineDiviser from "../components/LineDiviser";
import { useState } from "react";
import replaceBg from "../utils/utils";
import Header from "../components/Header";

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

  /*useEffect(() => {
    //document.querySelector("body").dataset.bgPage = "crew";
    replaceBg("body-page_Bg--Crew");
  }, []);
  */

  replaceBg("body-page_Bg--Crew");

  const [crewSelected, setCrewSelected] = useState(dataPageCrew[0]);

  return (
    <Section nameSection="Crew">
      <Header />
      <SubheadingPage number="02" titlePage="Meet your crew" />
      <div className="section__Content-Crew">
        <Picture
          source={crewSelected.images.webp}
          src={crewSelected.images.png}
          alt={crewSelected.bio}
        />
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
                  tabIndex="0"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      changeInput(event);
                    }
                  }}
                  value={data.name}
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
          <h4 className="section__Title-Level4">{crewSelected.role}</h4>
          <h3 className="section__Title-Level3">{crewSelected.name}</h3>
          <p className="section__Description">{crewSelected.bio}</p>
        </div>
      </div>
    </Section>
  );
}
