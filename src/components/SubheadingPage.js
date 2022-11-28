import "./SubheadingPage.css";

export default function SubheadingPage(props) {
    return (
      <h5 className="main__Title-Level5">
        <span className="main__Title-Number-Page">{props.number}</span> {props.titlePage}
      </h5>
    );
}