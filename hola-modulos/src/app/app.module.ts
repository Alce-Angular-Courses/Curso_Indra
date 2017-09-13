import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { FormularioComponent } from './formulario/formulario.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NoticiaComponent } from './noticia/noticia.component'


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IdeasComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
