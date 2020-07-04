import { Injectable } from '@angular/core';
import { APIService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private apiService: APIService) { }
  
}
