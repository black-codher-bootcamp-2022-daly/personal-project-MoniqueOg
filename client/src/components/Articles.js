import React from 'react';

const Articles = () => {
  return (
    <div style={{ 
     padding: '5rem',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        marginBottom: '1rem'
      }}> Market Update: Tech Stocks Rebound, Oil Stocks Dip, and GameStop Shares Rise on Board Member News</h1>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        marginBottom: '0.5rem' 
      }}>Tech stocks surge as market rebounds from recent slump</h2>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: '1rem' 
      }}>
        <img src='https://thumbor.forbes.com/thumbor/fit-in/400x200/https://www.forbes.com/advisor/wp-content/uploads/2021/09/how-to-make-money-in-stocks.jpg' alt='Stock market chart'  />
        <p style={{ 
          fontStyle: 'italic', 
          fontSize: '0.8rem' }}>Photo by John Smith</p>
      </div>
       <p style={{ 
        fontSize: '1rem', 
        marginBottom: '1rem' 
      }}>
      After several weeks of volatility, the stock market experienced a rebound on Tuesday, with tech stocks leading the
            charge. The Nasdaq Composite rose 2.7%, the S&amp;P 500 gained 1.4%, and the Dow Jones Industrial Average climbed
            0.9%.
      </p>
      <section style={{ marginBottom: '1rem' }}>
        <h3 style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          marginBottom: '0.5rem' 
        }}>Positive Economic Data Boosts Investor Confidence and Eases Inflation Concerns</h3>
        <p  style={{ 
          fontSize: '1rem', 
          marginBottom: '1rem' 
        }}>
        Investors were encouraged by positive economic data, including a report from the Institute for Supply
              Management that showed manufacturing activity in the United States grew at its fastest pace in nearly four
              decades in March. This news helped ease concerns about rising inflation and the potential for the Federal
              Reserve to raise interest rates.
        </p>
      </section>
      <section style={{ marginBottom: '1rem' }}>
        <h3 style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          marginBottom: '0.5rem' 
        }}>Tech Giants Lead Market Rally as Tesla Expands US Manufacturing Plans</h3>
        <p style={{ 
          fontSize: '1rem', 
          marginBottom: '1rem' 
        }}>
        Tech stocks were particularly strong performers, with Apple, Amazon, and Facebook all rising more than 3%.
              Tesla also saw gains of over 4%, as the electric car maker announced plans to expand its manufacturing
              facilities in the United States.
        </p>
      </section>
      <p style={{ 
        fontSize: '1rem', 
        marginBottom: '1rem' 
      }}>
      The strong showing by tech stocks helped push the market to its best day since early March, and investors will
            be closely watching to see if this upward trend continues.
      </p>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        marginBottom: '0.5rem' 
      }}>Oil Stocks Dip as Crude Prices Hit Three-Month Low</h2>
  <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: '1rem' 
      }}>
    <img src='https://etimg.etb2bimg.com/thumb/msid-93854383,imgsize-49862,width-400,height-200,overlay-etenergyworld/oil-money-is-flooding-into-guyana-who-will-benefit.jpg' alt='Bitcoin chart'style={{ 
            maxWidth: '100%', 
            maxHeight: '10rem',
            marginRight: '1rem'
          }} />
    <p>Photo by Picsum</p>
  </div>
  <p style={{ 
        fontSize: '1rem', 
        marginBottom: '1rem' 
      }}>
  Shares of major oil companies, including Exxon Mobil, Chevron, and Royal Dutch Shell, all fell more than 2% in early trading.
        The energy sector as a whole was down 2.7%.
  </p>
  <p style={{ 
        fontSize: '1rem', 
        marginBottom: '1rem' 
      }}>
        Analysts are watching closely to see if oil prices will continue to decline,
        or if they will rebound in the coming weeks. Many believe that a sustained period of low oil
        prices could have significant implications for the global economy and financial markets.
      </p>
  <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        marginBottom: '0.5rem' 
      }}>GameStop Announces New Board Members, Shares Rise in Midday Trading</h2>
  <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: '1rem' 
      }}>
    <img src='https://picsum.photos/400/200' alt='Wind turbines' style={{ 
            maxWidth: '100%', 
            maxHeight: '10rem',
            marginRight: '1rem'
          }}/>
    <p>Photo by Picsum</p>
  </div>
  <p style={{ 
        fontSize: '1rem', 
        marginBottom: '1rem' 
      }}>
        Shares of GameStop rose on Thursday after the company announced
        several new members of its board of directors.
        The stock was up 6.2% in midday trading.
      </p>
      <p style={{ 
        fontSize: '1rem', 
        marginBottom: '1rem' 
      }}>
        The new board members include Alan Attal, a former Chewy executive,
        and Ryan Cohen, the founder of online pet food retailer Chewy.
        Cohen is also a major shareholder in GameStop,
        and has been pushing for the company to pivot away from brick-and-mortar
        stores and focus on e-commerce.
      </p>
      <p style={{ 
        fontSize: '1rem', 
        marginBottom: '1rem' 
      }}>
        Investors have been closely watching GameStop since January,
        when a group of retail traders on Reddit's WallStreetBets forum drove the stock price up more than 1,500% in a matter of weeks.
        The company's stock price has been volatile in the months since,
        as investors continue to debate its long-term prospects.
      </p>
      <p style={{ 
        fontSize: '1rem', 
        marginBottom: '1rem' 
      }}>
        With the addition of new board members,
        GameStop is signaling that it is committed to making changes and adapting to a rapidly changing retail landscape. Whether these changes will be enough to satisfy investors remains to be seen,
        but for now, the stock is on the rise.
      </p>
    </div>
  );
};

export default Articles;
