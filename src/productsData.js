import orangeImg from "./assets/orange.jpg";
import potatoImg from "./assets/potato.jpg";
import drumstickImg from "./assets/drumstick.jpg";
import bananaImg from "./assets/banana.jpeg";


export let productsData = [
  {
    name: "Potato",
    id: 1,
    price: 30,
    available: 1,
    vendor: "Himachal Pvt Ltd",
    category: "Vegetables",
    img: potatoImg,
  },
  {
    name: "Banana",
    id: 2,
    price: 50,
    available: 1,
    category: "Fruits",
    vendor: "Organic farms",
    img: bananaImg,
  },
  {
    name: "Drumsticks",
    id: 3,
    price: 20,
    available: 0,
    category: "Vegetables",
    vendor: "Mallikarjuna farms",
    img: drumstickImg,
  },
  {
    name: "Orange",
    id: 4,
    price: 25,
    available: 1,
    vendor: "Nagpur farms",
    category: "Fruits",
    img: orangeImg,
  },
];
