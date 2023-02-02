import axios from "axios";

const searchImages = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID H5Lpj2DvYsGRNlj0dtVLX2WXLi13bWwgaRZ2LuhZJFA',
        },
        params: {
            query: searchTerm,
        }
    });

    return response.data.results;
}

export default searchImages;
