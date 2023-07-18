import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent implements OnInit {
  recipes: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: { [x: string]: any; }) => {
      const recipesString = params['recipes'];
      if (recipesString) {
        this.recipes = JSON.parse(recipesString);
        console.log("HERE");
      }
    });
  }
}
