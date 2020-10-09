import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  apiUrl = 'https://en.wikipedia.org/api/rest_v1/feed/featured/';
  searchResult: any;
  searchImage: string;
  searchList: any;
  Date: any;

  @ViewChild('search') searchBox: ElementRef<HTMLInputElement>;
  @ViewChild('search1') searchBox1: ElementRef<HTMLInputElement>;
  @ViewChild('search2') searchBox2: ElementRef<HTMLInputElement>;


  constructor(public http: HttpClient) { }

  ngOnInit() {}

startSearch () {
    const searchTerm = this.searchBox.nativeElement.value + "/" + this.searchBox1.nativeElement.value + "/" + this.searchBox2.nativeElement.value;

    this.http.get( this.apiUrl + searchTerm, {
    }).subscribe((res)=> {
        console.log(res);
        this.searchResult = res;
        this.searchList = this.searchResult.mostread;
        this.searchImage = this.searchResult.thumbnail ? this.searchResult.thumbnail.source : undefined;
    })
  }

  searchToday () {
    let today = ( new Date() ).toLocaleDateString("fr-CA").replace(/-/g, "/");
  
    const searchTerm = today;

    this.http.get( this.apiUrl + searchTerm, {
    }).subscribe((res)=> {
        console.log(res);
        this.searchResult = res;
        this.searchList = this.searchResult.mostread;
        this.searchImage = this.searchResult.thumbnail ? this.searchResult.thumbnail.source : undefined;
    })
  }

  getImageUrl (page) {
    return page.thumbnail ? page.thumbnail.source : undefined;
  }
}