export const filterFilm = (films, searchType, searchValue) => {
    return films.filter(film => film[searchType].includes(searchValue));
};