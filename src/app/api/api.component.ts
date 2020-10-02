import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=viljandi&key=AIzaSyBgIfGottWf-wgv4KEVu1KPQBI7lRyItRo', (
      headers: 'Authorization': 'Bearer AIzaSyBgIfGottWf-wgv4KEVu1KPQBI7lRyItRo',
    )).subscribe((res)=> (
      console.log(res);
    ))

  }

}