import { beolvas, maiidojaras } from "./idojaraskezeles";

(async () => {
    console.log(`${[...(await beolvas()), await maiidojaras()].sort((a,b) => b.tempMax - a.tempMax)[0]}`);
})();