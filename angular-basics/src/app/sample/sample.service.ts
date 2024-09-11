import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private user = ['Abhishek Ghosh', 'Nasim Molla', 'Bishal Mukherjee', 'Anirban Ghosh'];
  constructor() { }
  public getUser(): Observable<string[]>{
    return of(this.user);
  }
}
