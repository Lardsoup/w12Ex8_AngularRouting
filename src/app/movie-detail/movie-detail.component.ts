import { Component, OnInit } from '@angular/core';
import { Movie } from '../Shared/Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

private movie : Movie;
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    
  }

  public gotoMovies(){
    
  }

}
