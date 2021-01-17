import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { ChatComponent } from './pages/chat/chat.component';
import { DiscoveryComponent } from './pages/discovery/discovery.component';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: HomeComponent, children: [
      { path: 'home', component: FeedComponent },
      { path: 'discovery', component: DiscoveryComponent},
      { path: 'add', component: AddComponent},
      { path: 'chat', component: ChatComponent},
      { path: 'profile', component: ProfileComponent}
    ]
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
