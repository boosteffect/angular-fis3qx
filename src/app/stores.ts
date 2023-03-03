import { StringFilterCellComponent } from "@progress/kendo-angular-treelist/filtering/cell/string-filter-cell.component";

export interface StoreEntry {
  warehouse?: string;
  store?: string;
  id: number;
  type: 'item' | 'group';
  contents?: StoreEntry[];
}

let counter = 100000;
const nextId = () => counter++;

export const storeList: StoreEntry[] = [
  {
    type: 'group',
    id: nextId(),
    warehouse: '4501 - Lakeland',
    store: '',
    contents: [
      {
        type: 'item',
        id: nextId(),
        store: '5401',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1547',
      },
      {
        type: 'item',
        id: nextId(),
        store: '732',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1517',
      },    
      {
        type: 'item',
        id: nextId(),
        store: '1347',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1651',
      },
      {
        type: 'item',
        id: nextId(),
        store: '681',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1004',
      }, 
      {
        type: 'item',
        id: nextId(),
        store: '1371',
      },
      {
        type: 'item',
        id: nextId(),
        store: '129',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1670',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1681',
      },     
      {
        type: 'item',
        id: nextId(),
        store: '1212',
      },
      {
        type: 'item',
        id: nextId(),
        store: '356',
      },
      {
        type: 'item',
        id: nextId(),
        store: '836',
      },
      {
        type: 'item',
        id: nextId(),
        store: '712',
      },      
      {
        type: 'item',
        id: nextId(),
        store: '878',
      },
      {
        type: 'item',
        id: nextId(),
        store: '793',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1135',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1260',
      },   
    ],
  },
  {
    type: 'group',
    id: nextId(),
    warehouse: '4503 - Jacksonville',
    store: '',
    contents: [
      {
        type: 'item',
        id: nextId(),
        store: '1547',
      },
      {
        type: 'item',
        id: nextId(),
        store: '732',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1517',
      },    
      {
        type: 'item',
        id: nextId(),
        store: '1347',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1651',
      },
    ],
  },
  {
    type: 'group',
    id: nextId(),
    warehouse: '4506 - Deerfield',
    store: '',
    contents: [
      {
        type: 'item',
        id: nextId(),
        store: '1547',
      },
      {
        type: 'item',
        id: nextId(),
        store: '732',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1517',
      },    
      {
        type: 'item',
        id: nextId(),
        store: '1347',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1651',
      },
    ],
  },
  {
    type: 'group',
    id: nextId(),
    warehouse: '4508 - Orlando',
    store: '',
    contents: [
      {
        type: 'item',
        id: nextId(),
        store: '1547',
      },
      {
        type: 'item',
        id: nextId(),
        store: '732',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1517',
      },    
      {
        type: 'item',
        id: nextId(),
        store: '1347',
      },
      {
        type: 'item',
        id: nextId(),
        store: '1651',
      },
    ],
  },

];
