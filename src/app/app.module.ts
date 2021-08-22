import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseInfoComponent } from './courses/course-info.component';
import { CoreModule } from './core/core.module';
import { CurseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
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
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
