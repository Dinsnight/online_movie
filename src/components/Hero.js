const Hero = ({text, backdrop}) => {
    return (
        <header className="p-5 bg-dark text-white hero-container">
            <h1 className={"hero-text"}>{text}</h1>
            <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
        </header>
    )
}

export default Hero