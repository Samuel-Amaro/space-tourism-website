import "./SubheadingPage.css";

export default function SubheadingPage(props) {
    return (
      <h5 className="section__Title-Level5-Home">
        {props.number ? (
          <span className="title-level5__Number-Page">{props.number}</span>
        ) : (
          ""
        )}
        {props.titlePage}
      </h5>
    );
}