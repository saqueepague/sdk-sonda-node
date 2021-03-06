/**
 * Saque e Pague Sonda
 * Modelo de API para o serviço de sonda da Saque e Pague. Parceiro pode requisitar o último estado de uma transação (cancelada, confirmada ou pendente) através das chamadas desta API. Caso não encontre a transação, o serviço retorna o estado pendente.
 *
 * OpenAPI spec version: 1.1.1-sw2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SaqueEPagueSonda) {
      root.SaqueEPagueSonda = {};
    }
    root.SaqueEPagueSonda.AuthResp = factory(root.SaqueEPagueSonda.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AuthResp model module.
   * @module model/AuthResp
   * @version 1.1.1-sw2
   */

  /**
   * Constructs a new <code>AuthResp</code>.
   * Objeto de resposta de autenticação.
   * @alias module:model/AuthResp
   * @class
   * @param accessToken {String} Token de acesso para requisição de sonda.
   * @param expiresIn {Number} Tempo de expiração do token em segundos.
   * @param tokenType {String} Tipo de token gerado para ser usado na requisição sonda. Deve ser sempre \"bearer\"
   */
  var exports = function(accessToken, expiresIn, tokenType) {
    var _this = this;

    _this['access_token'] = accessToken;
    _this['expires_in'] = expiresIn;
    _this['token_type'] = tokenType;
  };

  /**
   * Constructs a <code>AuthResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthResp} obj Optional instance to populate.
   * @return {module:model/AuthResp} The populated <code>AuthResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Token de acesso para requisição de sonda.
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * Tempo de expiração do token em segundos.
   * @member {Number} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * Tipo de token gerado para ser usado na requisição sonda. Deve ser sempre \"bearer\"
   * @member {String} token_type
   */
  exports.prototype['token_type'] = undefined;



  return exports;
}));


