import Section from "../components/Section";

export default function Home() {
    return (
      <Section nameSection={"Home"}>
        <div className="section__Side-Content">
          <h5 className="section__Title-Level5">So, you want to travel to</h5>
          <h1 className="section__Title-Level1">Space</h1>
          <p className="section__Description">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button
          type="button"
          className="section__Button-Explore"
          aria-label="Button Main Explore Landing Page"
        >
          Explore
        </button>
      </Section>
    );
}