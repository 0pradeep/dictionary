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
  audio:any;
  disableBtn:boolean = true;
  recentWords:string[] = [];
  iError:boolean = false;

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    this.audio = new Audio();
  }

  getMeaning(word:string){
    this.dictionaryService.getDictionaryMeaning(word).subscribe(wInfo => {
      this.iError = false;
      this.wordInfo = wInfo;
      this.audio.src = this.wordInfo[0].phonetics[0].audio;
      if(!this.recentWords.includes(word)) this.recentWords.unshift(word);
      if(this.audio.src.length > 0) this.disableBtn = false;
    }, err => {
      this.iError = true;
    });
    if(this.recentWords.length > 4) this.recentWords.length = 4;
    console.log(this.recentWords);
  }

  playWordAudio(){
    this.audio.load();
    this.audio.play();
  }

}
