const author = document.getElementById("author");
const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

function getQuote() {
  fetch(" https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let index = Math.floor(Math.random() * 1643);

      quote.innerHTML = `"${data[index].text}"`;
      author.innerHTML = `-${data[index].author}`;
    });
}

window.addEventListener("load", getQuote);

btn.addEventListener("click", getQuote);


