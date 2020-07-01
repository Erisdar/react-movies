import { filterFilm } from '../filmUtil';

const films = require('data/film.json');
const searchTypeTitle = 'title';
const searchTypeGenre = 'genres';
const killBill = films.filter(film => film.id === "1");

describe.each`
  searchType         | searchValue              | expected     | size
  ${searchTypeTitle} | ${''}                    | ${films}     | ${14}
  ${searchTypeGenre} | ${'Action, Adventure'}  | ${killBill}  | ${2}
  ${searchTypeTitle} | ${'Kill Bill'}           | ${killBill}  | ${2}
  ${searchTypeTitle} | ${'Not existing Title'}  | ${[]}        | ${0}
`('check films filtering by $searchType = $searchValue', ({searchType, searchValue, expected, size}) => {
  test('should contain expected films and have expected size', () => {
    let filtered = filterFilm(films, searchType, searchValue);
    expect(filtered).toHaveLength(size);
    expect(filtered).toEqual(expect.arrayContaining(expected));
  });
});

describe.each`
  searchType           | films        | description
  ${null}              | ${films}     | ${'searchType = null'}
  ${searchTypeTitle}   | ${null}      | ${'films = null'}
`('check films filtering with $description', ({searchType, films}) => {
  test('should throw exception', () => {
    expect(() => {
      filterFilm(films, searchType, '')
    }).toThrow();
  });
});