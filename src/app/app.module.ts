import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Rotas especiais, path '' rota ele redireciona quando eu tenho o path vazio para a pagina de courses. A path '**' é quando nao encontra o caminho do url
    //eu mando ele para a pagina html error 404
    //a path: 'course' eu informou que na url /courses ele precisa carregar a lista de cursos.
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },


      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },

      {
        path: '',redirectTo: 'courses',pathMatch:'full'
      },

      {
        path: '**', component: Error404Component
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
