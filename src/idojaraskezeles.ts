import { createInterface } from 'node:readline/promises'
import * as fs from 'node:fs/promises';

import { type Day, Napidojaras } from './Napidojaras';
import path from 'node:path';

export async function maiidojaras() {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    try {
        return new Napidojaras(new Date().getDay() as Day, +(await rl.question('min temp: ')), +(await rl.question('max temp: ')), await rl.question('wather: '));
    } finally {
        rl.close();
    }
}

export async function beolvas() {
    return (await fs.readFile(path.join(__filename, '..', '..', 'idojaras.csv'), { encoding: 'utf-8' })).trim().split('\n').slice(1).map(it => {
        const [day, min, max, weather] = it.trim().split(';');
        return new Napidojaras(+day as Day, +min, +max, weather);
    });
}