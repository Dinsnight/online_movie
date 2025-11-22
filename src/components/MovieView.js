import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Hero from "./Hero";

const MovieView = () =>{
    const { id } = useParams()
    console.log(id)

    const [movieDetails , setMovieDetails] =useState({})
    const [isLoading , setIsLoading] = useState(true)
    const [videoKey, setVideoKey ] = useState(null)

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&Language=en-US`)
            .then(res => res.json())
            .then(data =>{
                setMovieDetails(data)
                setIsLoading(false)
            })
        const fetchMovieVideos = async ()=>{
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`)
                const data = await res.json()

                const trailer = data.results.find(
                    vid => vid.type === "Trailer" && vid.site === "YouTube"
                )

                if (trailer){
                    setVideoKey(trailer.key)
                }
            } catch (e) {
                console.log(e)
            }
        }

        fetchMovieVideos().finally(()=> setIsLoading(false))
    },[id])

    const placeholderUrl= "https://i.pinimg.com/736x/ed/bc/04/edbc048cc20d8dc74b1acf76915ed32b.jpg"
    const posterPath = movieDetails.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        : placeholderUrl;
    const backDropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
    function movieRenderDetail(){
        if (isLoading){
           return <Hero text={"Loading..."}/>
        }
        if (movieDetails){
           return(
               <>
                   <Hero text={movieDetails.original_title} backdrop={backDropUrl}/>
                   <div className={"container"}>
                       <div className="row my-5">
                           <div className="col-md-3">
                               <img src={posterPath} className={"img-fluid shadow rounded"}/>
                           </div>
                           <div className="col-md-9" style={{maxWidth: "500px"}}>
                               <h1>{movieDetails.original_title} Buni Badriddin qigan</h1>
                               <p className={"shadow"}>{movieDetails.overview}</p>
                               <p className={"shadow"}>Country: <b> {movieDetails.origin_country?.join(", ")} </b></p>
                               <p className={"shadow-sm"}>Budget: <b>{movieDetails.budget}$</b> </p>
                               <p className={"shadow-sm"}>Release date : <b>{movieDetails.release_date}</b></p>
                               <p>Languages <b> {movieDetails.spoken_languages?.map(eng => eng.english_name).join(", ")}</b></p>
                               <p>Average score <b>{movieDetails.vote_average}</b></p>
                           </div>
                           {videoKey && (
                               <>
                                   <h5 className="text-center mt-5">🎬 Movie Trailer</h5>
                                   <div className="d-flex justify-content-center mt-3">
                                       <div className="ratio ratio-16x9" style={{ width: '75%' }}>
                                           <iframe
                                               src={`https://www.youtube.com/embed/${videoKey}`}
                                               title="YouTube trailer"
                                               allowFullScreen
                                           ></iframe>
                                       </div>
                                   </div>
                               </>
                           )}
                       </div>
                   </div>
               </>
           )
        }
    }
    return movieRenderDetail()
}

export default MovieView