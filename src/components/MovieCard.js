import {Link} from "react-router-dom";

const MovieCard = ({movie}) =>{
    const placeholderUrl ="https://i.pinimg.com/736x/ed/bc/04/edbc048cc20d8dc74b1acf76915ed32b.jpg"
    const posterUrl = movie.poster_path
        ?`https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : placeholderUrl
    const detailUrl = `/movieview/${movie.id}`

    return (
        <div className={"col-lg-3 col-md-4 col-6 col-xs-12 my-4"}>
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard