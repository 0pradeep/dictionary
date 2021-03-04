class Definition{
    definition: string;
    synonyms: string[];
    antonyms: string[];
}

class WordMeaning{
    partsOfSpeech: string;
    definitions: Definition[];
}

export class WordInfo{
    word: string;
    phonetics: any[];
    meanings: WordMeaning;
}