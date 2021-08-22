import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';
import { CoreModule } from './core/core.module';
import { CurseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    CourseInfoComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CurseModule,
    CoreModule,
    //Rotas especiais, path '' rota ele redireciona quando eu tenho o path vazio para a pagina de courses. A path '**' é quando nao encontra o caminho do url
    //eu mando ele para a pagina html error 404
    //a path: 'course' eu informou que na url /courses ele precisa carregar a lista de cursos.
    RouterModule.forRoot([
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
