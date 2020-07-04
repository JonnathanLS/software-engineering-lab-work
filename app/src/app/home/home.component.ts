import { Component, OnInit } from '@angular/core';
import { APIService } from '../api/api.service';
import { Evaluation } from '../model-interfaces/evaluation';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	evaluations: Evaluation[] = []

	

	ngOnInit(): void {
		
	}

}
