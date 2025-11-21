import './App.css';
import Navbar from "./components/NavbarRow";
import Home from "./components/Home";
import AboutView from "./components/About";
import {data, Route, Routes} from "react-router-dom";
import SearchView from "./components/SearchView";
import {useEffect, useState} from "react";
import MovieView from "./components/MovieView";
import NotFound from "./components/NotFound";

function App() {

    const [searchResults , setSearchResults] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(()=>{
        if (searchText){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&
        Language=en-US&query=${searchText}&page=1&include_adult=false`)
                .then(res => res.json())
                .then(data=>{
                    setSearchResults(data.results)
                })
        }
        },[searchText])

    return (
        <div className={"container my-5"}>
            <Navbar searchText={searchText} setSearchText={setSearchText}/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<AboutView/>}/>
                <Route path={"/search"} element={<SearchView keyword={searchText} searchResults={searchResults}/>}/>
                <Route path={'/movieview/:id'} element={<MovieView/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
