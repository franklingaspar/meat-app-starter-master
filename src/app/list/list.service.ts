import {Injectable} from '@angular/core'
import {Http, Headers, RequestOptions} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import {Church, Result} from './list-item/list-item.model'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {ErrorHandler} from '../app.error-handler'
import {DISCIPLO_API} from '../app.api'

@Injectable()

export class ListService{

  constructor(private http: Http){}

  churchMethodList(): Observable<Result<Church[]>> {
    let headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/v1+json;qs=0.9','X-System-Token': '4GGWIxay6jDkxSxycdvFow=='  });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${DISCIPLO_API}/church/list`, {"church_name": "curitiba",  "church_nameOperator": "LIKE",  "page": 1,  "rownum": 10000}, options)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  church(): Observable<Church> {
    let headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/v1+json;qs=0.9','X-System-Token': '4GGWIxay6jDkxSxycdvFow=='  });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${DISCIPLO_API}/church/61`, options).map(response => response.json()).catch(ErrorHandler.handleError);
/*

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${DISCIPLO_API}/church/61`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  */
  }
}
