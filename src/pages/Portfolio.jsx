

export default function Portfolio() {
  return (
    <div>
      <section className="portfolio1">
        <h1 className="">LATEST PROJECTS</h1>
          <div className="grid1 child1 mb-40">
            <video width="700" height="240" loop muted controls autoPlay>
              <source src="../../src/assets/website.mp4" type="video/mp4"/>
            </video>

                <div className="rounded-2xl flex-col box p-20 items-center">
                    <h6 className="web mt-7">WEB DESIGN</h6>
                    <h2>Website Design for Marketing Agency Startup</h2>
                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                    <button className="button">VIEW PROJECT</button>
                </div>
            </div>
            <div className="grid1 child2">
            <video width="700" height="240" loop muted controls autoPlay>
              <source src="../../src/assets/IETE.mp4" type="video/mp4"/>
            </video>
                <div className="rounded-2xl flex-col box p-20 items-center">
                    <h6 className="web mt-7">WEB DESIGN</h6>
                    <h2>Website Design for Marketing Agency Startup</h2>
                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                    <button className="button">VIEW PROJECT</button>
                </div>
            </div>
        </section>
    </div>
  )
}
