import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input("isLiked") public isLiked: boolean;
  @Output("changed") public changed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public getAppliedClass(): string {
    return !this.isLiked ? "btn-info" : "btn-primary";
  }
  public sendData(): void {
    console.log("FavouriteComponent.favoirite is clicked");
    this.changed.emit({ isLiked: this.isLiked });
  }
}


export interface FavoriteState {
  isLiked: boolean;
}