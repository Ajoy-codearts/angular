import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path:"about-us", component: AboutUsComponent
  },
  {
    path:'service', component: ServiceComponent
  },
  {
    path:'project', component: ProjectComponent
  },
  {
    path:'gallery', component: GalleryComponent
  },
  {
    path:'faq', component: FaqComponent
  },
  {
    path:'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
