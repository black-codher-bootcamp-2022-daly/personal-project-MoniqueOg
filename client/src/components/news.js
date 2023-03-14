
const fetch = require("node-fetch");
const cheerio = require("cheerio");

const url = 'https://uk.finance.yahoo.com/topic/news/';

fetch(url)
    .then(response => response.text())
    .then(data => {
        const $ = cheerio.load(data);
        const title = $('h3.Mb(5px)').text().trim();
        const author = $('div.Yahoo-Finance').text().trim();
        const date = $('div.article-date').text().trim();
        let content = '';
        $('div.article-content p').each((i, el) => {
            content += $(el).text().trim() + '\n';
        });

        const article = {
            title: title,
            author: author,
            date: date,
            content: content
        };
        console.log(article);
    })
    .catch(error => {
        console.error('Error fetching news article:', error);
    });

