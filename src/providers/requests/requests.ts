import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GenericRequest } from './_generic.requests';
import { Observable } from 'rxjs';

import { Wine } from '../../_models/wine.interface';

@Injectable()
export class RequestsProvider extends GenericRequest {

  path: string;
  constructor(
    http: HttpClient
  ) {
    super(http);
    this.path = 'https://rest.adega.api/123/' // link ficticio
  }

  /**
   * Recebe uma lista do tipo Wine e a exportar para o tipo json, 
   * através de uma requisição post para o path default (url da api rest)
   *
   * @param {Wine[]} wineList // lista de vinhos a ser exportada
   * @returns {Observable<any>}
   * @memberof RequestsProvider
   */
  export(wineList: Wine[]): Observable<any> {
    const body = {
      wines: wineList
    }
    return this.post<any>(this.path, body);
  }

}
