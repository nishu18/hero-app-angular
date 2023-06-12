import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ContainerComponent } from './container/container.component';
import { TopHeroComponent } from './top-hero/top-hero.component';
import { EditComponent } from './edit/edit.component';
// import { CloseTenderComponent } from './close-tender/close-tender.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {path: "hero", component: ListComponent},
  {path: "dashboard", component: TopHeroComponent},
  {path: "detail/:id", component: EditComponent},
  {path: "list", component: ListComponent},
  // {path: "", component: CloseTenderComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
