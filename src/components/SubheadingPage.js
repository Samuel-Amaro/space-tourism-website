import "./SubheadingPage.css";

export default function SubheadingPage(props) {
    return (
      <h5 className="Title-Level5 title-level5_Color title-level5-Mg">
        <span className="title-level5__Number-Page">{props.number}</span>
        {props.titlePage}
      </h5>
    );
}