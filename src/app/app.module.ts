import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { IntroComponent } from './intro/intro.component';
import { ListComponent } from './list/list.component';
import { GameComponent } from './game/game.component';
import { SearchComponent } from './search/search.component';
import { GameContainerComponent } from './list/game-container/game-container.component';
import { AddGameFormComponent } from './game/add-game-form/add-game-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignInComponent,
    IntroComponent,
    ListComponent,
    GameComponent,
    SearchComponent,
    GameContainerComponent,
    AddGameFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
