import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  uploadForm: FormGroup;
  @Input() candidateId: string;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIService
  ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({ file: null });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
    }
  }
  onSubmit() {
    const file = new FormData();
    file.append('resume', this.uploadForm.get('file').value);
    this.apiService.upload_candidate_curriculum(this.candidateId, file).subscribe(
      response => {
        if (response.status === 201) {
          console.log('Currículo carregado com sucesso');
        }
      },
      error => console.error(error)
    );
  }
}

