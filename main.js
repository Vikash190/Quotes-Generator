  
var quoteMaster = [
  { quote: "Moral indignation is jealousy with a halo." , 
     name: "H. G. Wells" , },
  
   { quote: "Glory is fleeting, but obscurity is forever." ,
  name: 'Napoleon Bonaparte' },
  
  { quote: "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts." ,
  name: "Bertrand Russell" }, 
  
  {quote: "Victory goes to the player who makes the next-to-last mistake.", 
   name: 'Chessmaster Savielly '}, 
  
  {quote: "Don't be so humble - you are not that great.", 
   name: 'Golda Meir'},
  
  {quote: "If a man does his best, what else is there?", 
   name: 'General George S. Patton '}, 
  
  {quote: "Political correctness is tyranny with manners." , 
   name: "Charlton Heston "},
  
  {quote: "When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion." , 
   name: 'Robert Pirsig '}, 
  
  {quote: "I can write better than anybody who can write faster, and I can write faster than anybody who can write better." , 
   name: 'A. J. Liebling '},
  
  {quote: "People demand freedom of speech to make up for the freedom of thought which they avoid." , 
   name: 'Soren Aabye Kierkegaard'}, 
  
  {quote: "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former." , 
   name: 'Albert Einstein '}, 
  
  {quote: "A lie gets halfway around the world before the truth has a chance to get its pants on.", 
   name: "Sir Winston Churchill"}, 
  
  {quote: "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use." , name: "Galileo Galilei "}, 
  
  {quote:"We are all atheists about most of the gods humanity has ever believed in. Some of us just go one god further.", 
   name: "Richard Dawkins "}, 
  
  {quote: "Never say never, because limits like fears are always just an illusion", 
   name: "Michael Jordan"}, 
  
  {quote:"I'm living so far beyond my income that we may almost be said to be living apart." , 
   name: "e e cummings "},
  
  {quote: "Each problem that I solved became a rule which served afterwards to solve other problems." , 
   name: "Rene Descartes"}, 
  
  {quote: "In the End, we will remember not the words of our enemies, but the silence of our friends." , 
   name: "Martin Luther King Jr"},
  
  {quote: "The only way to get rid of a temptation is to yield to it." , 
   name: "Oscar Wilde "}, 
  
  {quote: "I don't know why we are here, but I'm pretty sure that it is not in order to enjoy ourselves." , 
   name: "Ludwig Wittgenstein "},
  
  {quote: "Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity." , 
   name: "Martin Luther King Jr."}, 
  
  {quote: "Happiness equals reality minus expectations." , 
   name: "Tom Magliozzi"},
  
  {quote: "If you can't get rid of the skeleton in your closet, you'd best teach it to dance." , name: "George Bernard Shaw "}, 
  
  {quote: "Good people do not need laws to tell them to act responsibly, while bad people will find a way around the laws." , 
   name: "Plato "},
  
  {quote:"Everybody pities the weak; jealousy you have to earn." , 
   name: "Arnold Schwarzenegger "},
  
  {quote:"Never interrupt your enemy when he is making a mistake." , 
   name: "Napoleon Bonaparte"}, 
  
  {quote: "The difference between 'involvement' and 'commitment' is like an eggs-and-ham breakfast: the chicken was 'involved' - the pig was 'committed'." , 
   name: "unknown"}, 
  
  {quote: "Life isn't about waiting for the storm to pass; it's about learning to dance in the rain." , 
   name: "Vivian Greene"}, 
  
  {quote: "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters." ,     name: "Frank Lloyd Wright "}, 
  
  {quote: "When you do the common things in life in an uncommon way, you will command the attention of the world." , 
   name: "George Washington Carver "}, 
  
  {quote: "I begin by taking. I shall find scholars later to demonstrate my perfect right." , 
   name: "Frederick (II) the Great"}, 
  
  {quote: "Blessed is the man, who having nothing to say, abstains from giving wordy evidence of the fact." , 
   name: "George Eliot "}
];

var num = quoteMaster.length;
var quoteRendered= document.getElementById("p1");

var quoteRenderedBy = document.getElementById("p2");

var handler= function(event){
  for(var i=0;i<num;i++){
    var x= Math.floor(Math.random()*num);
    var quoteText=quoteMaster[x].quote;
    var quoteTextBy=quoteMaster[x].name;
  }
  quoteRendered.innerHTML=quoteText;
  quoteRenderedBy.innerHTML=quoteTextBy;
};
var button=document.getElementById("but");
button.addEventListener('click', handler);
