import React from 'react';

const Articles = () => {
  return (
    <div className='article'>
      <h1>The Importance of Investing Early</h1>
      <h2>How Starting Young Can Make a Big Difference</h2>
      <div className='img-container'>
        <img src='https://thumbor.forbes.com/thumbor/fit-in/00x500/https://www.forbes.com/advisor/wp-content/uploads/2021/09/how-to-make-money-in-stocks.jpg' alt='Stock market chart' />
        <p>Photo by John Smith</p>
      </div>
      <p>
        Investing is crucial for building wealth over time. The earlier you
        start, the more time your money has to grow through the power of compound
        interest. This can make a big difference in the long run.
      </p>
      <section className='section'>
        <h3>What is Compound Interest?</h3>
        <p>
          Compound interest is the interest earned on both the principal amount
          and any accumulated interest. This means that your money can grow
          exponentially over time, especially if you invest early.
        </p>
      </section>
      <section className='section'>
        <h3>How to Start Investing</h3>
        <p>
          There are many ways to start investing, including through a 401(k) or
          individual retirement account (IRA), or by buying stocks, bonds, or
          mutual funds. It's important to do your research and choose investments
          that align with your goals and risk tolerance.
        </p>
      </section>
      <p>
        In conclusion, investing early can have a significant impact on your
        financial future. By taking advantage of compound interest and making
        smart investment choices, you can set yourself up for long-term success.
      </p>
      <h2>Investing in Cryptocurrency</h2>
  <div className='img-container'>
    <img src='https://picsum.photos/400/200' alt='Bitcoin chart' />
    <p>Photo by Picsum</p>
  </div>
  <p>
    Cryptocurrency has been a popular investment option in recent years. While
    it can be volatile, some investors have seen significant returns from
    investing in Bitcoin and other digital currencies. However, it's important
    to remember that cryptocurrencies are not backed by any government or
    financial institution, and their value can fluctuate rapidly.
  </p>

  <h2>Environmental, Social, and Governance (ESG) Investing</h2>
  <div className='img-container'>
    <img src='https://picsum.photos/400/200' alt='Wind turbines' />
    <p>Photo by Picsum</p>
  </div>
  <p>
    ESG investing is a type of investment strategy that takes into account
    environmental, social, and governance factors. This can include investing
    in companies that prioritize sustainability, ethical practices, and diversity
    and inclusion. ESG investing has gained popularity in recent years as investors
    become more conscious of the impact their investments have on society and the
    environment.
  </p>
      <style>
        {`
.article {
max-width: 800px;
margin: 0 auto;
font-family: Arial, sans-serif;
line-height: 1.5;
}
.img-container {
  margin: 20px 0;
}

img {
  max-width: 100%;
  height: auto;
}

p {
  margin: 10px 0;
}

h1, h2, h3 {
    margin: 20px 0 10px 0;
}

.section {
    margin: 20px 0;
}
`}
      </style>
    </div>
  );
};

export default Articles;
