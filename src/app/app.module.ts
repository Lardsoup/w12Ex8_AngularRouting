import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    UnderConstructionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
