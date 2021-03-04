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

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    this.audio = new Audio();
  }

  getMeaning(word:string){
    this.dictionaryService.getDictionaryMeaning(word).subscribe(wInfo => {
      this.wordInfo = wInfo;
      this.audio.src = this.wordInfo[0].phonetics[0].audio;
      if(this.audio.src.length > 0) this.disableBtn = false;
      console.log(this.wordInfo);
    });
  }

  playWordAudio(){
    this.audio.load();
    this.audio.play();
  }

}
