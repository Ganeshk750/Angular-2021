import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ChartsModule } from 'ng2-charts';
import { ChartRoutingModule } from './chart-routing.module';
import { LineGraphComponent } from './components/line-graph/line-graph.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { PiGraphComponent } from './components/pi-graph/pi-graph.component';
import { BubbleGraphComponent } from './components/bubble-graph/bubble-graph.component';
import { RadarGraphComponent } from './components/radar-graph/radar-graph.component';
import { DoughnutGraphComponent } from './components/doughnut-graph/doughnut-graph.component';


@NgModule({
  imports: [
    CommonModule,
    ChartRoutingModule,
  //  ChartsModule
  ],
  declarations: [
    LineGraphComponent, 
    BarGraphComponent, 
    PiGraphComponent, 
    BubbleGraphComponent, 
    RadarGraphComponent, 
    DoughnutGraphComponent
  ]
})
export class ChartModule { }
