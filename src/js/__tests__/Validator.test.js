import Validator from '../Classes/Validator';

describe('test method Validator.validateUsername()', () => {
  const validator = new Validator();

  describe('correct name', () => {
    const names = ['Adam', 'Hell666Hell', 'O-R-C', 'T_R_A_L_L', 'GoD'];

    test.each(names)('%p', (name) => {
      expect(validator.validateUsername(name)).toBeTruthy();
    });
  });

  describe('imcorrect name', () => {
    const names = [
      'фывап',
      'Мгрллл',
      'Тралл',
      'Ad666hell_',
      '_GoD',
      'В_Рот_Мне-Ноги',
      '911team',
      'Elf80',
    ];

    test.each(names)('%p', (name) => {
      expect(validator.validateUsername(name)).toBeFalsy();
    });
  });
});
