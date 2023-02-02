import './App.css';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

function App(){
    const [images, setImages] = useState([]);

    const fetchImagesFromUnsplash = async (searchTerm) => {
        const fetchedImages = await searchImages(searchTerm);
        console.log(fetchedImages);
        setImages(fetchedImages);
    }

    return (
        <div className="App">
            <SearchBar onsubmit={fetchImagesFromUnsplash}/>
            <ImageList images={images}/>
        </div>
    )
}

export default App;