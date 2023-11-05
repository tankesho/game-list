import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign_in', component: SignInComponent},
  {path: 'search', component: SearchComponent},
  {path: 'list/:id', component: ListComponent},
  {path: 'game/:id', component: GameComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
