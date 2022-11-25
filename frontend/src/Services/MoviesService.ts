import axios from "axios";

export async function getAllFilms(page: number = 1) {
    return await axios.get(`http://localhost:3000/movies?page=${page}`);
}

export async function getOneFilm(id: number) {
    return await axios.get(`http://localhost:3000/movies/${id}`);
}

export async function getAllSeries(page: number = 1) {
    return await axios.get(`http://localhost:3000/series?page=${page}`);
}

export async function getOneSeries(id: number) {
    return await axios.get(`http://localhost:3000/series/${id}`);
}

export async function searchMedia(searchString: string) {
    return await axios.get(`http://localhost:3000/search?query=${searchString}`);
}
