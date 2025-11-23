const apiConfig = {
    baseURL: "https://api.themoviedb.org/3/",
    apiKey: "37add31f3751ca6e1cec3481796e16a9",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;