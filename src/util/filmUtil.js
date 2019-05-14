export const filterFilm = (films, searchType, searchValue) => {
    return films.filter(film => film[searchType].toString().replace(/\s|[,]/g, '').toLowerCase().includes(searchValue.toString().replace(/\s|[,]/g, '').toLowerCase()));
};