const name = 'Esukyra';
let hpPoints: number | string = 95;
//let hpPoints: number | 'FULL' = 95; //we use 'FULL' to only allow that word and not another one.
hpPoints = 'FULL';
const isAlive: boolean = true;

console.log({name, hpPoints, isAlive});

export {};