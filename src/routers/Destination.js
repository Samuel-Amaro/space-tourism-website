import Header from "../components/Header";
import dataJson from "../api/data.json";
import { useState } from "react";

//TODO: pensar numar forma de componentizar as imagens e as ddescrições o conteudo

export default function Destination() {
  function changeDestiny(event) {
    //TODO: tratar o evento de onPressed via click ou tecladdo, obter o destiny que o usuario escolheu e setar o novo destiny
  }

  function setDestiny(destiny) {
    //TODO: filtrar o destino escolhido, atualiza o state para setar novos dados na UI
  }

  const [destinationSelected, setDestinationSelected] = useState(
    dataJson.destinations[0]
  );
  return (
    <section className="main__Section" aria-label="Section Destination">
      <Header />
      <div className="main__Content-Section">
        <h5 className="main__Title-Level5">01 Pick your destination</h5>
        <div className="main__Container-Content">
          <picture className="main__Ilustration">
            <source
              type="image/webp"
              srcSet={`${process.env.PUBLIC_URL}${destinationSelected.images.webp}`}
              className="Ilustration"
            />
            <img
              src={`${process.env.PUBLIC_URL}${destinationSelected.images.png}`}
              alt={destinationSelected.description}
              className="Ilustration"
            />
          </picture>
          <div className="main__Container-Description">
            <ul
              className="main__List-Destination"
              aria-label="List and navigation links to know destination"
            >
              <li className="main__Item-Dest" aria-label="Destination Moon">
                Moon
              </li>
              <li className="main__Item-Link" aria-label="Destination Mars">
                Mars
              </li>
              <li className="main__Item-Link" aria-label="Destination Europa">
                Europa
              </li>
              <li className="main__Item-Link" aria-label="Destination Titan">
                Titan
              </li>
            </ul>
            <h1 className="main__Title-Level1">{destinationSelected.name}</h1>
            <p className="main__Description">
              {destinationSelected.description}
            </p>
            <hr className="Line-Diviser" />
            <div className="main__Statistics">
              <div className="main__Side-Statistics">
                <span className="main__Subheading-Level2">Avg. distance</span>
                <span className="main__Value-Statistics">
                  {destinationSelected.distance}
                </span>
              </div>
              <div className="main__Side-Statistics">
                <span className="main__Subheading-Level2">
                  Est. travel time
                </span>
                <span className="main__Value-Statistics">
                  {destinationSelected.travel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
