import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface FavoriteGroup {
  id: number;
  name: string;
}

interface Person {
  name: string;
  favoriteGroups: FavoriteGroup[];
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {
  newGroup:string = '';

  person:Person = {
    name: 'Pablo',
    favoriteGroups: [
      { id: 1, name: 'Queen' },
      { id: 2, name: 'Led Zeppelin' },
    ]
  }
  
  save():void {
    console.log('Form posted');
  }

  remove(index:number):void {
    this.person.favoriteGroups.splice(index, 1);
  }

  add():void {
    const newId: number = this.person.favoriteGroups.length + 1;

    const newFavGroup: FavoriteGroup = {
      id: newId,
      name: this.newGroup,
    }

    this.person.favoriteGroups.push({...newFavGroup});

    this.newGroup = "";
  }
}
