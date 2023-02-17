import { Component } from '@angular/core';
import { Player } from 'src/Models/Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlayerAng';
  user=false;
  admin=true;
}

