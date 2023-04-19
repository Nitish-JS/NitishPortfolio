import ecomm from "../../images/ecomm.jpg";
import recruitment from "../../images/recruitmentportal.jpg";
import crypto from "../../images/cryptohunter.jpg";
import examin from "../../images/examin.png";
const ProjectData = [
  {
    image: recruitment,
    desc: "A recruitment portal built for conducting the recruitments of the freshers for the chapter IETE ISF VIT. The portal is highly responsive includes various security features like detecting Tab switch, JWT authentication for every API request , Auto submission on test timeout etc.",
    link: "https://github.com/Nitish-JS/IETE-Recruitment-portal-2.0",
  },
  {
    image: ecomm,
    desc: "This is an e-commerce website built with React, Redux, Node.js, MongoDB, and Mongoose. The website has three components - client, server, and admin. The client component is the main e-commerce website where customers can browse, search, purchase items and make payment through Razorpay gateway. The server component is responsible for handling API requests from the client and authenticating users using JWT tokens. The admin component provides visualizations of customer data and allows the site owner to add or delete items. ",
    link: "https://github.com/Nitish-JS/Ecommerce",
  },
  {
    image: examin,
    desc: "The aim of this project is to develop a software that provides a cheat-free platform for online quizzes with complete authenticity. The system continuously monitors the movements of the candidates to prevent any possibility of cheating. It is also a proctor-free automatic environment validator, making sure that an online quiz is taken with no possibility of cheating whatsoever. This project is built using the MERN (MongoDB, Express, React, Node.js) stack.",
    link: "https://github.com/Nitish-JS/Auto-proctored-Examination",
  },
  {
    image: crypto,
    desc: "A Cryptocurrency Tracker website to get insights about top 100 cryptocurrencies. It shows detailedinformation about each cryptocurrency like the price, 24H change, market cap and graphs representing the price in past 24Hours, 30days, 3 months and 1 year for each cryptocurrency.",
    link: "https://github.com/Nitish-JS/CryptoHunter",
  },
];

export default ProjectData;
