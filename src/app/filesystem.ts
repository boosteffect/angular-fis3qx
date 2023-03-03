export interface Entry {
  name: string;
  desc?: string;
  actualOrder?: number;
  transfered?: number;
  qtyRemaining?: number;
  id: number;
  type: 'item' | 'group';
  size?: number;
  contents?: Entry[];
}

let counter = 0;
const nextId = () => counter++;

export const filesystem: Entry[] = [
  {
    type: 'group',
    id: nextId(),
    name: 'GG_CHEF',
    contents: [
      {
        type: 'item',
        id: nextId(),
        name: '267213',
        size: 267213,
        desc: 'PBX G&G Side Mac & Cheese Gouda',
        actualOrder: 1117,
        transfered: 5,
        qtyRemaining: 1112,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267221',
        size: 267221,
        desc: 'PBX G&G Side Mac & Cheese',
        actualOrder: 1611,
        transfered: 0,
        qtyRemaining: 1611,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267298',
        size: 267298,
        desc: 'PBX G&G Side Potato Roasted Rosemary',
        actualOrder: 761,
        transfered: 0,
        qtyRemaining: 761,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267410',
        size: 3050,
        desc: 'PBX G&G Entree Pork Mojo',
        actualOrder: 125,
        transfered: 0,
        qtyRemaining: 125,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267411',
        size: 467,
        desc: 'PBX G&G Meal Chicken Citrus',
        actualOrder: 350,
        transfered: 0,
        qtyRemaining: 350,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267431',
        size: 1954,
        desc: 'PBX G&G Side Bean Green Almondine',
        actualOrder: 249,
        transfered: 0,
        qtyRemaining: 249,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267432',
        size: 1954,
        desc: 'PBX G&G Meal Chicken Quesadilla',
        actualOrder: 481,
        transfered: 0,
        qtyRemaining: 481,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267437',
        size: 1954,
        desc: 'PBX G&G Meal Pork Mojo',
        actualOrder: 310,
        transfered: 0,
        qtyRemaining: 310,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267440',
        size: 1954,
        desc: 'PBX G&G Family Meal Quesadilla',
        actualOrder: 546,
        transfered: 0,
        qtyRemaining: 546,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267441',
        size: 1954,
        desc: 'PBX G&G Entree Chicken Citrus',
        actualOrder: 549,
        transfered: 0,
        qtyRemaining: 549,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267442',
        size: 1954,
        desc: 'PBX G&G Entree Chicken Quesadilla',
        actualOrder: 743,
        transfered: 0,
        qtyRemaining: 743,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267444',
        size: 1954,
        desc: 'PBX G&G Entree Meatloaf Turkey',
        actualOrder: 216,
        transfered: 0,
        qtyRemaining: 216,
      },
      {
        type: 'item',
        id: nextId(),
        name: '267445',
        size: 1954,
        desc: 'PBX G&G Entree Chicken Blackened',
        actualOrder: 417,
        transfered: 0,
        qtyRemaining: 417,
      },
      {
        type: 'item',
        id: nextId(),
        name: '268014',
        size: 1954,
        desc: 'PBX G&G Side Asparagus W/Bleu Cheese',
        actualOrder: 345,
        transfered: 0,
        qtyRemaining: 345,
      },
      {
        type: 'item',
        id: nextId(),
        name: '268020',
        size: 1954,
        desc: 'PBX G&G Side Brussel Sprouts Roasted',
        actualOrder: 383,
        transfered: 0,
        qtyRemaining: 383,
      },
    ],
  },
  {
    type: 'group',
    id: nextId(),
    name: 'GG_MISC',
    contents: [
      {
        type: 'item',
        id: nextId(),
        name: '263316',
        size: 267213,
        desc: 'PBX Cup Pepperoni & Cheddar Cheese',
        actualOrder: 295,
        transfered: 0,
        qtyRemaining: 295,
      },
      {
        type: 'item',
        id: nextId(),
        name: '263317',
        size: 267221,
        desc: 'PBX Cup Salami & Provolone Cheese',
        actualOrder: 232,
        transfered: 0,
        qtyRemaining: 232,
      },
    ],
  },
  {
    type: 'group',
    id: nextId(),
    name: 'GG_PLATTR',
    contents: [
      {
        type: 'item',
        id: nextId(),
        name: '254881',
        size: 267213,
        desc: 'PBX Platter Cubanito Mini',
        actualOrder: 2464,
        transfered: 0,
        qtyRemaining: 2464,
      },
      {
        type: 'item',
        id: nextId(),
        name: '258367',
        size: 267221,
        desc: 'PBX Platter Slider ORTB Mini',
        actualOrder: 1194,
        transfered: 0,
        qtyRemaining: 1194,
      },
      {
        type: 'item',
        id: nextId(),
        name: '258369',
        size: 267298,
        desc: 'PBX Platter Slider Tavern Ham Mini',
        actualOrder: 826,
        transfered: 0,
        qtyRemaining: 826,
      }
    ],
  },
];
