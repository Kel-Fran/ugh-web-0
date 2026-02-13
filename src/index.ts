import { beolvas, maiidojaras } from "./idojaraskezeles";
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

function max<T>(array: T[], isGreater: (a: T, b: T)=> boolean = (a,b) => a > b) {
    let maxIdx = 0;
    for (let i = 0; i < array.length; i++) {
        if (isGreater(array[i], array[maxIdx])) maxIdx = i;
    }

    return array[maxIdx];
}

(async () => {
    const weathers = [...(await beolvas()), await maiidojaras()];
    console.log(`${max(weathers, (a,b) => a.tempMax > b.tempMax)}`);

    fs.writeFile(path.join(__filename, '..', '..', 'idojaras-uj.csv'), ['nap;min;max;időjárás', ...weathers.map(it => `${it.day};${it.tempMin};${it.tempMax};${it.weather}`)].join('\n'))
})();