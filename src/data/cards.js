import visaImg from "../assets/visa.png";
import MASTERCARDImg from "../assets/MASTERCARD.png";

export const cards = [
  {
    id: 1,
    title: "VISA",
    description:
      "Срок изготовления карты составляет 3 банковских рабочих дня.",
    subDescription: "Неснижаемый остаток составляет 10$",
    price: "БЕСПЛАТНО",
    priceLabel: "Выпуск карты",
    deposit: "10$",
    depositLabel: "Неснижаемый остаток",
    image: visaImg,
  },
  {
    id: 2,
    title: "MASTERCARD",
    description:
      "Изготовление карты занимает до 5 рабочих дней.",
    subDescription: "Неснижаемый остаток составляет 20$",
    price: "БЕСПЛАТНО",
    priceLabel: "Выпуск карты",
    deposit: "20$",
    depositLabel: "Неснижаемый остаток",
    image: MASTERCARDImg,
  },
];