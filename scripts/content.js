const article = document.querySelector("article");

//document.querySelector may return null if the selector doesnt match anything
if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g; //regular expression
    const words = text.matchAll(wordMatchRegExp); //match all resturns as iterator
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount/200);
    const badge = document.createElement("p");
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = '${readingTime} min read';

    const heading = article.querySelector("h1");
    const date = article.querySelector("time")?.parentNode;

    (date ?? heading).insertAdjacentElement("afterend", badge)
} 