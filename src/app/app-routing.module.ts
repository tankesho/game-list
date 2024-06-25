import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component'
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserComponent},
  {path: 'users/:id', component: ListComponent},
  {path: 'games', component: SearchComponent},
  {path: 'games/:id', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
