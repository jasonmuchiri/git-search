import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private accesstoken = "3bc70cf5b0eac2682c73f4f1303bb8ba2167bd0d";

  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = 'jasonmuchiri';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.accesstoken)
    .map(res => res.json());
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + this.accesstoken)
    .map(res => res.json());
  }
  updateProfile(username:string){
    this.username = username;
  }
}
 