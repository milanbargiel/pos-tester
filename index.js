// The tag lexicon can be found here
// https://www.npmjs.com/package/pos

var pos = require('pos');
var words = new pos.Lexer().lex('This is some sample text. This text can contain multiple sentences.');
var tagger = new pos.Tagger();
var taggedWords = tagger.tag(words);
for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    console.log(word + " /" + tag);
}

// extend the lexicon
tagger.extendLexicon({'Obama': ['NNP']});
tagger.tag(['Mr', 'Obama']);
// --> [[ 'Mr', 'NNP' ], [ 'Obama', 'NNP' ]]