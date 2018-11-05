import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/Rx';
const TIMEOUT_REQUEST: number = 30000;

/**
 * Classe generica para requisições em modo http utilizando o biblioteca HttpClient do angular. 
 *
 * @export
 * @class GenericRequest
 */
export class GenericRequest {

  /**
   * Construtor, recebe o paramentro do tipo HttpClient quando chamada por uma classe filha. 
   * @param {HttpClient} http
   * @memberof GenericRequest
   */
  constructor(
    private http: HttpClient
  ) {
    this.http = http;
  }

  /**
   * Função responsável por criar o header da requisição que será feita. 
   * Pode ser recebido um token do tipo string, caso seja passado este parâmentro 
   * o header será montado com Authorization do tipo token.
   * 
   * O Content-Type default das requisições é do tipo application/json
   *
   * @private
   * @param {string} [token] token único
   * @returns {HttpHeaders}
   * @memberof GenericRequest
   */
  private generateHeaders(token?: string): HttpHeaders {

    let headers: HttpHeaders;

    if (token) {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token 
      });
    } else {
      headers = new HttpHeaders({
        'Content-Type': 'application/jsonp',
      });
    }
      
    return headers;
  }

  /**
   * Requisição do tipo GET. 
   * 
   * Irá receber uma url para a requisição e pode ou não receber um token. 
   * Ao ser chamada deve ser atribuído do tipo de dado esperado da requisição. 
   * Este tipo de dado está representado pelo T. A resposta da função é um Observable 
   * do tipo passado previamente na chamada da função.
   * 
   * Esta requisição usa o timeout da biblioteca Rx, setado previamente para 30 segundos. 
   * 
   * @example GenericRequest.get<string>(http://<webservice>, token);
   *
   * @protected
   * @template T tipo de dado que deve receber
   * @param {string} url end point da API
   * @param {string} [token] token único
   * @returns {Observable<T>}
   * @memberof GenericRequest
   */
  protected get<T>(url: string, token?: string): Observable<T>{

    let options = {
      headers: this.generateHeaders(token),
    };

    return this.http.get<T>(url,  options).timeout(TIMEOUT_REQUEST);
  }

  /**
   * Requisição do tipo POST.
   * 
   * Irá receber uma url, podendo receber também um objeto <body> que será o corpo da requisição 
   * e também um token do tipo string. 
   * 
   * Este tipo de requisição é utilizada geralmente para passar informações privadas para uma api, 
   * tais informações vão dentro do corpo (payload) da requisição. 
   * 
   * Ao chama-la deve-se passar o tipo esperado previamente, devendo ter como resposta um Observable deste mesmo tipo 
   * 
   * Esta requisição usa o timeout da biblioteca Rx, setado previamente para 30 segundos.
   * 
   * @example  
   * let url = http://<webservice>;
   * let body = {
   *  id  : 1234, 
   *  name: user01
   * };
   * GenericRequest.post<string>(url, body, token);
   * @protected
   * @template T tipo de dado que deve receber 
   * @param {string} url end point da API
   * @param {*} [body] corpo da requisição
   * @param {string} [token] token único 
   * @returns {Observable<T>}
   * @memberof GenericRequest
   */
  protected post<T>(url: string, body?: any, token?:string): Observable<T> {

    let options = {
      headers: this.generateHeaders(token),
      reportProgress: true,
    }
    let payload: string = JSON.stringify(body);
    
    console.log('REST REQUEST POST END POINT: ', url);
    console.log('REST REQUEST POST END HEADER: ', options);
    console.log('REST REQUEST POST END PAYLOAD: ', payload);
    return this.http.post<T>(url, payload, options).timeout(TIMEOUT_REQUEST);
  }

  /**
   * Requisição do tipo PATCH.
   *
   * Irá receber uma url, objeto <body> que será o corpo da requisição
   * e também pode receber um token do tipo string.
   *
   * Ao chama-la deve-se passar o tipo esperado previamente, devendo ter como resposta um Observable deste mesmo tipo
   *
   * Esta requisição usa o timeout da biblioteca Rx, setado previamente para 30 segundos.
   * @example GenericRequest.patch<string>(url, body, token);
   * 
   * @protected
   * @template T tipo dado que deve receber
   * @param {string} url end point da API
   * @param {*} body corpo da requisição
   * @param {string} [token] token único
   * @returns {Observable<T>}
   * @memberof GenericRequest
   */
  protected patch<T>(url: string, body: any, token?: string ): Observable<T> {
    let options = {
      headers: this.generateHeaders(token)
    }
    let payload: string = JSON.stringify(body);

    return this.http.patch<T>(url, payload, options).timeout(TIMEOUT_REQUEST);;
  }
}