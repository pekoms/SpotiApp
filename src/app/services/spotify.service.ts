import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) 
  { 
    console.log('Spotify Listo');
  }

  getNewReleases()
  {
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBatEBVziWgcO_-zH23F1sBKpF6tbs0vZNZFpfytuUHoMsSYuiXfnl-3IBM7r7RZFsKglfkITJGEmliXuE'
    });
   return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});
  }
}
