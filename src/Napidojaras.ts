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
    }

    toString() {
        return `[${this.day}]: ${this.weather} (${this.tempMin} - ${this.tempMax})`;
    }
};