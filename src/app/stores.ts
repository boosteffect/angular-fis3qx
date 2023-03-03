import { StringFilterCellComponent } from "@progress/kendo-angular-treelist/filtering/cell/string-filter-cell.component";

export interface StoreEntry {
  name?: string;
  id: number;
  type: 'item' | 'group';
  contents?: StoreEntry[];
}

let counter = 0;
const nextId = () => counter++;

export const storeList: StoreEntry[] = [
  {
    type: 'group',
    id: nextId(),
    name: 'Dist Whse 4501',
    contents: [
      {
        type: 'item',
        id: nextId(),
        name: '5401',
      },
      {
        type: 'item',
        id: nextId(),
        name: '1547',
      },
      {
        type: 'item',
        id: nextId(),
        name: '732',
      },
      {
        type: 'item',
        id: nextId(),
        name: '1517',
      },    
      {
        type: 'item',
        id: nextId(),
        name: '1347',
      },
      {
        type: 'item',
        id: nextId(),
        name: '1651',
      },
      {
        type: 'item',
        id: nextId(),
        name: '681',
      },
      {
        type: 'item',
        id: nextId(),
        name: '1004',
      }, 
      {
        type: 'item',
        id: nextId(),
        name: '1371',
      },
      {
        type: 'item',
        id: nextId(),
        name: '129',
      },
      {
        type: 'item',
        id: nextId(),
        name: '1670',
      },
      {
        type: 'item',
        id: nextId(),
        name: '1681',
      },     
      {
        type: 'item',
        id: nextId(),
        name: '1212',
      },
      {
        type: 'item',
        id: nextId(),
        name: '356',
      },
      {
        type: 'item',
        id: nextId(),
        name: '836',
      },
      {
        type: 'item',
        id: nextId(),
        name: '712',
      },      
      {
        type: 'item',
        id: nextId(),
        name: '878',
      },
      {
        type: 'item',
        id: nextId(),
        name: '793',
      },
      {
        type: 'item',
        id: nextId(),
        name: '1135',
      },
      {
        type: 'item',
        id: nextId(),
        name: '1260',
      },   
    ],
  },
];
