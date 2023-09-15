import React from "react";
import SearchBar from "./SearchBar.jsx";
import {Link} from "react-router-dom"

const Nav = ({onSearch, characters, randomize, Logout}) => {

    // const testing = () => {
    //     alert(characters)
    // }


    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <div>
            <Link to={"/about"}>
            <button>About</button>
            </Link>
            <Link to={"/home"}>
            <button>Home</button>
            </Link>
            <Link to={"/favorites"}>
            <button>Favorites</button>
            </Link>
            <button onClick={Logout}>Log out</button>
            {/* <button onClick={testing}>TEST</button> */}
            <button onClick={randomize}>ADD RANDOM</button>
            </div>
        </div>
    );
};


export default Nav;