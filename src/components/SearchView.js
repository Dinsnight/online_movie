import Hero from "./Hero";
import MovieCard from "./MovieCard";

const SearchView = ({keyword, searchResults}) =>{
    const title = `You are searching for ${keyword}`

    const  resultHTML = searchResults.map((obj , i)=>{
        return <MovieCard movie={obj} key={i}/>
    })
    return(
        <>
            <Hero text={title}/>
            {resultHTML &&
                <div className="container">
                    <div className="row">
                        {resultHTML}
                    </div>
                </div>
            }
        </>
    )
}

export default SearchView