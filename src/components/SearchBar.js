import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onsubmit }){
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermInput = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onsubmit(searchTerm);
        setSearchTerm('');
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <label>Enter Search Term: </label>
                <input
                    type="text"
                    className="input"
                    value={searchTerm}
                    onChange={handleSearchTermInput}
                    placeholder="Enter Search Term Here.." 
                />
            </form>
        </div>
    )
}

export default SearchBar;