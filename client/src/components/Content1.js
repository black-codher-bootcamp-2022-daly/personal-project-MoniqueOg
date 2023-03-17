import '../App.css';

const Content = (props) => {

    const handleSubmit = (event) =>{
        event.preventDefault(); 
        const input  = event.target.search.value;
        console.log(event)
        console.log(input)
      };

    return (
        <div className="content">
        <h2>Trade with Confidence:</h2>
        <h3>
            Let Our Trading Aid Guide You to Success!
        </h3>

        <p>
            Trading Guide is a website that provides you with information about the stock market and the cryptocurrencies.
            It also provides you with a trading bot that will help you make the right decisions when trading.
        </p>

        <form onSubmit={handleSubmit}>
        <input type="text" id="search" name="search" placeholder="Search for a stock" />
        <button type="submit" id="search-btn" >Search</button>
        </form>

        <h5 classNames="socials">
            <i className="fa fa-deckx"></i>
            <i className="fa fa-github" href="https://github.com/MoniqueOg" target="_blank"></i>
            <i className="fa fa-linkedin"></i>
        </h5>
    </div>)
};

export default Content;