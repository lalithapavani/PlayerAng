import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/Models/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit{

  ngOnInit(): void {
  }
  constructor(private playerservice:PlayerService){

  }
  p:Player={playerId:null,playerName:"",age:null,contactNumber:"",email:"",gender:"",sportsName:""};
  
  message:string;
  
  /*constructor(private playerservice:PlayerService) { }

  ngOnInit(): void {
  } */

  saveplayer(data:any):void
  {
   this.playerservice.addplayer(data).subscribe(
     data=>{
       this.message="Player Added Successfully";
    }
   ) 
    console.log(data);
    console.log(this.p);
  }
}
