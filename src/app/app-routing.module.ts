import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { HomeComponent } from 'src/app/views/home/home.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      redirectTo: 'home',
      data: { breadcrumb: 'Home' },
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
