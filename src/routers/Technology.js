import Section from "../components/Section";
import dataJson from "../api/data.json";
import {useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import replaceBg from "../utils/utils";
import Header from "../components/Header";
import "./Technology.css";

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
      <Header classNameAdd="header_Spacing" />
      <h5 className="section__Title-Level5-Technology section-title-level5_Mod--Text">
        <span className="section-title-level5__Number-Page">03</span>Space
        launch 101
      </h5>
      <div className="section__Content-Technology">
        <picture className="section__Ilustration-Technology">
          <source
            type="image/jpeg"
            srcSet={`${process.env.PUBLIC_URL}${selectedSpaceLaunch.images.landscape}`}
            className="section__Img-Technology section__ilustration-Technology_Size"
            media="(max-width: 900px)"
          />
          <img
            src={`${process.env.PUBLIC_URL}${selectedSpaceLaunch.images.portrait}`}
            alt={selectedSpaceLaunch.description}
            className="section__Img-Technology section__ilustration-Technology_Size"
            aria-live="polite"
            aria-atomic="true"
          />
        </picture>
        {/*TODO: pensar em uma forma de fazer o elemento escolhido se tornar ativo*/}
        <ul className="section__Space-Launch" aria-label="Choose Space Launch">
          {dataTechnology.map((data, index) => {
            return (
              <li className="section__Item-Space-Launch" key={index + 1}>
                <button
                  type="button"
                  className={
                    selectedSpaceLaunch.name === data.name
                      ? `section__Button-Space-Launch section__button-space-launch_Active`
                      : "section__Button-Space-Launch"
                  }
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
          className="section__Container-Description-Technology"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="section__Subheading-Level2-Technology  section__subheading-level2-technology_Mod--Text">
            The terminology...
          </span>
          <h3 className="section__Title-Level3-Technology section__title-level3-technology_Mod--Text">
            {selectedSpaceLaunch.name}
          </h3>
          <p className="section__Description-Text-Technology section__description-text-technology_Mod--Text">
            {selectedSpaceLaunch.description}
          </p>
        </div>
      </div>
    </Section>
  );
}
