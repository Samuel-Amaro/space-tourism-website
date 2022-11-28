import "./Section.css";
import Header from "./Header";

export default function Section(props) {
return (
  <section
    className={`Section section__${props.nameSection}`}
    aria-label={`Section ${props.nameSection}`}
  >
    <Header />
    <div className={`Section-Content section-content__${props.nameSection}`}>
      {props.children}
    </div>
  </section>
);
}