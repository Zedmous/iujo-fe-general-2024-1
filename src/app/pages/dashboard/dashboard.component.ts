import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',

})
export class DashboardComponent {
  datos:any[]=[{
    name:"ed",
  },
  {
    name:"an",
  },
  {
    name:"ma",
  },{
    name:"gi",
  }
]
}
