import '../App.css';
import Search from './Search.js';

const Content = (props) => {
    return (
        <div className="content">
            <h2>Trade with Confidence:</h2>
            <h3>
                Let Our Trading Aid Guide You to Success!
            </h3>

            <p>
                Trading Aid is a site that provides you with information about the stock market data and definitions .
                It also provides you with a trading bot that will help you make the right decisions when trading.
            </p>

            <Search></Search>

            <h5 className="socials">
                <i className="fa fa-deckx"></i>
                <i className="fa fa-github" href="https://github.com/MoniqueOg" target="_blank"></i>
                <i className="fa fa-linkedin"></i>
            </h5>
            <p>Monique Ogunkeyede | Blackcodher Student</p>
        </div>)
};

export default Content;