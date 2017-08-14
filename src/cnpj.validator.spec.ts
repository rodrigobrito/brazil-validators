import { BrazilValidator, CnpjValidator } from './brazil.validators';

describe('brazil-validators', () => {
    describe('CNPJValidator', () => {
        const validator: BrazilValidator = new CnpjValidator();

        it('should validate 24.061.732/0001-50', function () {
            expect(validator.validate('24.061.732/0001-50')).toBe(true);
        });

        it('should validate 49.352.378/0001-43', function () {
            expect(validator.validate('49.352.378/0001-43')).toBe(true);
        });

        it('should validate 27.603.256/0001-40', function () {
            expect(validator.validate('27.603.256/0001-40')).toBe(true);
        });

        it('should validate 73414055000111', function () {
            expect(validator.validate('73414055000111')).toBe(true);
        });

        it('should not validate equal numbers sequence', function() {
			var template = '##.###.###/####-##';
			for (let i = 0; i < 10; i++) {
				let cnpj = template.replace(/#/g, i.toString());
                expect(validator.validate(cnpj)).toBe(false);
			}
		});
    });
});