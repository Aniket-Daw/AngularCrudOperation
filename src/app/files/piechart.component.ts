import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { HttpserviceService } from './httpservice.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PiechartComponent implements OnInit, OnDestroy {

   employees:any[]=[];
   user1:number=0;
   user2:number=0;
   user3:number=0;
   user4:number=0;
   user5:number=0;
   user6:number=0;
   user7:number=0;
   user8:number=0;
   user9:number=0;
   user10:number=0;
   private dataSubscribe;

   options:any={
	title: {
		text: "Based on users' comments"
	},
	data: [{
			type: "pie",
			startAngle: 45,
			showInLegend: "true",
			legendText: "{label}",
			indexLabel: "{label} ({y})",
			yValueFormatString:"#,##0.#'%'",
			dataPoints: []
	}]
};


  constructor(private httpservice:HttpserviceService, private router:Router) { }

  ngOnInit(): void {
     this.dataSubscribe=
     this.httpservice.getEmployees().subscribe((data: any[])=>{
      console.log(JSON.stringify(data));
      this.employees = data;
      for(var i=0;i<data.length;i++){
            if(data[i].userId==1){
               this.user1=this.user1+1 
            }
            else if(data[i].userId==2){
               this.user2=this.user2+1 
            }
            else if(data[i].userId==3){
               this.user3=this.user3+1 
            }
            else if(data[i].userId==4){
               this.user4=this.user4+1 
            }
            else if(data[i].userId==5){
               this.user5=this.user5+1 
            }
            else if(data[i].userId==6){
               this.user6=this.user6+1 
            }
            else if(data[i].userId==7){
               this.user7=this.user7+1 
            }
            else if(data[i].userId==8){
               this.user8=this.user8+1 
            }
            else if(data[i].userId==9){
               this.user9=this.user9+1 
            }
            else{
               this.user10=this.user10+1 
            }
      }
      this.options.data[0].dataPoints.push({label: "User1", y: this.user1/data.length*100});
      this.options.data[0].dataPoints.push({label: "User2", y: this.user2/data.length*100});
      this.options.data[0].dataPoints.push({label: "User3", y: this.user3/data.length*100});
      this.options.data[0].dataPoints.push({label: "User4", y: this.user4/data.length*100});
      this.options.data[0].dataPoints.push({label: "User5", y: this.user5/data.length*100});
      this.options.data[0].dataPoints.push({label: "User6", y: this.user6/data.length*100});
      this.options.data[0].dataPoints.push({label: "User7", y: this.user7/data.length*100});
      this.options.data[0].dataPoints.push({label: "User8", y: this.user8/data.length*100});
      this.options.data[0].dataPoints.push({label: "User9", y: this.user9/data.length*100});
      this.options.data[0].dataPoints.push({label: "User10", y: this.user10/data.length*100});
      $("#chartContainer").CanvasJSChart(this.options);

    });

  }

  gotohome(){
     this.dataSubscribe.unsubscribe();
     this.router.navigate(['./home']);
  }

  ngOnDestroy():void{
      this.dataSubscribe.unsubscribe();
  }

}
