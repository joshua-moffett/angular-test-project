import { Column } from '../shared/list/column';

export const columns: Column[] = [
  {
    name: 'info',
    text: 'title',
    subtext: 'author',
    hasTemplate: false,
    width: 100
  },
  {
    name: 'tags',
    hasTemplate: true,
    width: 100
  }
];
