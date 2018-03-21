import { Component, OnInit} from '@angular/core';
import { Movie } from '../Shared/Movie';
import { MOCK_MOVIES } from '../Shared/MockMovies';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  private movies : Movie[];
 

  constructor(private movieService : MovieService) {}

  ngOnInit() { this.movies=this.movieService.getMovies();}

   public onSelect(movie : Movie){
    
  }

}
