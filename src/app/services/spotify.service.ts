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
      'Authorization':'Bearer BQC5hc2ejtZDGCP9vt8CqX0zqlxyzkI8NqCY0xEZZv__ueFyNmK3VoCBS_NKnROBVFtt8mSTIm3c4Ts6WYI'
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

  getArtist(termino:string)
  {
    // const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQCNi7LVEoVMXovVMxooFhPIJYYmVbxJmyF6qRuN25JkuSKd1axw7WRE9QwAFKNpMI--BjVo63JHIStJ0B8'
    // });
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe(map(data=>
      data['artists'].items));
  }
}
