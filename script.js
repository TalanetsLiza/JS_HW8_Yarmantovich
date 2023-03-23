'use strict';

const createMetaData = () => {
    document.documentElement.setAttribute("lang", "ru");

    const metaUtf8 = document.createElement("meta");
    const title = document.createElement("title");
    
    metaUtf8.setAttribute("charset", "UTF-8");
    title.innerHTML = "HW7_JS";
    
    document.head.appendChild(metaUtf8);
    document.head.appendChild(title);
};

const createStyles = () => {
    const style = document.createElement("style");
    style.innerHTML = `
        * {
            margin: 0;
            padding: 0;
        }
        body { 
            padding-top: 100px; 
        }
        h1 {
            font-size: 36px;
            font-family: 'Arvo', serif;
            font-weight: 400;
            color: #212121;
            margin: 0;
            padding-bottom: 10px;
        }

        .header {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            padding-bottom: 55px;
        }
        .header__description {
            font-size: 14px;
            font-family: 'OpenSans';
            line-height: 26px;
            color: #9FA3A7;
        }

        .wrapper {
            display: flex;
            justify-content: center;
            padding-bottom: 100px;
        }
    
        .card {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border: 1px solid #E8E9ED;
            width: 400px;
            height: 480px;
        }
        .card_inverse-color {
            background: #8F75BE;
        }
        .card_inverse-color .card__title {
            color: #FFC80A;
        }
        .card_inverse-color .card__caption,
        .card_inverse-color .card__description,
        .card_inverse-color .button {
            color: #FFFFFF;
        }
        .card__title {
            font-family: 'Montserrat';
            letter-spacing: 2.4px;
            color: #9FA3A7;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            padding-bottom: 20px;
        }
        .card__caption {
            font-weight: 400;
            font-size: 36px;
            line-height: 46px;
            color: #212121;
            max-width: 210px;    
            text-align: center;
            padding-bottom: 25px;
        }
        .card__description {
            max-width: 210px;
            color: #9FA3A7;
            font-family: 'OpenSans';
            font-size: 12px;
            line-height: 22px;
            text-align: center;
            padding-bottom: 52px;
        }

        .button {
            background-color: transparent;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            border: 3px solid #FFC80A;
            padding: 25px 40px; 
            text-align: center;
            letter-spacing: 2.4px;
            border-radius: 30px;
            cursor: pointer;
            color: #212121;
        }
    `;
    document.head.append(style);
};

const createHeader = () => {
    const headerEl = document.createElement("div");
    headerEl.classList.add("header");
    document.body.appendChild(headerEl);
    
    const titleEl = document.createElement("h1");
    titleEl.innerHTML = "Choose Your Option";
    headerEl.appendChild(titleEl);
    
    const descriptionEl = document.createElement("span");
    descriptionEl.classList.add("header__description");
    descriptionEl.innerHTML = "But I must explain to you how all this mistaken idea of denouncing ";
    headerEl.appendChild(descriptionEl);
};

const getCard = (titleText, isInverse) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    if (isInverse) {
        cardEl.classList.add("card_inverse-color");
    }
    
    const titleEl = document.createElement("h5");
    titleEl.classList.add("card__title");
    titleEl.innerHTML = titleText;
    cardEl.appendChild(titleEl);
    
    const captionEl = document.createElement("h2");
    captionEl.classList.add("card__caption");
    captionEl.innerHTML = "Initially designed to";
    cardEl.appendChild(captionEl);
    
    const descriptionEl = document.createElement("span");
    descriptionEl.classList.add("card__description");
    descriptionEl.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";
    cardEl.appendChild(descriptionEl);
    
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerHTML = "START HERE";
    cardEl.appendChild(button);    

    return cardEl;
};

createMetaData();
createStyles();
createHeader();

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);

const card1 = getCard("FREELANCER");
const card2 = getCard("STUDIO", true);
wrapper.appendChild(card1);
wrapper.appendChild(card2);
