import Hero from "./Hero";

const AboutView = ()=>{
    return(

        <>
            <Hero text={"About us"}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5 text-center">
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

export default AboutView