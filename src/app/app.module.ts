import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomDatailsComponent } from './room-datails/room-datails.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomUpdateComponent } from './room-update/room-update.component';
import { RoomCreateComponent } from './room-create/room-create.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomDatailsComponent,
    RoomListComponent,
    RoomUpdateComponent,
    RoomCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
