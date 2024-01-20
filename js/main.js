



var quoteArray=[
    {
        name:"--Oscar Wilde",
        quote:'“Be yourself; everyone else is already taken.”',
    },
    {
        name:"--Frank Zappa",
        quote:'“So many books, so little time.”',
    },
    {
        name:"--Elbert Hubbard",
        quote:'“A friend is someone who knows all about you and still loves you.”',
    },
    {
        name:'--Wayne Gretzy',
        quote:'"You miss 100% of the shots you do not take."',
    },
    {
            name:'--Oscar Wilde',
            quote:'“Always forgive your enemies; nothing annoys them so much.”',
    },
]
var lastindex=-1;
function GenerateQuote(){
    var random=Math.floor(Math.random()*quoteArray.length);
    while(lastindex==random){
        random=Math.floor(Math.random()*quoteArray.length);
    }
    document.getElementById('quote').innerHTML=quoteArray[random].quote;
    document.getElementById('name').innerHTML=quoteArray[random].name;
    lastindex=random
}



