import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  recipeID:number = 0;


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.recipeID = +params.get('recipeID')!;
    });
  }
}
