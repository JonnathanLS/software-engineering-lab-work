import { Component, OnInit, Input } from '@angular/core';
import { CandidateResultPresenter } from 'src/app/model-interfaces/result';
import { APIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-candidate-result',
  templateUrl: './candidate-result.component.html',
  styleUrls: ['./candidate-result.component.css']
})
export class CandidateResultComponent implements OnInit {

  @Input() candidate: CandidateResultPresenter;
  panelOpenState = false;
  
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
  }

  downloadCurriculum = () => {
    this.apiService.get.candidate_curriculum(this.candidate._id).subscribe(
      curriculum => {
        console.log("Download do currículo do candidato concluído.", curriculum);
        const url = window.URL.createObjectURL(new Blob([curriculum as BlobPart], { type: 'application/pdf' }));
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.setAttribute('style', 'display: none');
        link.href = url;
        link.download = `Curriculo-${this.candidate.name}.pdf`;
        link.click();
      },
      error => console.error(error)
    );
  }

}
