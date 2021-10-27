import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";

const routes: Routes = [
  {path: "profile", component: ProfileComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "contact", component: ContactComponent},
  {path: "**", redirectTo: "profile"}
];

@NgModule({
 imports: [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }