import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient: HttpClient) { }

    getuserConversation(chatid): Promise<any> {
      return this.httpClient.get("/Chat/"+chatid)
        .toPromise()
        .then(function (res) {
          return res;
        }, function (err) {
          return { "error": "Something went wrong" };
        })
    };

    addContact(data): Promise<any> {
      return this.httpClient.post("/Chat/addContact",data)
        .toPromise()
        .then(function (res) {
          return res;
        }, function (err) {
          return { "error": "Something went wrong" };
        })
    };
}
