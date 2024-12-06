import { ObjectId } from 'mongodb';

/**
 * Utilidades basicas do modulo
 */
const basicUtils = {
  /**
   * ve se o id do mongo e real
   * @id {string|number} para ser verificada o id
   * @return {boolean} verdadeiro se real e falso se nao for verdadeiro
   */
  isValidId(id) {
    try {
      ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
};

export default basicUtils;
