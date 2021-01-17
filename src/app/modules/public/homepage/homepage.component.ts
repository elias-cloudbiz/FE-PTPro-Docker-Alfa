// @ts-ignore
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
// @ts-ignore
import { RestfulAPI } from '../../../providers/services/restfulAPI.service';
import { SessionService } from '../../../providers/services/session.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
// @ts-ignore
export class HomepageComponent implements OnInit, AfterViewInit, AfterViewChecked {

  loading = true;
  init_ones = true;
  // @ts-ignore
  @ViewChild('trainers') public scroll;

  PTByRegion: any[] = [];
  PTByCity: any[] = [];
  private Region: string;
  private City: string;




  constructor(private API: RestfulAPI) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log("Home");

    this.getHomeData();
  }

  getHomeData(): void {
    var SessionVars;

    this.API.get('homepage', 'public').subscribe(response => {
      this.PTByRegion = response['State']['Data'].slice(0, 16),
        this.Region = response['State']['Name'],
        this.PTByCity = response['City']['Data'].slice(0, 16),
        this.City = response['City']['Name']
        console.log("Home DATA");

      this.loading = false;

    });

    console.log("Home Data End");

  }


  convert(name): string {

    const value = name.toLocaleLowerCase().replace(/\s/g, '.');
    return value;
  }



  ngAfterViewChecked() {
    if (this.loading == false && this.init_ones == true) {

      this.scroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
      this.init_ones = false;

    }
  }

}
