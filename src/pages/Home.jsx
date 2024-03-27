

export default function Home() {
    return (
      <div>
          <section className="home1">
            <div className="text">
                <h4>👋, MY NAME IS ARISRADA</h4>
                <div className="container">
                    <h1>I'm</h1>
                    <h1 className="typed-out">Designer</h1>
                </div>
                <h3> Erode, Tamil Nadu, India</h3>
                <button className="button">Let's Start</button>
            </div> 
            <div>
                <img className="img1" src="../../src/assets/home-banner(1).png" alt=""/>
            </div> 
        </section>
        <section className="p-20 flex interest justify-around">
          <h1>Interested in working with me?</h1>
          <button className="button">Contact Me</button>
        </section>
      </div>
    )
  }
  