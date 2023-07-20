import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private apiKey = 'a31230c159ac49ecae4f292d43dc5cfa';

  constructor(private http: HttpClient) {}

  searchRecipesByIngredient(): Observable<any> {
    const url = 'https://api.spoonacular.com/recipes/random?number=28';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams()
      .set('apiKey', this.apiKey)

    return this.http.get(url, { headers, params });
  }

  searchRecipesByFilter(tags:string): Observable<any> {
    const url = 'https://api.spoonacular.com/recipes/random?number=28';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('tags', tags)

    return this.http.get(url, { headers, params });
  }

}