import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData: String = 'hello';
  imgFolder: String = 'http://media.mw.metropolia.fi/wbma/uploads/'
  imgURL: String = ''

  constructor(private http: HttpClient) { }

  /*makes a request and subscribes to the response. Save response into a variable (data) */
  getJSON() {
    this.http.get('assets/package.json').subscribe((data) => {
      console.log(data);
    this.someData = data['license']; //this.someData = data.license;
    });
  }

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe((data) => {
      console.log(data);
      this.imgURL = data[0].filename;
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}

