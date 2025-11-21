import Hero from "./Hero";

const Home = () =>{
    return (
        <>
            <Hero text={"Welcome to react 201"}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center my-5">
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium aliquam beatae dolores ea eaque fugiat,
                            incidunt itaque laborum libero nam natus obcaecati odio quod recusandae voluptate.
                            Fugit neque pariatur vero?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home