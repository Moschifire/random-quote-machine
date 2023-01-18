function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuotes] = React.useState([]);

    React.useEffect(() => {
        async function fetchData () {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuotes(data[randIndex])
        }
        fetchData();
        console.log(fetchData())
    }, [])

    const getNewQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length);
            setRandomQuotes(quotes[randIndex])
    }
    

    return (
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card text-center">
                    <div className="card-header">Inspirational Quotes</div>
                    <div className="card-body" id="quote-box">
                        {randomQuote ? 
                            <>
                            <h5 id="author" className="card-title">{randomQuote.author || "No author"}</h5>
                            <p id="text" className="card-text">&quot;{randomQuote.text}&quot;</p>
                            </>
                        : 
                            <h2>Loading</h2>
                        }

                        <div className="column">
                            <button id="new-quote" onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
                            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" className="btn btn-warning">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"))