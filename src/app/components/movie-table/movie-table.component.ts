import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../models/i-movie';

@Component({
  selector: 'app-movie-table',
  standalone: true,
  imports: [],
  templateUrl: './movie-table.component.html',
  styleUrl: './movie-table.component.css'
})

export class TableComponent implements OnInit {
  movies : IMovie[] = [];
  constructor(private service: MovieService) {}
  ngOnInit(): void {
    this.movies = [
      {id:3, title:'Quem pensa, enriquece', category:'Finança'},
      {id:4, title:'Em busca de nós mesmos', category:'Filosofia'},
      {id:5, title:'A História da Fada Azulina', category:'Conto Infantil'},
    ];
  //apenas para debug:
    for (let b of this.movies ){
      console.log( b.id );
      console.log( b.title );
      console.log( b.category );
    }
  }
}

