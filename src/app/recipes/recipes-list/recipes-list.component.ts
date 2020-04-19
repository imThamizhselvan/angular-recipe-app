import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('steak', 'beef', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sliced_Matsusaka_wagyu_beef.jpg/800px-Sliced_Matsusaka_wagyu_beef.jpg'),
    new Recipe('steak', 'beef', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sliced_Matsusaka_wagyu_beef.jpg/800px-Sliced_Matsusaka_wagyu_beef.jpg')

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
