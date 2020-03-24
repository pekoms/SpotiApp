import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  artists: any[] = [];
  loading:boolean=true;

  constructor(private spotify : SpotifyService) { }

  buscar(termino:string)
  {
    console.log(termino);
    this.spotify.getArtist(termino).subscribe((data:any) =>{
      console.log(data);
      this.artists = data;
      this.loading=false;
    });
  }
  

}
