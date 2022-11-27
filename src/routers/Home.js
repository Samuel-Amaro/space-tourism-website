import Header from "../components/Header";

export default function Home() {
    return (
      <section className="main__Section" aria-label="Section Home">
        <Header />
        <div className="main__Content-Section">
          <div className="main__Side-Content">
            <h5 className="main__Title-Level5">So, you want to travel to</h5>
            <h1 className="main__Title-Level1">Space</h1>
            <p className="main__Description">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="main__Explore">
            <p className="main__Content-Explore">Explore</p>
          </div>
        </div>
      </section>
    );
}