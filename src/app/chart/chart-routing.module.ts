import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineGraphComponent } from './components/line-graph/line-graph.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { PiGraphComponent } from './components/pi-graph/pi-graph.component';
import { RadarGraphComponent } from './components/radar-graph/radar-graph.component';
import { BubbleGraphComponent } from './components/bubble-graph/bubble-graph.component';
import { DoughnutGraphComponent } from './components/doughnut-graph/doughnut-graph.component';


const routes: Routes = [
  { 
    path: '',
    children:[
      { path:'line', component: LineGraphComponent},
      { path:'bar', component: BarGraphComponent},
      { path:'pie', component: PiGraphComponent},
      { path:'radar', component: RadarGraphComponent},
      { path:'bubble', component: BubbleGraphComponent},
      { path: 'doughnut', component: DoughnutGraphComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
