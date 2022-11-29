import dataJson from "../api/data.json";
import { useState } from "react";
import SubheadingPage from "../components/SubheadingPage";
import Picture from "../components/Picture";
import Section from "../components/Section";
import LineDiviser from "../components/LineDiviser";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  return dataJson.destinations;
}

export default function Destination() {
  const dataPageDestination = useLoaderData();

  function changeDestiny(event) {
    setDestiny(event.target.dataset.nameDestination);
  }

  function setDestiny(destiny) {
    let filterDestiny = dataPageDestination.filter((data) => {
      return data.name.toLowerCase() === destiny.toLowerCase();
    });
    setDestinationSelected(filterDestiny[0]);
  }

  const [destinationSelected, setDestinationSelected] = useState(dataPageDestination[0]);

  return (
    <Section nameSection="Destination">
      <SubheadingPage number="01" titlePage="Pick your destination" />
      <div className="section__Container-Content">
        <Picture
          source={destinationSelected.images.webp}
          src={destinationSelected.images.png}
          alt={destinationSelected.description}
        />
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
                  className="section__Button-Destination"
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
          <h1 className="section__Title-Level1">{destinationSelected.name}</h1>
          <p className="section__Description">
            {destinationSelected.description}
          </p>
          <LineDiviser />
          <div className="section__Statistics">
            <div className="section__Side-Statistics">
              <span className="section__Subheading-Level2">Avg. distance</span>
              <span className="section__Value-Statistics">
                {destinationSelected.distance}
              </span>
            </div>
            <div className="section__Side-Statistics">
              <span className="section__Subheading-Level2">
                Est. travel time
              </span>
              <span className="section__Value-Statistics">
                {destinationSelected.travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
