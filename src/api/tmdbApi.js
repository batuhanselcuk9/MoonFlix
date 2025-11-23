import axiosClient from "./axiosClient";

export const category = {
    movie: "movie",
    tv: "tv",
};

export const movieType = {
    upcoming: "upcoming",
    popular: "popular",
    top_rated: "top_rated",
};

export const tvType = {
    popular: "popular",
    top_rated: "top_rated",
    on_the_air: "on_the_air",
};

const tmdbApi = {
    // Film listesi
    getMoviesList: (type, params) => {
        const url = "movie/" + movieType[type];
        return axiosClient.get(url, { params });
    },

    // Dizi listesi
    getTvList: (type, params) => {
        const url = "tv/" + tvType[type];
        return axiosClient.get(url, { params });
    },

    // Video listesi (fragman vb)
    getVideos: (cate, id) => {
        const url = `${category[cate]}/${id}/videos`;
        return axiosClient.get(url, { params: {} });
    },

    // Arama
    search: (cate, params) => {
        const url = "search/" + category[cate];
        return axiosClient.get(url, { params });
    },

    // Detay sayfası
    detail: (cate, id, params) => {
        const url = `${category[cate]}/${id}`;
        return axiosClient.get(url, { params });
    },

    // Oyuncu listesi
    credits: (cate, id) => {
        const url = `${category[cate]}/${id}/credits`;
        return axiosClient.get(url, { params: {} });
    },

    // Benzer filmler
    similar: (cate, id) => {
        const url = `${category[cate]}/${id}/similar`;
        return axiosClient.get(url, { params: {} });
    },
};

export default tmdbApi;