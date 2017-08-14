import { BrazilValidator } from './brazil.validator';

export class CnpjValidator implements BrazilValidator {
    validate(cnpj: string): boolean {
        const newCnpj = cnpj.replace(/[^\d]/g, '');
        const regex = /^(0{14}|1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|9{14})$/;
        if (!newCnpj || newCnpj.length !== 14 || regex.test(newCnpj)) {
            return false;
        }
        const factors = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const cnpjArray = newCnpj.split('');
        let n = 0;
        for (let i = 0; i < 12; i++) {
            n += cnpjArray[i.toString()] * factors[i + 1];
        }
        n = 11 - n % 11;
        n = n >= 10 ? 0 : n;
        if (parseInt(cnpjArray[12]) !== n) {
            return false;
        }
        n = 0;
        for (let i = 0; i <= 12; i++) {
            n += cnpjArray[i.toString()] * factors[i];
        }
        n = 11 - n % 11;
        n = n >= 10 ? 0 : n;
        if (parseInt(cnpjArray[13]) !== n) {
            return false;
        }
        return true;
    }
}