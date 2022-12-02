import "./Picture.css";

export default function Picture(props) {
    return (
      <picture className={"Ilustration"}>
        <source
          type={props.type ? props.type : "image/webp"}
          srcSet={`${process.env.PUBLIC_URL}${props.source}`}
          className="ilustration__Img"
          media={props.media ? props.media : ""}
        />
        <img
          src={`${process.env.PUBLIC_URL}${props.src}`}
          alt={props.alt}
          className={props.classNameAdd ? `ilustration__img ${props.classNameAdd}` : "ilustration__img"}
          aria-live="polite"
          aria-atomic="true"
        />
      </picture>
    );
}