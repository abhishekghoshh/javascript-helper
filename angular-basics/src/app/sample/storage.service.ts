import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private currentValue = new BehaviorSubject([]);
  private res: any;
  constructor() { }
  public add(res: any):void{
    this.currentValue.next(res);
  }
  public fetch(): BehaviorSubject<any>{
    return this.currentValue;
  }
}
