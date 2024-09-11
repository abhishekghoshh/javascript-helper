import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public links=["sample","binding","directive","template-driven-form","reactive-form"]
  public defaultLinkValue="Select any link";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public navigate(value: string): void{
    if(value !== this.defaultLinkValue){
      console.log(value);
      this.router.navigate([value]);
    }
  }

}
