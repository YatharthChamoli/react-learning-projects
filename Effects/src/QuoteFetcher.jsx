import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "https://dummyjson.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ quote: "", author: "" });

  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const data = await response.json();
    setQuote(data); // { quote: "...", author: "..." }
  }

  // useEffect(() => {
  // async function getIntialQuote() {
  // const response = await fetch(RANDOM_QUOTE_URL);
  // const data = await response.json();
  // setQuote(data);
  // }
  // getIntialQuote();
  // }, []);

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <button onClick={fetchQuote}>Fetch Quote</button>
      <h1>{quote.quote}</h1>
      <h3>-{quote.author}</h3>
    </div>
  );
}
