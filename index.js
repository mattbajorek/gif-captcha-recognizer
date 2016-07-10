var recognizer = require('captcha-recognizer');

// Recognize text of any language in any format
recognizer.process('captcha_challenge.gif', function(err, text) {
  if(err) {
    console.log(err);
  } else {
    console.log('R', text);
  }
});