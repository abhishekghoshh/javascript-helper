import { Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: any,args?: any){
        let stringValue= <string>value;
        let limit = <number>args ? args:50;
        return stringValue.substr(0,50)+" ...";
    }
}