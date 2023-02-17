import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ViewPlayersComponent } from './view-players/view-players.component';

const routes: Routes = [
  {path:'viewplayers',component:ViewPlayersComponent},
  {path:'addplayer',component:AddPlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
