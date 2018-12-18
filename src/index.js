/**
 * Sonda Saque e Pague
 * Modelo de API para o serviço de sonda da Saque e Pague
 *
 * OpenAPI spec version: 1.0.1
 * Contact: captura_atm@saqueepague.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SondaReq', 'model/SondaReqInfTransacao', 'model/SondaReqTerminal', 'model/SondaResp', 'model/SondaRespInfTransacao', 'api/ActuatorControllerApi', 'api/SondaApiControllerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/SondaReq'), require('./model/SondaReqInfTransacao'), require('./model/SondaReqTerminal'), require('./model/SondaResp'), require('./model/SondaRespInfTransacao'), require('./api/ActuatorControllerApi'), require('./api/SondaApiControllerApi'));
  }
}(function(ApiClient, SondaReq, SondaReqInfTransacao, SondaReqTerminal, SondaResp, SondaRespInfTransacao, ActuatorControllerApi, SondaApiControllerApi) {
  'use strict';

  /**
   * Modelo_de_API_para_o_servio_de_sonda_da_Saque_e_Pague.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SondaSaqueEPague = require('index'); // See note below*.
   * var xxxSvc = new SondaSaqueEPague.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SondaSaqueEPague.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SondaSaqueEPague.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SondaSaqueEPague.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The SondaReq model constructor.
     * @property {module:model/SondaReq}
     */
    SondaReq: SondaReq,
    /**
     * The SondaReqInfTransacao model constructor.
     * @property {module:model/SondaReqInfTransacao}
     */
    SondaReqInfTransacao: SondaReqInfTransacao,
    /**
     * The SondaReqTerminal model constructor.
     * @property {module:model/SondaReqTerminal}
     */
    SondaReqTerminal: SondaReqTerminal,
    /**
     * The SondaResp model constructor.
     * @property {module:model/SondaResp}
     */
    SondaResp: SondaResp,
    /**
     * The SondaRespInfTransacao model constructor.
     * @property {module:model/SondaRespInfTransacao}
     */
    SondaRespInfTransacao: SondaRespInfTransacao,
    /**
     * The ActuatorControllerApi service constructor.
     * @property {module:api/ActuatorControllerApi}
     */
    ActuatorControllerApi: ActuatorControllerApi,
    /**
     * The SondaApiControllerApi service constructor.
     * @property {module:api/SondaApiControllerApi}
     */
    SondaApiControllerApi: SondaApiControllerApi
  };

  return exports;
}));