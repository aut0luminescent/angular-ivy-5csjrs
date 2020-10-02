import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  @ViewChild('searh') searchBox: ElementRef;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://en.wikipedia.org/api/rest_v1/page/summary/Viljandi').subscribe((res)=> {
      console.log(res);
  })

  }
startSearch () {
  console.log(this.searchBox.nativeElement.value);
}
}