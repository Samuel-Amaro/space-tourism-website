import dataJson from "../api/data.json";
import { useEffect, useState } from "react";
import SubheadingPage from "../components/SubheadingPage";
import Section from "../components/Section";
import LineDiviser from "../components/LineDiviser";
import { useLoaderData } from "react-router-dom";
import "./Destination.css";
import replaceBg from "../utils/utils";
import Header from "../components/Header";

export async function loader() {
  return dataJson.destinations;
}

export default function Destination() {
  const dataPageDestination = useLoaderData();

  function changeDestiny(event) {
    setDestiny(event.target.dataset.nameDestination);
    setIsDestinationTabSelected(event.target.dataset.nameDestination);
  }

  function setDestiny(destiny) {
    let filterDestiny = dataPageDestination.filter((data) => {
      return data.name.toLowerCase() === destiny.toLowerCase();
    });
    setDestinationSelected(filterDestiny[0]);
  }

  useEffect(() => {
    //document.querySelector("body").dataset.bgPage = "destination";
    replaceBg("body-page_Bg--Destination");
  }, []);

  const[destinationSelected, setDestinationSelected] = useState(dataPageDestination[0]);
  const [isDestinationTabSelected, setIsDestinationTabSelected] = useState("moon");

  return (
    <Section nameSection="Destination">
      <Header />
      <SubheadingPage
        number="01"
        titlePage="Pick your destination"
        classNameAdd="title-level5_Color title-level5_Mg--Pages"
      />
      <div className="section__Content-Destination">
        <picture className="section__Ilustration-Destination section__ilustration-destination_Size">
          <source
            type={"image/webp"}
            srcSet={`${process.env.PUBLIC_URL}${destinationSelected.images.webp}`}
            className="section__Img-Destination"
          />
          <img
            src={`${process.env.PUBLIC_URL}${destinationSelected.images.png}`}
            alt={destinationSelected.description}
            className="section__Img-Destination"
            aria-live="polite"
            aria-atomic="true"
          />
        </picture>
        <ul
          className="section__List"
          aria-label="List and navigation links to know destination"
          title="Pick your destination"
        >
          {dataJson.destinations.map((data) => {
            return (
              /*TODO: pensar em uma forma de fazer o elemento escolhido se tornar ativo*/
              <li className="section__Item-Dest" key={data.name}>
                <button
                  type="button"
                  className={
                    isDestinationTabSelected === data.name.toLocaleLowerCase()
                      ? `section__Button-Destination section__button-destination_Active`
                      : "section__Button-Destination"
                  }
                  aria-label={`Destination ${data.name}`}
                  title={`Destination ${data.name}`}
                  data-name-destination={data.name.toLowerCase()}
                  onPointerDown={changeDestiny}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      changeDestiny(event);
                    }
                  }}
                >
                  {data.name}
                </button>
              </li>
            );
          })}
        </ul>
        <div
          className="section__Container-Description"
          aria-live="polite"
          aria-atomic="true"
        >
          <h3 className="section__Title-Level3-Destination section__title-level3-destination_Mod--Dest">
            {destinationSelected.name}
          </h3>
          <p className="section__Description-Text-Destination section__description-text-destination_Mod">
            {destinationSelected.description}
          </p>
          <LineDiviser />
          <div className="section__Statistics">
            <div className="section__Side-Statistics">
              <span className="section__Subheading-Level2-Destination section__subheading-level2-Destination_Mod--Dest">
                Avg. distance
              </span>
              <span className="section__Subheading-Level1-Destination section__subheading-level1-destination_Mod--Text">
                {destinationSelected.distance}
              </span>
            </div>
            <div className="section__Side-Statistics">
              <span className="section__Subheading-Level2-Destination section__subheading-level2-Destination_Mod--Dest">
                Est. travel time
              </span>
              <span className="section__Subheading-Level1-Destination section__subheading-level1-destination_Mod--Text">
                {destinationSelected.travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
