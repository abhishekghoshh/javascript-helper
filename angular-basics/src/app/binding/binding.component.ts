import { Component, OnInit } from '@angular/core';
import { FavoriteState } from '../favourite/favourite.component';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public title = 'This is a binding example';
  public colspan = 5;
  public isActive = true;
  public imageUrl = 'https://avatars3.githubusercontent.com/u/31528255?s=460&u=26403ba4769620c756f93105ac6d575c22c9ff14&v=4';
  public fullName = 'Abhishek';
  public fullname = 'Abhishek';

  public favourite = {
    isLiked: true
  }

  public course = {
    title: 'Sample title for Angular Course',
    rating: 4.551,
    students: 1000,
    price: 100.659,
    releaseData: new Date(2016, 3, 1)
  }

  public loremIpsumText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  constructor() { }

  ngOnInit(): void {
  }
  public onClick(obj: any, $event: any): void {
    console.log(`I am clicked ${obj} `, $event);
  }
  public onButtonClick($event): void {
    $event.stopPropagation();
    console.log('Event Bubbling Button is Clicked');
  }
  public onDivClick(): void {
    console.log('Event Bubbling Div is Clicked');
  }

  public onKeyUpWithoutEventFilter($event: any): void {
    if ($event.keyCode === 13) {
      console.log('Enter is pressed');
    }
  }
  public onKeyUpWithEventFilter(): void {
    console.log('Enter is pressed');
  }
  public onKeyUp($event: any): void {
    console.log($event.target.value);
    //console.log($event.keyCode);
  }
  public onKeyUpWithTemplateVariable(name: any): void {
    console.log(name);
  }

  public logFullname(): void {
    console.log(this.fullname);
  }

  public onFavouriteChanged(favoiriteState: FavoriteState): void {
    console.log("BindingComponent.favoirite is clicked "+favoiriteState.isLiked);
    this.favourite.isLiked = !this.favourite.isLiked;
  }
}
