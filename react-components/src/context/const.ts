export const INITIAL_STATE = {
  main: {
    search: '',
    sort: 'relevance',
    cardsPerPage: '20',
    currentPage: '1',
    totalPages: '0',
    cards: [],
  },
  form: {
    name: '',
    surname: '',
    email: '',
    birthday: '',
    country: '',
    zipcode: '',
    gender: false,
    file: '',
    news: false,
    cards: [],
  },
};

const loadInitState = () => {
  const searchQuery = JSON.parse(localStorage.getItem('searchbar') as string);

  if (searchQuery) {
    INITIAL_STATE.main.search = searchQuery.search;
    INITIAL_STATE.main.sort = searchQuery.sort;
    INITIAL_STATE.main.cardsPerPage = searchQuery.cardsPerPage;
    INITIAL_STATE.main.currentPage = searchQuery.currentPage;
    INITIAL_STATE.main.totalPages = searchQuery.totalPages;
  }
};

loadInitState();