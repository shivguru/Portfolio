import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GetJsonService {

  constructor(private http: HttpClient) { }

  /**
   * Get the JSON from a URL
   * @param url - URL of the data to be fetched from
   * @returns {Observable<any>} - Returns an observable of the resultent JSON
   */
  getJSON(url): Observable<any> {
    return this.http.get(url)
      .map((res: any) => {
        return  res;
      });
  }

}
