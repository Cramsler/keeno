import axios from "axios";

export async function getFullInfo(kpId: number) {
    return await axios.get(`http://localhost:3000/kp?kpId=${kpId}`);
}

export async function getTrailer(kpId: number) {
    return await axios.get(`http://localhost:3000/kp/trailer?kpId=${kpId}`);
}