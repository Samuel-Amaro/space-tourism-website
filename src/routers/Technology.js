import Section from "../components/Section";
import dataJson from "../api/data.json";
import {useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Picture from "../components/Picture";
import replaceBg from "../utils/utils";
import Header from "../components/Header";
import SubheadingPage from "../components/SubheadingPage";

export async function loader() {
  return dataJson.technology;
}

export default function Technology() {
  const dataTechnology = useLoaderData();
  function handlerSpaceLaunch(event) {
    let spaceLaunch = event.target.dataset.nameSpaceLaunch;
    setSpaceLaunch(spaceLaunch);
  }

  function setSpaceLaunch(nameLaunchSpace) {
    let filteredSpaceLaunch = dataTechnology.filter((data) => {
      return data.name.toLowerCase() === nameLaunchSpace.toLowerCase();
    });
    setSelectedSpaceLaunch(filteredSpaceLaunch[0]);
  }

  useEffect(() => {
    //document.querySelector("body").dataset.bgPage = "technology";
    replaceBg("body-page_Bg--Technology");
  }, []);

  const [selectedSpaceLaunch, setSelectedSpaceLaunch] = useState(
    dataTechnology[0]
  );

  return (
    <Section nameSection="Technology">
      <Header />
      <SubheadingPage
        number="03"
        titlePage="Space launch 101"
        classNameAdd="title-level5_Color title-level5_Mg--Pages"
      />
      <div className="section__Content-Technology">
        <Picture
          source={selectedSpaceLaunch.images.landscape}
          src={selectedSpaceLaunch.images.portrait}
          alt={selectedSpaceLaunch.description}
          type="image/jpeg"
          media="(max-width: 900px)"
        />
        {/*TODO: pensar em uma forma de fazer o elemento escolhido se tornar ativo*/}
        <ul className="section__Space-Launch" aria-label="Choose Space Launch">
          {dataTechnology.map((data, index) => {
            return (
              <li className="section__Item-Space-Launch" key={index + 1}>
                <button
                  type="button"
                  className="section__Button-Space-Launch"
                  aria-label={`Space Launch ${data.name}`}
                  title={`Space Launch ${data.name}`}
                  onPointerDown={handlerSpaceLaunch}
                  data-name-space-launch={data.name}
                >
                  {index + 1}
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
          <span className="section__Subheading-Level3">The terminology...</span>
          <h3 className="section__Title-Level3">{selectedSpaceLaunch.name}</h3>
          <p className="section__Description">
            {selectedSpaceLaunch.description}
          </p>
        </div>
      </div>
    </Section>
  );
}
