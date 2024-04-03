import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RegisterFormComponent } from './register-form/register-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
