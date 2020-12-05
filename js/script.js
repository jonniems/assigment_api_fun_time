//Set Date and Time to same notation as Twitter
const monthName = month => {
    if (month == 01) { return "jan."; }
    else if (month == 02) { return "feb."; }
    else if (month == 03) { return "mar."; }
    else if (month == 04) { return "apr."; }
    else if (month == 05) { return "may"; }
    else if (month == 06) { return "jun."; }
    else if (month == 07) { return "jul."; }
    else if (month == 08) { return "aug."; }
    else if (month == 09) { return "sep."; }
    else if (month == 10) { return "oct."; }
    else if (month == 11) { return "nov."; }
    else if (month == 12) { return "dec."; }
}

const amPM = hour => {
    if (hour < 12) { return `a.m.` }
    else { return `p.m.` }
}

const hourShort = hour => {
    if (hour == 00) { return `12` }
    else if (hour == 01) { return `1` }
    else if (hour == 02) { return `2` }
    else if (hour == 03) { return `3` }
    else if (hour == 04) { return `4` }
    else if (hour == 05) { return `5` }
    else if (hour == 06) { return `6` }
    else if (hour == 07) { return `7` }
    else if (hour == 08) { return `8` }
    else if (hour == 09) { return `9` }
    else if (hour == 10) { return `10` }
    else if (hour == 11) { return `11` }
    else if (hour == 12) { return `12` }
    else if (hour == 13) { return `1` }
    else if (hour == 14) { return `2` }
    else if (hour == 15) { return `3` }
    else if (hour == 16) { return `4` }
    else if (hour == 17) { return `5` }
    else if (hour == 18) { return `6` }
    else if (hour == 19) { return `7` }
    else if (hour == 20) { return `8` }
    else if (hour == 21) { return `9` }
    else if (hour == 22) { return `10` }
    else if (hour == 23) { return `11` }
}

//Put Random Quotes on Page
const putRandomQuoteInList = async function () {
    clearQuotes();
    const data = await getQuote();
    const notation = amPM(data.appeared_at.slice(11, 13))
    const minutes = data.appeared_at.slice(14, 16);
    const hour = hourShort(data.appeared_at.slice(11, 13));
    const day = data.appeared_at.slice(8, 10);
    const month = monthName(data.appeared_at.slice(5, 7));
    const year = data.appeared_at.slice(0, 4);
    const randomQuoteList = document.getElementById("quote");
    randomQuoteList.innerHTML +=
        `<div class="stupid-quote">
            <div class="stupid-text" id="text">${data.value}</div>
            <hr>
            <div class="stupid-date">${hour}:${minutes} ${notation} &middot; ${day} ${month} ${year}</a></div>
        </div>`
}

document.getElementById("random-quote").addEventListener("click", putRandomQuoteInList);

//Put Quotes Random Quotes About People and Things on Page
const nameText = document.querySelectorAll('.name');
const nameImg = document.querySelectorAll('.name-img')

const putQuotesInList = async function (tag) {
    clearQuotes();
    const quotesList = document.getElementById("quote");
    const data = await getTagQuotes(tag);
    const randomNumber = Math.floor(Math.random() * ((data.count - 1) - 0 + 1) + 0);
    const notation = amPM(data._embedded.quotes[randomNumber].appeared_at.slice(11, 13))
    const minutes = data._embedded.quotes[randomNumber].appeared_at.slice(14, 16);
    const hour = hourShort(data._embedded.quotes[randomNumber].appeared_at.slice(11, 13));
    const day = data._embedded.quotes[randomNumber].appeared_at.slice(8, 10);
    const month = monthName(data._embedded.quotes[randomNumber].appeared_at.slice(5, 7));
    const year = data._embedded.quotes[randomNumber].appeared_at.slice(0, 4);
    quotesList.innerHTML +=
        `<div class="stupid-quote">
            <div class="stupid-text" id="text">${data._embedded.quotes[randomNumber].value}</div>
            <hr>
            <div class="stupid-date">${hour}:${minutes} ${notation} &middot; ${day} ${month} ${year}</div>
        </div>`
}

nameText.forEach(function (name) {
    name.addEventListener('click', getName = name => {
        return putQuotesInList(name.target.textContent);
    });
});
nameImg.forEach(function (img) {
    img.addEventListener('click', getName = () => {
        return putQuotesInList(img.alt);
    });
});

//Make it loud!
const scream = document.getElementById("scream")

scream.addEventListener('click', screamIt = () => {
    text.classList.add("scream");
})

//Delete all quotes
document.getElementById("delete").addEventListener('click', cleanIt = () => {
    const allQuotes = document.querySelectorAll(".stupid-quote");
    allQuotes.forEach(quote => quote.remove());
    quote.classList.remove("scream");
});

const clearQuotes = () => {
    const allQuotes = document.querySelectorAll(".stupid-quote");
    allQuotes.forEach(quote => quote.remove());
    quote.classList.remove("scream");
};