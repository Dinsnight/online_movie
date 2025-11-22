import Hero from "./Hero";

const Home = () =>{
    return (
        <>
            <Hero text={"Welcome To Your Home Cinema "}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center my-5">
                        <p className="lead">
                            Here you can get any movie and it is only one solution for your problem, enjoy
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home