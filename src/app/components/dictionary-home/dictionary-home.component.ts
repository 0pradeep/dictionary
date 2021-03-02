import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary-home',
  templateUrl: './dictionary-home.component.html',
  styles: [
    './dictionary-home.component.css'
  ]
})
export class DictionaryHomeComponent implements OnInit {
  wordInfo: any = {
    "word": "dictionary",
    "phonetics": [
      {
        "text": "/ˈdɪkʃəˌnɛri/",
        "audio": "https://lex-audio.useremarkable.com/mp3/dictionary_us_1.mp3"
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "A book or electronic resource that lists the words of a language (typically in alphabetical order) and gives their meaning, or gives the equivalent words in a different language, often also providing information about pronunciation, origin, and usage.",
            "example": "I'll look up ‘love’ in the dictionary",
            "synonyms": [
              "lexicon",
              "wordbook",
              "glossary",
              "vocabulary list",
              "vocabulary",
              "word list",
              "wordfinder"
            ]
          }
        ]
      },
      {
        "partOfSpeech": "verb",
        "definitions": [
          {
            "definition": "A book or electronic resource that lists the words of a language (typically in alphabetical order) and gives their meaning, or gives the equivalent words in a different language, often also providing information about pronunciation, origin, and usage.",
            "example": "I'll look up ‘love’ in the dictionary",
            "synonyms": [
              "lexicon",
              "wordbook",
              "glossary",
              "vocabulary list",
              "vocabulary",
              "word list",
              "wordfinder"
            ]
          }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
