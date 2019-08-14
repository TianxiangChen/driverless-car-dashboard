import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';
import { switchMap, map, delay, retryWhen} from 'rxjs/operators';

const SERVER_API: string = 'http://localhost:5000/todo/api/v1.0/tasks';


@Injectable()
export class DataService {
  constructor(private _http: Http){
    console.log('DataService initialized...');
  };

  getSomeData(){
    return this._http.get(SERVER_API)
      .pipe(map(res=>res.json()));
  };

}
