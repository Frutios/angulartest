import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Generations } from '../composants/generation';
@Injectable({
  providedIn: 'root'
})
export class GenerationService {

  private generationUrl: string;
  constructor(private http: HttpClient) { 
      
      this.generationUrl = 'http://localhost:8000/api/genrations';
  }

public findAll(): Observable<Generations[]>{
  

  return this.http.get<Generations[]>(this.generationUrl);
  
}
  


}
