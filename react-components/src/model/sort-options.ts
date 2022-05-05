export interface ISort {
  value: string;
  text: string;
}

export const sort = [
  { value: 'relevance', text: 'Relevance' },
  { value: 'interestingness-asc', text: 'Interestingness asc' },
  { value: 'interestingness-desc', text: 'Interestingness desc' },
  { value: 'date-posted-asc', text: 'Date posted asc' },
  { value: 'date-posted-desc', text: 'Date posted desc' },
  { value: 'date-taken-asc', text: 'Date taken asc' },
  { value: 'date-taken-desc', text: 'Date taken desc' },
];
