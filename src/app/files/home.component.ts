import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { HttpserviceService } from './httpservice.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {

  employees:any[] = [];
  private subscribeData;
  constructor(private httpservice:HttpserviceService,private router: Router) { }

  ngOnInit(): void {
     this.subscribeData=
     this.httpservice.getEmployees().subscribe((data: any[])=>{
      console.log(JSON.stringify(data));
      this.employees = data;
      
    });
  }

  gotopieChart(){
  		this.subscribeData.unsubscribe();
  		this.router.navigate(['./piechart']);
  }


  ngOnDestroy():void{
      this.subscribeData.unsubscribe();
  }

}
