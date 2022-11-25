import axios from "axios";

export async function getFullInfo(imdbId: string) {
    return await axios.get(`http://localhost:3000/imdb?imdbId=${imdbId}`);
}
