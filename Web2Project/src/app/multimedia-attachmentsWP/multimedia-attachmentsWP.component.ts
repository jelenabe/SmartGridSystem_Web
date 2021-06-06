import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-multimedia-attachmentsWP',
  templateUrl: './multimedia-attachmentsWP.component.html',
  styleUrls: ['./multimedia-attachmentsWP.component.css']
})
export class MultimediaAttachmentsWPComponent implements OnInit {

  
  multimediaModel: any= {}
  selectedImage: any = null;
  pathFile: any = {};

  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private router: Router,
    private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  upload(){

    this.multimediaModel.view = 4;

    if(this.selectedImage == null){
      this.newItemEvent.emit(this.multimediaModel);
      this.multimediaModel.pictures = null;
      this.router.navigateByUrl('/newPlan/equipment');
    }
    else
    {
      this.uploadService.uploadFile(this.selectedImage).subscribe((uploadResponse) => {
        this.pathFile = uploadResponse;
        this.multimediaModel.pictures = this.pathFile.dbPath;
        this.newItemEvent.emit(this.multimediaModel);
      
        this.router.navigateByUrl('/newPlan/equipment');
      });
    }
    
  }
  onFileSelected(event: any) {
    this.selectedImage = event.target.files;
  }



}
