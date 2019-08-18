import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';
import { switchMap, map, delay, retryWhen} from 'rxjs/operators';

const IMG_API: string = 'http://localhost:5000/api/v1.0/imgData';
const DATA_API: string = 'http://localhost:5000/api/v1.0/carData';

@Injectable()
export class DataService {
  constructor(private _http: Http){
    console.log('DataService initialized...');
  };

  getImgData(){
    return this._http.get(IMG_API)
      .pipe(map(res=>res.json()));
  };

  getCarData(){
    return this._http.get(DATA_API)
      .pipe(map(res=>res.json()));
  };

}
