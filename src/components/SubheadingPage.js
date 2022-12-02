import "./SubheadingPage.css";

export default function SubheadingPage(props) {
    return (
      <h5
        className={
          props.classNameAdd
            ? `Title-Level5 ${props.classNameAdd}`
            : "Title-Level5"
        }
      >
        {props.number ? (
          <span className="title-level5__Number-Page">{props.number}</span>
        ) : (
          ""
        )}
        {props.titlePage}
      </h5>
    );
}