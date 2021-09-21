const products = [
  {
    id: 1,
    category: "Humificador",
    title: "Sahumador",
    description:
      "Sahumador de yeso.Utilizado para liberar espacios de malas energias.",
    foto: "https://grupoutopia.com.ar/storage/media/tN8lJWplPiYAMJxm3cqHhjp0N9rSUHNJXnTTr1pX.jpg",
    price: "$400",
  },
  {
    id: 2,
    category: "Sahumerios",
    title: "Sahumerios triple empaste",
    description:
      "Sahumerio triple empaste, con sus diferentes aromas. Ideal para auyentar las malas energias",
    foto: "https://grupoutopia.com.ar/storage/media/897b69515ef490c2f75396d7baded9e083a64dc4.jpeg",
    price: "$150",
  },
  {
    id: 3,
    category: "Humificador",
    title: "Hornillo de buda",
    description:
      "Hermoso hornillo de yeso para aromatizar ambientes.Ideal para auyentar las malas energias",
    foto: "https://grupoutopia.com.ar/storage/media/927l.jpeg",
    price: "$900",
  },
  {
    id: 4,
    category: "Humificador",
    title: "Aromatizador",
    description:
      "Aromatizador de ambientes y textil por su intensidad puede durar todo el dia.",
    foto: "https://grupoutopia.com.ar/storage/media/Nvo.-Aromatizador-Amb.-Textil-250-ml.jpeg",
    price: "$400",
  },
  {
    id: 5,
    category: "Sahumerios",
    title: "Sahumerio en barra",
    description:
      "Sahumerio en barra extra fuerte.Ideal para sacar las malas vibras de los ambientes",
    foto: "https://grupoutopia.com.ar/storage/media/7a9bcc6299cafe393d7f513da9f268159f6a0d35.jpeg",
    price: "$300",
  },
  {
    id: 6,
    category: "Humificador",
    title: "Hornillo electrico",
    description:
      "Ideal para sacar las malas vibras de los ambientes, solo con poner unas gotitas de aceite y enchufar.",
    foto: "https://grupoutopia.com.ar/storage/media/sDnrLkEvHShX9dOONlvaB3gIRtE8u2yqNKYQJ5ro.jpg",
    price: "$1500",
  },
  {
    id: 7,
    category: "Sahumerios",
    title: "Bombas Herbal XL",
    description:
      "Ideal para sacar las malas vibras de los ambientes, con sus diferentes aromas.",
    foto: "https://grupoutopia.com.ar/storage/media/9jF0jGXsRqxrrQZhnRQBOlscJPm6mCRTRvWkNcwS.jpg",
    price: "$300",
  },
  {
    id: 8,
    category: "Adornos",
    title: "Ganesha Mediana",
    description:
      "Compuesto de un material de resina con exelentes detalles.Ideal para adornar el hogar",
    foto: "https://grupoutopia.com.ar/storage/media/2yNum374Q6EYYXGrU3xmZZr3IOFlCiM4GFYRe3xG.jpg",
    price: "$1900",
  },
  {
    id: 9,
    category: "Adornos",
    title: "Elefante de madera",
    description:
      "Hecho a mano con madera tallada, significa la abundancia. Ideal para decorar el hogar",
    foto: "https://grupoutopia.com.ar/storage/media/Elefante-sentado-simil-madera-145-cm-1.jpeg",
    price: "$2000",
  },
  {
    id: 10,
    category: "Adornos",
    title: "Buda de bronce",
    description:
      "Confeccionado con un material de bronce, y pintado con pintura epoxi hace lo mejor para la decoracion",
    foto: "https://grupoutopia.com.ar/storage/media/Buda-Bronce-10-cm.jpeg",
    price: "$2500",
  },
  {
    id: 11,
    category: "Adornos",
    title: "Buda alegre",
    description:
      "Hecho con un material resistente simil madera, el buda gordo de 23 cm atrae abundacia.",
    foto: "https://grupoutopia.com.ar/storage/media/Buda-gordo-alegre-simil-madera-223-cm.jpeg",
    price: "$2000",
  },
  {
    id: 12,
    category: "Humificador",
    title: "Cascada buda",
    description:
      "Porta cono excelente para cualquier rincon de la casa. Altura de 15 cm.",
    foto: "https://grupoutopia.com.ar/storage/media/f8be7d65e5d7d28cdabb5e6b1bd9d5902d721049.jpeg",
    price: "$1000",
  },
];

export const getFetch = () => new Promise((res, rej) => {
  let respuesta = "200";
  if (respuesta === "200") {
    setTimeout(() => {
      res(products);
    }, 3000);
  } else {
    rej("404");
  }
});



export const getDetail = (id) => new Promise((res, rej) => {
  let respuesta = "200";
  if (respuesta === "200") {
    setTimeout(() => {
      res(products.find((prod) => prod.id.toString() === id ));
    }, 2000);
  } else {
    rej("404");
  }
});
