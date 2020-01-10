import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PopupComponent } from './shared/popup/popup.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'album',
  component: AlbumComponent
}, {
  path: 'aboutus',
  component: AboutUsComponent
}, {
  path: 'contact',
  component: ContactComponent
}, {
  path: 'page-not-fount',
  component: PageNotFoundComponent
},{
  path: 'popup',
  component: PopupComponent
}, {
  path: '**',
  redirectTo: 'page-not-fount',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
