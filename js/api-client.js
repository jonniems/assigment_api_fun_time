async function getQuote() {
    const endPointQuote = `https://tronalddump.io/random/quote`;
    try {
        const res = await fetch(endPointQuote, { method: "GET" });
        return await res.json();
    }
    catch (error) {
        console.log(error)
    }
};

async function getTagQuotes(tag) {
    const endPointTagQuotes = `https://tronalddump.io/search/quote?tag=${tag}`;
    try {
        const res = await fetch(endPointTagQuotes, { method: "GET" });
        return await res.json();
    }
    catch (error) {
        console.log(error)
    }
};