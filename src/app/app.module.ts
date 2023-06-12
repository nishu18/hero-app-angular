import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { TopHeroComponent } from './top-hero/top-hero.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { CloseTenderComponent } from './close-tender/close-tender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ListComponent,
    TopHeroComponent,
    EditComponent,
    CloseTenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
