import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = "e1ef7a2213ba4a94c9bd5945417e1cf1edafdf53";

  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = 'jasonmuchiri';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid )
    .map(res => res.json());
  }
}
