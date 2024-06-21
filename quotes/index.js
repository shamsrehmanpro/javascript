

const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');
let newButton =  document.querySelector('.new');
let tweetButton = document.querySelector('.tweet');

async function getQuote(){
    const response = await fetch ('https://api.quotable.io/random');
    var data = await response.json();
    quoteText.innerHTML = data.content;
    authorText.innerHTML = data.author;
}

function tweetPost(){
    window.open("https://twitter.com/intent/tweet?text=" + quoteText.innerHTML, "tweet window", "width=600, height=300");
}
