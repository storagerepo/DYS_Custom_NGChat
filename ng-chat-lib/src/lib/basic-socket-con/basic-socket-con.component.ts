import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import $ from 'jquery';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
declare const microlink;

declare var $: $;
@Component({
  selector: 'ng-chat-lib',
  templateUrl: './basic-socket-con.component.html',
  styleUrls: ['./basic-socket-con.component.scss']

})
export class BasicSocketConComponent implements OnInit, AfterViewInit, AfterViewChecked {
  username = '';
  userMood = '';
  WelcomePage: boolean = true;
  showEmojiPicker: boolean = false;
  message: string = '';
  userProfilePic: any = "";
  modalsrc: SafeUrl;
  senderProfilePic = 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg';
  messages = []
  userData: any =
    {
      username: 'Manosingh',
      userMood: 'busybee',
      userProfilePic: "assets/500-6.jpg",
      contacts: [{
        "contactsName": "Cat Doe",
        "contactpic": 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
        "notificationCount": "1",
        "calls": [{
          "time": new Date('05-13-2020'),
          "type": "incoming"
        }],
        "messages": [{
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-11-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        },
        {
          "incomingMessage": true,
          "message": 'https://www.youtube.com/watch?v=2mDCVzruYzQ',
          'urlmatches': ['https://www.npmjs.com/package/ngx-link-preview'],
          "time": new Date('05-12-2020'),
          "type": "link"
        }]
      }, {
        "contactsName": "John Smith",
        "contactpic": 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
        "notificationCount": "2",
        "calls": [{
          "time": new Date('05-13-2020'),
          "type": "incoming"
        }],
        "messages": [{
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        },
        {
          "incomingMessage": true,
          "message": 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
          'urlmatches': ['https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'],
          "time": new Date('05-12-2020'),
          "type": "link"
        }]
      }, {
        "contactsName": "John Hendry",
        "contactpic": 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
        "notificationCount": "0",
        "calls": [{
          "time": new Date('05-13-2020'),
          "type": "missed"
        }],
        "messages": [{
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        },
        {
          "incomingMessage": true,
          'urlmatches': ['https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'],
          "message": 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
          "time": new Date('05-12-2020'),
          "type": "link"
        }]
      }, {
        "contactsName": "Aaron",
        "contactpic": 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
        "notificationCount": "0",
        "calls": [{
          "time": new Date('05-13-2020'),
          "type": "outgoing"
        }],
        "messages": [{
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        },
        {
          "incomingMessage": true,
          'urlmatches': ['https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'],
          "message": 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
          "time": new Date('05-12-2020'),
          "type": "link"
        }]
      }, {
        "contactsName": "John Doe",
        "contactpic": 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
        "notificationCount": "0",
        "calls": [{
          "time": new Date('05-13-2020'),
          "type": "incoming"
        }],
        "messages": [{
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        },
        {
          "incomingMessage": true,
          'urlmatches': ['https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'],
          "message": 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
          "time": new Date('05-12-2020'),
          "type": "link"
        }]
      }, {
        "contactsName": "John Doe",
        "contactpic": 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
        "notificationCount": "0",
        "calls": [{
          "time": new Date('05-13-2020'),
          "type": "outgoing"
        }],
        "messages": [{
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date('05-13-2020'),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": false,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        }, {
          "incomingMessage": true,
          "message": 'hi',
          "time": new Date(),
          "type": "text"
        },
        {
          "incomingMessage": true,
          'urlmatches': ['https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'],
          "message": 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
          "time": new Date('05-12-2020'),
          "type": "link"
        }]
      }]

    }
  searchInput = "";
  status = 1;
  groupArrays: any = [];
  currentcontact: any;
  msgTOBeForwarded: any;
  audio: HTMLAudioElement;
  theme = '';
  defaulttheme = true;
  color;
  bg_color = '#fff';
  sidebar_color = '#e5e9ff';
  send_msg_color = '#c8ebf1';
  rec_msg_color = '#f8f9fa';
  text_color = '#212529';
  themeJson: any = {
    bg_color: '--theme-color',
    sidebar_color: '--theme-sidebar-color',
    send_msg_color: '--send-msg',
    rec_msg_color: '--recieved-msg',
    text_color: '--theme-text-color',
  };
  defaultdateformat = 'DD/MM/YY';
  public showChat: boolean = false;
  public showCalls: boolean = false;
  public showContacts: boolean = false;
  public showNotification: Boolean = false;
  defaultTimeformat: string = 'hh:mm:A';
  previousFormat = 'MM/DD/YY';
  result: any[];
  editable: boolean = false;
  nextmessagestoload: any;
  pushed: boolean;

  constructor(private sanitizer: DomSanitizer, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.changeListShowData(1);
    this.defaultTheme();
    var groups
    var self = this;
    this.userMood = this.userData.userMood;
    this.userProfilePic = this.userData.userProfilePic;
    this.username = this.userData.username;
    this.userData.contacts.forEach(function (contact, index) {

      // this gives an object with dates as keys
      groups = self.userData.contacts[index].messages.reduce((groups, contact) => {
        const date = contact.time.toLocaleDateString().split('T')[0];
        var contacttime = new Date(contact.time.getTime()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        contact['formattedTime'] = contacttime;
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(contact);
        return groups;
      }, {});

      // Edit: to add it in the array format instead
      self.groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          messageGroup: groups[date]
        };
      })
      self.groupArrays.sort((val1, val2) => {
        return Date.parse(val1.date) - Date.parse(val2.date);
      })
      self.userData.contacts[index].messages = self.groupArrays;
      console.log(self.groupArrays, 'groupaary');
    })
    this.changeDateFormat(this.defaultdateformat, this.previousFormat);
    this.playAudio();
  }

  ngAfterViewInit() {
    $('.dropdown-menu button.dropdown-toggle').on('click', function (e) {
      var $el = $(this);
      $el.toggleClass('active-dropdown');
      var $parent = $(this).offsetParent(".dropdown-menu");
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');

      $(this).parent("div").toggleClass('show');

      $(this).parents('div.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-menu .show').removeClass("show");
        $el.removeClass('active-dropdown');
      });

      if (!$parent.parent().hasClass('navbar-nav')) {
        $el.next().css({ "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 });
      }

      return false;
    });
  }

  ngAfterViewChecked() {
    microlink('.link-preview');
  }

  switchTypeOfStatusField(editable) {
    this.editable = editable;
    editable ? document.getElementById("userMood").removeAttribute("readonly") : document.getElementById("userMood").setAttribute("readonly", 'true');
  }

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    // const { message } = this;
    const text = `${this.message}${event.emoji.native}`;

    console.log(event, 'event', event.emoji.native, 'event.emoji.native');

    this.message = text;
    this.showEmojiPicker = false;
  }

  sendMessage() {
    if (this.message.trim() == '') {
      return false;
    }

    let text = JSON.parse(JSON.stringify(this.message));

    var newmessage = {
      "incomingMessage": false,
      "message": '',
      "formattedTime": moment(new Date()).format(this.defaultTimeformat),
      "time": new Date()
    }
    const urlMatches = this.message.match(/\b(http|https)?:\/\/\S+/gi) || [];
    if (urlMatches.length != 0) {
      newmessage['type'] = "link"
    } else {
      newmessage['type'] = "text"
    }
    newmessage.message = text;
    newmessage['urlmatches'] = urlMatches;
    this.pushMessage(newmessage);
    this.message = '';
  }

  toggleSideBar() {
    var el = document.getElementById('wrapper');
    el.classList.toggle("toggled");
  }

  loadMessages(i) {
    this.WelcomePage = false;
    this.currentcontact = i;
    this.messages = this.userData.contacts[i].messages.slice(2, 4);
    this.nextmessagestoload = this.userData.contacts[i].messages.slice(0, 2);
    this.pushed = false;

    var id = 'msg' + (this.messages[this.messages.length - 1].messageGroup.length - 1) + (this.messages.length - 1)
    setTimeout(() => {
      var element = document.getElementById(id);
      element.scrollIntoView();
    }, 0);
    console.log(this.messages, 'asdasdsd');
  }

  uploadFiles(files, index) {
    if (files.length === 0) {
      return;
    }

    var Type = files[0].type.split('/')[0];
    var mimeType = files[0].type.split('/')[index];
    var reader = new FileReader();
    var ImagePath = files;
    console.log(mimeType, 'mimetype', index)
    var typesArray = ['image', 'video', 'pdf', 'audio', 'html', 'vnd.openxmlformats-officedocument.wordprocessingml.document', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.ms-excel', 'plain', 'javascript']
    if (!typesArray.includes(mimeType)) mimeType = undefined;
    if (index == 1 && typesArray.includes(Type)) mimeType = Type;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      var Base64URL = reader.result;
      var newmessage = {
        "incomingMessage": false,
        "message": files[0].name,
        "base64URL": Base64URL,
        "formattedTime": moment(new Date()).format(this.defaultTimeformat),
        "time": new Date(),
        "type": mimeType
      }
      this.pushMessage(newmessage);
    }
  }


  sanitizeURL(url: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  storeTheMessage(data) {
    this.msgTOBeForwarded = data;
  }

  forwardMessage(index) {
    this.messages = this.userData.contacts[index].messages;
    this.msgTOBeForwarded.time = new Date();
    this.msgTOBeForwarded["formattedTime"] = new Date(new Date().getTime()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    this.pushMessage(this.msgTOBeForwarded);
  }


  deleteMessage(index, msgindex) {
    this.messages[msgindex].messageGroup.splice(index, 1);
    if (this.messages[msgindex].messageGroup.length <= 0) {
      this.messages.splice(msgindex, 1);
    }
  }

  playAudio() {
    this.audio = new Audio();
    this.audio.src = "assets/intuition.mp3";
    this.audio.load();
  }


  pushMessage(msg) {
    var dategrp = moment(msg.date).format(this.defaultdateformat);;
    var newDate = true;
    // var self =this;
    this.messages.filter(dategroup => {
      if (dategroup.date == dategrp) {
        newDate = false;
        dategroup.messageGroup.push(msg);
        var id = 'msg' + (dategroup.messageGroup.length - 1) + this.messages.indexOf(dategroup);
        setTimeout(() => {
          var element = document.getElementById(id);
          element.scrollIntoView();
          this.audio.play();
        }, 0);
      }
    })

    newDate ? this.messages.push({ 'date': dategrp, 'messageGroup': [msg] }) : '';
  }

  switchTheme() {
    this.defaulttheme = false
    document.documentElement.style.setProperty('--theme-color', '#343a40');
    document.documentElement.style.setProperty('--theme-text-color', '#f8f9fa');
    document.documentElement.style.setProperty('--recieved-msg', 'black');
    document.documentElement.style.setProperty('--send-msg', '#6c757d');
    document.documentElement.style.setProperty('--hover-color', '#c3c7cc');
    document.documentElement.style.setProperty('--theme-sidebar-color', '#343a40');
    this.bg_color = '#343a40';
    this.sidebar_color = '#343a40';
    this.send_msg_color = '#6c757d';
    this.rec_msg_color = '#black';
    this.text_color = '#f8f9fa';

  }

  defaultTheme() {
    this.defaulttheme = true;
    document.documentElement.style.setProperty('--theme-color', '#fff');
    document.documentElement.style.setProperty('--theme-text-color', '#212529');
    document.documentElement.style.setProperty('--recieved-msg', '#f8f9fa');
    document.documentElement.style.setProperty('--send-msg', '#c8ebf1');
    document.documentElement.style.setProperty('--theme-sidebar-color', '#e5e9ff');
    document.documentElement.style.setProperty('--hover-color', '#c8ebf1');
    this.bg_color = '#fff';
    this.sidebar_color = '#e5e9ff';
    this.send_msg_color = '#c8ebf1';
    this.rec_msg_color = '#f8f9fa';
    this.text_color = '#212529';
  }

  changeTheme(property, propertyColour) {
    document.documentElement.style.setProperty(this.themeJson[property], propertyColour);
  }

  changeDateFormat(format, oldformat) {
    this.userData.contacts.forEach(msg => {
      msg.messages.forEach(dateInMsg => {
        dateInMsg.date = moment(dateInMsg.date, oldformat).format(format);
      })
    })
    this.defaultdateformat = format;
    this.previousFormat = format;
  }

  changeTimeFormat(format) {
    this.userData.contacts.forEach(msg => {
      msg.messages.forEach(dateInMsg => {
        dateInMsg.messageGroup.forEach(times => {
          times.formattedTime = moment(times.time).format(format);
        })

      })
    })
    this.defaultTimeformat = format;
  }

  changeListShowData(clikedColumn) {
    var self = this;
    if (clikedColumn == 1) {
      self.showChat = true;
      self.showNotification = false;
      self.showCalls = false;
      self.showContacts = false
    } else if (clikedColumn == 2) {
      self.showChat = false;
      self.showNotification = false;
      self.showCalls = true;
      self.showContacts = false
    } else if (clikedColumn == 3) {
      self.showChat = false;
      self.showNotification = false;
      self.showCalls = false;
      self.showContacts = true;
      self.loadContacts();
    } else if (clikedColumn == 4) {
      self.showChat = false;
      self.showNotification = true;
      self.showCalls = false;
      self.showContacts = false
    }
  }

  uploadProfilePic(files) {
    if (files.length === 0) {
      return;
    }
    var mimeType = files[0].type;
    var reader = new FileReader();
    var ImagePath = files;

    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.userProfilePic = reader.result;
    }
  }

  loadContacts() {

    const sorted = JSON.parse(JSON.stringify(this.userData.contacts.sort((a, b) => a.contactsName > b.contactsName ? 1 : -1)))

    const grouped = sorted.reduce((groups, contact) => {
      const letter = contact.contactsName.charAt(0).toUpperCase();
      groups[letter] = groups[letter] || [];
      groups[letter].push(contact);
      return groups;
    }, {});

    this.result = Object.keys(grouped).map(key => ({ key, contacts: grouped[key] }));
    console.log(this.result, 'grouped');

  }

  onScrollDown() {
    console.log('im down');
  }

  onScrollUp() {
    console.log('im up');
    if(!this.pushed){
    this.spinner.show();
    this.loadNextPost();
    }
  }

  loadNextPost() {
    if(!this.pushed){
      this.messages = [...this.nextmessagestoload,...this.messages];
      this.pushed = true;
      setTimeout(() => {
      this.spinner.hide();        
      }, 2000);
    }

  }

}