import { BrazilValidator, CnpjValidator } from './brazil.validators';

export class Startup {
    private static writeLine(text: string): void {
        console.log(text);
    }

    /**
     * Checks CNPJ
     * @param cnpj CNPJ to check.
     * @param validator Brazil validator
     */
    private static checkCnpj(cnpj: string, validator: BrazilValidator) {
        this.writeLine("Validating CNPJ [" + cnpj + "].");
        if (validator.validate(cnpj)) {
            this.writeLine("CNPJ [" + cnpj + "] is valid.");
        }
        else {
            this.writeLine("CNPJ [" + cnpj + "] is invalid.");
        }
    }

    public static main(): void {
        this.checkCnpj('24.061.732/0001-50', new CnpjValidator());
        this.checkCnpj('24.061.732/0001-51', new CnpjValidator());
    }
}

Startup.main();