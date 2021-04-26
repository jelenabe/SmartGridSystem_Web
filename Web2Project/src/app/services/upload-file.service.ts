import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  baseUrl = 'https://localhost:44326/api/upload';

constructor(private http: HttpClient) { }

uploadFile(selectedFiles: File[]) {
  const fd = new FormData();
  for (const selectedFile of selectedFiles) {
    fd.append(selectedFile.name, selectedFile);
  }
  return this.http.post(this.baseUrl, fd);
}

getFile(path: string) {
  const obj: any = {};
  obj.Path = path;
  return this.http.post(this.baseUrl + 'get-event-image', obj);
}

}
