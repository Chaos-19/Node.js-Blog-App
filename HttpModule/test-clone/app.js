const bord = document.querySelector('.bord');
const author = document.querySelector('.blockquote-footer')
let index = 0;
let randomQuote = '';
let quoteContent = '';

async function getRandomQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) throw Error(response.statusText);
    const result = await response.json();
    randomQuote = result;
    quoteContent = randomQuote.content;
  } catch (error) {
    console.log(error);
  }
}


function writer() {
  bord.innerHTML = `${quoteContent.substring(0,index)} <span>\u25AE</span>`

  if (index < String(randomQuote.authorSlug).length){
    author.innerHTML = `${String(randomQuote.authorSlug).substring(0,index)} <span>\u25AE</span>`;
}



  if (randomQuote === '') {
    getRandomQuote();
  }
  if (quoteContent.length > index) {
    setTimeout(writer, 100);
    index++;
  } else if (quoteContent !== '' && quoteContent.length <= index) {
    quoteContent = '';
    randomQuote = '';
    index = 0;
    setTimeout(writer, 2500);
  } else {
    setTimeout(writer, 2000);
  }
}

window.addEventListener('load', writer);

// find out the exact interval between each request  time 

/*  
async function checkResponseTime(testURL) {

  let time1 = performance.now();
  await fetch(testURL);
  let time2 = performance.now();
  return time2 - time1;
}(async () => {
  // for the purpose of this snippet example, some host with CORS response 
responseTime = await checkResponseTime('https://api.quotable.io/random');
})();
*/