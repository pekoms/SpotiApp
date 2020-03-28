import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) 
  { 
    console.log('Spotify Listo');
  }

  getQuery(query:string)
  {
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCZRIn6k4SeEyZxDBLWL_KVL_bPwWqB9hKeWYVm6ytN805Jq3iSlF0pedj8x7CsRfDAseZFQXYGsyvpids'
    });

    return this.http.get(URL, {headers});
  }

  getNewReleases()
  {
    // const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQCNi7LVEoVMXovVMxooFhPIJYYmVbxJmyF6qRuN25JkuSKd1axw7WRE9QwAFKNpMI--BjVo63JHIStJ0B8'
    // });

    return this.getQuery('browse/new-releases?limit=20').pipe(map(data=>
      data['albums'].items));
  }

  getArtists(termino:string)
  {
    // const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQCNi7LVEoVMXovVMxooFhPIJYYmVbxJmyF6qRuN25JkuSKd1axw7WRE9QwAFKNpMI--BjVo63JHIStJ0B8'
    // });
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe(map(data=>
      data['artists'].items));
  }

  getArtist(id:string)
  {
    // const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQCNi7LVEoVMXovVMxooFhPIJYYmVbxJmyF6qRuN25JkuSKd1axw7WRE9QwAFKNpMI--BjVo63JHIStJ0B8'
    // });
    return this.getQuery(`artists/${ id }`)//.pipe(map(data=>
    //   data['artists'].items));
  }

  getTopTracks(id:string)
  {
    // const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQCNi7LVEoVMXovVMxooFhPIJYYmVbxJmyF6qRuN25JkuSKd1axw7WRE9QwAFKNpMI--BjVo63JHIStJ0B8'
    // });
    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe(map(data=>
      data['tracks']));
  }
}
