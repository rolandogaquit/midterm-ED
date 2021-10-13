import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'skills', component: SkillsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }