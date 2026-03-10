// const api = "https://api.sampleapis.com/coffee/hot"
// fetch(api).then( (response) =>{
//       if(!response.ok){
//         throw new Error('Error:' + response.status);
//     }
//     return response.json()
// }
// ).then((response)=>{
//     console.log(response)
// })
const coffeeMenu = [
  {
    id: 1,
    name: "Espresso",
    description: "Pure, concentrated shot of rich dark coffee",
    price: "$3.50",
    category: "Classic",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk and a thick foam crown",
    price: "$4.50",
    category: "Classic",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80",
  },
  {
    id: 3,
    name: "Flat White",
    description: "Velvety microfoam over a double ristretto shot",
    price: "$4.75",
    category: "Classic",
    image:
      "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&q=80",
  },
  {
    id: 4,
    name: "Cold Brew",
    description: "Steeped 18 hours for smooth, bold refreshment",
    price: "$5.00",
    category: "Iced",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80",
  },
  {
    id: 5,
    name: "Iced Latte",
    description: "Chilled espresso swirled through cold milk",
    price: "$5.25",
    category: "Iced",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
  },
  {
    id: 6,
    name: "Caramel Macchiato",
    description: "Layered vanilla, milk, espresso & caramel drizzle",
    price: "$5.75",
    category: "Specialty",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=400&q=80",
  },
  {
    id: 7,
    name: "Matcha Latte",
    description: "Ceremonial-grade matcha with oat milk",
    price: "$5.50",
    category: "Specialty",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80",
  },
  {
    id: 8,
    name: "Mocha",
    description: "Espresso, chocolate, and silky steamed milk",
    price: "$5.25",
    category: "Specialty",
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&q=80",
  },
];
console.log(coffeeMenu);
coffeeMenu.forEach((item) => {
  console.log(item.image);
  const div = document.createElement("div");
  div.textContent = `Name: ${item.name}
 description: ${item.description}
 price: ${item.price}
 category: ${item.category}`;
  document.body.appendChild(div);
});
