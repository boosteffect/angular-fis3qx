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
        name: 'README.md',
        size: 267213,
        desc: 'PBX G&G ',
        actualOrder: 0,
        transfered: 0,
        qtyRemaining: 0,
      },
      {
        type: 'item',
        id: nextId(),
        name: 'angular.json',
        size: 267221,
        desc: 'PBX G&G ',
        actualOrder: 0,
        transfered: 0,
        qtyRemaining: 0,
      },
      {
        type: 'item',
        id: nextId(),
        name: 'package-lock.json',
        size: 267298,
        desc: 'PBX G&G ',
        actualOrder: 0,
        transfered: 0,
        qtyRemaining: 0,
      },
      {
        type: 'item',
        id: nextId(),
        name: 'package.json',
        size: 3050,
        desc: 'PBX G&G ',
        actualOrder: 0,
        transfered: 0,
        qtyRemaining: 0,
      },
      {
        type: 'item',
        id: nextId(),
        name: 'tsconfig.json',
        size: 467,
        desc: 'PBX G&G ',
        actualOrder: 0,
        transfered: 0,
        qtyRemaining: 0,
      },
      {
        type: 'item',
        id: nextId(),
        name: 'tslint.json',
        size: 1954,
        desc: 'PBX G&G ',
        actualOrder: 0,
        transfered: 0,
        qtyRemaining: 0,
      },
    ],
  },
];
