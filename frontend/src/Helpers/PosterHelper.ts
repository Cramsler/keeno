import {getFullInfo} from "@/Services/ImdbService";

export async function getPoster(media) {
    if (media.imdb_id) {
        const response = await getFullInfo(media.imdb_id);
        return !response.data.Error && response.data.Poster !== "N/A"
            ? response.data.Poster
            : getPosterFromKp(media.kinopoisk_id);
    }

    if (media.kinopoisk_id) return getPosterFromKp(media.kinopoisk_id);
}

function getPosterFromKp(KpId) {
    return `https://kinopoiskapiunofficial.tech/images/posters/kp/${KpId}.jpg`;
}