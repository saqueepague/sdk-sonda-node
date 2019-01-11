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
    define(['ApiClient', 'model/SondaReqTerminal', 'model/SondaReqTransacao'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SondaReqTerminal'), require('./SondaReqTransacao'));
  } else {
    // Browser globals (root is window)
    if (!root.SaqueEPagueSonda) {
      root.SaqueEPagueSonda = {};
    }
    root.SaqueEPagueSonda.SondaReq = factory(root.SaqueEPagueSonda.ApiClient, root.SaqueEPagueSonda.SondaReqTerminal, root.SaqueEPagueSonda.SondaReqTransacao);
  }
}(this, function(ApiClient, SondaReqTerminal, SondaReqTransacao) {
  'use strict';




  /**
   * The SondaReq model module.
   * @module model/SondaReq
   * @version 1.1.1-sw2
   */

  /**
   * Constructs a new <code>SondaReq</code>.
   * Objeto da requisição da sonda com informações da transação e do estabelecimento para a procura.
   * @alias module:model/SondaReq
   * @class
   * @param infTransacao {module:model/SondaReqTransacao} 
   * @param terminal {module:model/SondaReqTerminal} 
   */
  var exports = function(infTransacao, terminal) {
    var _this = this;

    _this['InfTransacao'] = infTransacao;
    _this['Terminal'] = terminal;
  };

  /**
   * Constructs a <code>SondaReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SondaReq} obj Optional instance to populate.
   * @return {module:model/SondaReq} The populated <code>SondaReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InfTransacao')) {
        obj['InfTransacao'] = SondaReqTransacao.constructFromObject(data['InfTransacao']);
      }
      if (data.hasOwnProperty('Terminal')) {
        obj['Terminal'] = SondaReqTerminal.constructFromObject(data['Terminal']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SondaReqTransacao} InfTransacao
   */
  exports.prototype['InfTransacao'] = undefined;
  /**
   * @member {module:model/SondaReqTerminal} Terminal
   */
  exports.prototype['Terminal'] = undefined;



  return exports;
}));


