import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SampleResolverService implements Resolve<any>{

  private url ='https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: HttpClient,private storageService: StorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :Observable<any> {
    // return this.http.get(this.url).pipe(
    //   map((res: any) => {
    //     // console.log(res);
    //     if (!res) {
    //       throw new Error('Value expected!');
    //     }
    //     return res;
    //   }),
    //   catchError(err => of([]))
    // );

    this.http.get(this.url).subscribe(res=>{
      this.storageService.add(res);
    },error=>{
      throw new Error();
    })
    return of([]);
  }

}
