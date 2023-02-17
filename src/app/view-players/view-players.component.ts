import { Component } from '@angular/core';
import { Player } from 'src/Models/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css']
})
export class ViewPlayersComponent {
  playerlist:Player[];
  message:string;

  constructor(private playerservice:PlayerService) { }


  ngOnInit(): void {
    this.playerservice.getplayers().subscribe(
      data=>{
        this.playerlist=data;
        console.log(this.playerlist);
      });
  }

  clickMethod(player:Player) {
    if(confirm("Are you sure to remove "+player.playerName)) {
      this.playerservice.removeplayer(player.playerId).subscribe()
      {
      this.message="Player Removed Successfully";
      this.playerlist = this.playerlist.filter(item => item.playerId != player.playerId);
      console.log(this.playerlist.length);
      }
    } 
  } 

}
