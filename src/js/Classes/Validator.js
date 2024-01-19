export default class Validator {
  /**
   * @method
   * проверяет валидность имени пользователя
   *
   * @param {string | number} name имя пользователя
   *
   * @returns {boolean} имя валидно или нет
   */
  validateUsername(name) {
    return !this.checkForIllegalSymbols(name) ? this.checkRules(name) : false;
  }

  checkForIllegalSymbols(name) {
    return /[^a-z0-9-_]/i.test(name);
  }

  checkRules(name) {
    if (/\d{0,3}}/.test(name)) return false;
    if (/^\d/.test(name) || /\d$/.test(name)) return false;
    if (/^(-|_)/.test(name) || /(-|_)$/.test(name)) return false;

    return true;
  }
}
