import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey:''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
