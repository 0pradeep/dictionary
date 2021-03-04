import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WordInfo } from '../models/WordInfo';

@Injectable({
  providedIn: 'root'
})

// const params = new  HttpParams().set('_page', "1").set('_limit', "1"); 

export class DictionaryService {
  baseUrl: string = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/';

  constructor(private httpClient: HttpClient) { }

  getDictionaryMeaning(word:string): Observable<WordInfo> {
    let requestUrl = `${this.baseUrl}` + `${word}`;
    console.log(requestUrl);
    
    return this.httpClient.get<WordInfo>(requestUrl);
  }
}
