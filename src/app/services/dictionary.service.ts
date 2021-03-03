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
    // return {
    //   "word": "dictionary",
    //   "phonetics": [
    //     {
    //       "text": "/ˈdɪkʃəˌnɛri/",
    //       "audio": "https://lex-audio.useremarkable.com/mp3/dictionary_us_1.mp3"
    //     }
    //   ],
    //   "meanings": [
    //     {
    //       "partOfSpeech": "noun",
    //       "definitions": [
    //         {
    //           "definition": "A book or electronic resource that lists the words of a language (typically in alphabetical order) and gives their meaning, or gives the equivalent words in a different language, often also providing information about pronunciation, origin, and usage.",
    //           "example": "I'll look up ‘love’ in the dictionary",
    //           "synonyms": [
    //             "lexicon",
    //             "wordbook",
    //             "glossary",
    //             "vocabulary list",
    //             "vocabulary",
    //             "word list",
    //             "wordfinder"
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       "partOfSpeech": "verb",
    //       "definitions": [
    //         {
    //           "definition": "A book or electronic resource that lists the words of a language (typically in alphabetical order) and gives their meaning, or gives the equivalent words in a different language, often also providing information about pronunciation, origin, and usage.",
    //           "example": "I'll look up ‘love’ in the dictionary",
    //           "synonyms": [
    //             "lexicon",
    //             "wordbook",
    //             "glossary",
    //             "vocabulary list",
    //             "vocabulary",
    //             "word list",
    //             "wordfinder"
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // };
  }
}
