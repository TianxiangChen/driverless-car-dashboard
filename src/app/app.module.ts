import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImgPlayerComponent } from './imgPlayer/imgPlayer.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { FooterComponent } from './footer/footer.component';
import { InfoBoardComponent } from './infoBoard/infoBoard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImgPlayerComponent,
    MainPageComponent,
    FooterComponent,
    InfoBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
