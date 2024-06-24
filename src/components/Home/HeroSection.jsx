function HeroSection(){
    return(
        <section id="herosection" className="hero--section">
        <div className="hero--section--content--box" >
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Gayathri</p>
          <h1 className="hero--section--title">
            <span>Software</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
          Passionate and detail-oriented software developer with expertise in designing, developing, and deploying robust web and mobile applications. Proficient in modern programming languages and frameworks.
          <br/>
          </p>
        </div>
        
        </div>
        <div className="hero--section--img">
            <img src="./img/hero_img.png" alt="Hero section" />

        </div>
        </section>
    )
}
export default HeroSection