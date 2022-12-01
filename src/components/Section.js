import "./Section.css";

export default function Section(props) {
return (
  <section
    className={`Section section__${props.nameSection}`}
    aria-label={`Section ${props.nameSection}`}
  >
    {props.children}
  </section>
);
}