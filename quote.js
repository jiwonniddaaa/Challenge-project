const quotes = [
    {
        quote: "참으로 진지한 철학적 문제는 오직 하나뿐이다. 그것은 바로 자살이다.",
        author: "알베르 카뮈",
    },
    {
        quote: "바보같이 살지말라",
        author: "김영하",
    },
    {
        quote: "운명보다 강한 것이 있다면 그것은 동요하지 않고 운명을 짊어질 수 있는 용기이다.",
        author: "가이벨",
    },
    {
        quote: "A flower cannot blossom without sunshine, and man cannot live without love.",
        author: "Max Muller",
    },
    {
        quote: "우리가 아는 유일한 건, 모든 것이 계획대로만 흘러가지는 않는다는 거야.",
        author: "라이온 킹",
    },
    {
        quote: "안전 지대 바깥에서 모험을 해보세요. 보상은 가치가 있을거에요.",
        author: "라푼젤",
    },
    {
        quote: "익숙한 곳을 벗어나 보세요. 그것의 보상은 분명히 가치가 있을거에요.",
        author: "라푼젤",
    },
    {
        quote: "네가 매일 행복할 수는 없지만, 행복한 일들은 매일 있단다.",
        author: "곰돌이 푸",
    },
    {
        quote: "내 기분은 나만이 정할 수 있어. 오늘 나는 '행복'으로 정할래.",
        author: "이상한 나라의 앨리스",
    },
    {
        quote: "어떠한 슬픔이 닥쳐도, 믿음을 잃지 않으면, 당신이 원하는 꿈이 이루어질 거에요.",
        author: "신데렐라",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
