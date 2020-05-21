import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  //get User
  getUser(data): Promise<any> {
    return this.httpClient.post("/User/getUser",data)
      .toPromise()
      .then(function (res) {
        return res;
      }, function (err) {
        return { "error": "Something went wrong" };
      })
  };

    //get User
    createConnection(data): Promise<any> {
      return this.httpClient.post("/User/createConnection",data)
        .toPromise()
        .then(function (res) {
          return res;
        }, function (err) {
          return { "error": "Something went wrong" };
        })
    };


}
