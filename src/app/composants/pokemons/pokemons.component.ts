import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemon: Pokemon = {
    id: 1,
    name:'Bulbizarre'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
