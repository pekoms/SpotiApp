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
      'Authorization':'Bearer BQCNi7LVEoVMXovVMxooFhPIJYYmVbxJmyF6qRuN25JkuSKd1axw7WRE9QwAFKNpMI--BjVo63JHIStJ0B8'
    });
   return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});
  }

  getArtist(termino:string)
  {
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCNi7LVEoVMXovVMxooFhPIJYYmVbxJmyF6qRuN25JkuSKd1axw7WRE9QwAFKNpMI--BjVo63JHIStJ0B8'
    });
   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{headers});
  }
}
