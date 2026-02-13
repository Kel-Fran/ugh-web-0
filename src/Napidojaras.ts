export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface INapidojaras {
    day: Day;
    tempMin: number;
    tempMax: number;
    weather: string;
};

export class Napidojaras implements INapidojaras {
    day: Day;
    tempMin: number;
    tempMax: number;
    weather: string;

    constructor(day: Day, tempMin: number, tempMax: number, weather: string) {
        this.day = day;
        this.tempMin = tempMin;
        this.tempMax = tempMax;
        this.weather = weather;

        if (day < 0 || day > 6) throw new Error(`invalid day value (expected value to be in range 0..=6, but got ${day})`);
        if (Number.isNaN(tempMin) || !Number.isFinite(tempMin)) throw new Error(`invalid value for tempMin (${tempMin})`);
        if (Number.isNaN(tempMax) || !Number.isFinite(tempMax)) throw new Error(`invalid value for tempMax (${tempMax})`);
    }

    toString() {
        return `[${this.day}]: ${this.weather} (${this.tempMin} - ${this.tempMax})`;
    }
};