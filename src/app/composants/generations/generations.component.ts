import { Component, OnInit } from '@angular/core';
import { GenerationService } from 'src/app/services/generation.service';
import { GENERATIONS } from './mockup';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  constructor(private generationService : GenerationService) { }
  ngOnInit(): void {
  }

 // generations = GENERATIONS;

  generations = this.generationService.findAll;

  

}
