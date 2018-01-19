import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient){}
  results: any;

search(word:string){
  this.http.get("https://itunes.apple.com/search?term=" + word).subscribe(data => {
    this.results = data["results"];
  })

}



}
