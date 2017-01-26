'use strict';


document.addEventListener('DOMContentLoaded', function(){
  var Irwin=['Hey, I hear New Hampshire is quite beautiful in the summer. Is that true?',
 'No way man, Tom Brady is the GOAT - get that trash outta here!',
 'You're kind of weird',
 'nm what's up with you?'];
  var responses = document.querySelector('#message-input input');

  var addInput = document.querySelector('#message-input input');
  var sendButton = document.querySelector('#message-input button');
  var showText    = document.querySelector('#conversation ul');

  function toggleText(event){
    event.target
    .toggle('message-input');
  }

  sendButton.addEventListener('click',function(){
    if (responses.value!== ''){
      console.log(responses.value);
      var text = document.createElement('li');
      text.textContent = responses.value;
      text.addEventListener('click', toggleText);
      showText.appendChild(text);
    }
  });

  responses.addEventListener('keypress', function(event){
    console.log(event);
    if((event.which == 13) && (responses.value !== '')){
      var text=document.createElement('li');
      text.textContent = responses.value;
      text.addEventListener('click', toggleText);
      showText.appendChild(text);

    responses.value='';
    }
  });



});
