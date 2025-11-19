import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "https://dummyjson.com/quotes/random";

export default function QuoteFetcherLoader() {
  const [quote, setQuote] = useState({ quote: "", author: "" });
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      const response = await fetch(RANDOM_QUOTE_URL);
      const data = await response.json();
      setQuote(data); // { quote: "...", author: "..." }
      setIsLoading(false);
    }
    fetchQuote();
  }, []);

  return (
    <div>
      {isloading && <p>Loading...</p>}
      <h1>{quote.quote}</h1>
      <h3>-{quote.author}</h3>
    </div>
  );
}
