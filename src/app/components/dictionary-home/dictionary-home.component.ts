import { Component, OnInit } from '@angular/core';
import { WordInfo } from 'src/app/models/WordInfo';
import { DictionaryService } from '../../services/dictionary.service';

@Component({
  selector: 'app-dictionary-home',
  templateUrl: './dictionary-home.component.html',
  styles: [
    './dictionary-home.component.css'
  ]
})
export class DictionaryHomeComponent implements OnInit {
  wordInfo: WordInfo;
  hello: string = 'hello world';

  words = ['a','b','c'];

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    this.dictionaryService.getDictionaryMeaning('dictionary').subscribe(wInfo => {
      this.wordInfo = wInfo;
      console.log(this.wordInfo);
    });
    // this.wordInfo = {
    //   word : '',
    //   phonetics : [],
    //   meanings : []
    // };
  }

  getMeaning(word:string){
    this.dictionaryService.getDictionaryMeaning(word).subscribe(wInfo => {
      this.wordInfo = wInfo;
      console.log(this.wordInfo);
      this.hello = 'FJENFJKSAENGFNskjdnkjnfjknsfd';
    });
    console.log(this.wordInfo);
  }

}
