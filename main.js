var btn=document.getElementById('btn');
var output= document.getElementById('output');

let quote=[
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa"
]
btn.addEventListener('click',function(){
    var randomQuote= quote[Math.floor(Math.random()* quote.length)]
    output.innerHTML= randomQuote
})