import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log ('liosto');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAFEKUAXnSYw5xlyvf_qK-sh0wbuKHslNnWwumRPF6BFdPgfq6cSFo9zVdPbP7iE2rTpcSyx6uhXqlU4KYmC6R8OTPuaPM4KvBG_p15NOfLqyvVZJPPvGUMyrQVYpU1mD5C4-K5XcSatp0YR3rV8PiK-Uq00Uo'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe( map( data =>  data['albums'].items ));

  }
  getArtista( termino: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC9ZXm-Ah1WABa4e5eEQaua2xnqSBrkrOpPVsdy6RzboxWU5Wt55Qnndbap4axB1dPxN7UXVdxNCu9Bl7NNxm-Y0XJOK3eCWjJIbgEZS6lKdaqatjI3lGLK4DUSuzA8qXCieLqv-knxywgESi1wQCjLnygg75c'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
    .pipe( map ( data => data['artists'].items));
  }
}
