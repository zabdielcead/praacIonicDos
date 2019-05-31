import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];
// esto fue creado con el comando ng g m pages/posts --routing creo al carpeta de posts para lazyload
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
