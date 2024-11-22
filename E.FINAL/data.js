const data = [
   {
      mugId: 123456,
      name: "Discover Amethyst Moons",
      altText: "Modern mug",
      price: 30.00,
      imgUrl: "../Landingpage/imagen2.jpeg",
      description: "package of mugs with 3d butterflies made with the best ceramic",
      category: "modern",
      new: false,
      offer: true,
      recommended: true,
      trending: false
   },
   {
      mugId: 654321,
      imgUrl: "../Landingpage/imagen1.jpeg",
      altText: "Artistic mug",
      name: "Discover Enchanted Butterflies",
      price: 25.00,
      description: "Three cream-colored mugs with small flowers in pastel tones",
      category: "modern",
      new: true,
      offer: false,
      recommended: true,
      trending: true
   },
   {
      mugId: 987654,
      imgUrl: "https://i.pinimg.com/564x/56/29/37/562937e5c5d2d8a913c216978109782e.jpg",
      altText: "Artistic mug",
      name: "X3 Flowers Mug",
      price: 100.00,
      description: "Three cream-colored mugs with small flowers in pastel tones",
      category: "fantasy",
      new: true,
      offer: false,
      recommended: false,
      trending: true
   },
   {
      mugId: 456789,
      imgUrl: "https://i.pinimg.com/564x/f7/19/fb/f719fb78de2a5b68044dbd13f02c8d0a.jpg",
      altText: "Modern mug",
      name: "Strawberries Mug",
      price: 40.00,
      description: "Pink mug on the outside, cream on the inside with red strawberries",
      category: "modern",
      new: true,
      offer: true,
      recommended: true,
      trending: false
   },
   {
      mugId: 321654,
      imgUrl: "https://i.pinimg.com/564x/3f/de/e0/3fdee08b4d45944e11d7ff6cda4591c1.jpg",
      altText: "Colorful mug",
      name: "Blue Mug",
      price: 50.00,
      description: "Cream-colored mug with delicate blue flowers",
      category: "fantasy",
      new: false,
      offer: true,
      recommended: false,
      trending: true
   },
   {
      mugId: 159753,
      imgUrl: "https://i.pinimg.com/564x/10/e9/c1/10e9c1c6e9992327839600aaa1e056a0.jpg",
      altText: "Abstract mug",
      name: "Cute Flowers Mug",
      price: 40.00,
      description: "Mug with round flowers in various pastel tones",
      category: "modern",
      new: true,
      offer: false,
      recommended: true,
      trending: false
   },
   {
      mugId: 753951,
      imgUrl: "https://i.pinimg.com/564x/99/d8/41/99d8410b0c6219df1e57acfa31e14f63.jpg",
      altText: "Floral mug",
      name: "Floral Mug",
      price: 80.00,
      description: "White mug with delicate flowers and small pink hearts",
      category: "fantasy",
      new: false,
      offer: true,
      recommended: false,
      trending: false
   },
   {
      mugId: 852741,
      imgUrl: "https://i.pinimg.com/564x/03/ae/9f/03ae9f3963a6cc9b16f54de827d624f7.jpg",
      altText: "Modern mug",
      name: "Cherry Mug",
      price: 90.00,
      description: "Cream-colored mug with cherries and small hearts",
      category: "modern",
      new: true,
      offer: true,
      recommended: false,
      trending: true
   },
   {
      mugId: 369852,
      imgUrl: "https://i.pinimg.com/564x/64/40/fc/6440fcf7d3b67d5bf0dc21f7e844b26c.jpg",
      altText: "Minimalist mug",
      name: "Cloud Mug",
      price: 50.00,
      description: "Blue mug with white clouds",
      category: "fantasy",
      new: false,
      offer: false,
      recommended: true,
      trending: true
   },
   {
      mugId: 987321,
      imgUrl: "https://i.pinimg.com/564x/9e/b8/56/9eb856b7dc266b80c6ed721dfd6b4103.jpg",
      altText: "Geometric mug",
      name: "Violet Mug",
      price: 65.00,
      description: "Semi-round purple mug with small flowers",
      category: "modern",
      new: true,
      offer: false,
      recommended: true,
      trending: false
   },
   {
      mugId: 951753,
      imgUrl: "https://i.pinimg.com/564x/1b/ed/71/1bed718d0e55d052b43f21a72d14bb44.jpg",
      altText: "Pattern mug",
      name: "Hearts Mug",
      price: 55.00,
      description: "Pink mug with small pink hearts",
      category: "fantasy",
      new: false,
      offer: true,
      recommended: false,
      trending: true
   },
   {
      mugId: 753159,
      imgUrl: "https://i.pinimg.com/564x/81/95/c0/8195c096f8b32cb7f26fd6daceadd28d.jpg",
      altText: "Creative mug",
      name: "Creative Mug",
      price: 85.00,
      description: "Cream-colored mug with small multi-colored hearts",
      category: "modern",
      new: true,
      offer: false,
      recommended: true,
      trending: true
   },
   {
      mugId: 123789,
      imgUrl: "https://i.pinimg.com/564x/4d/03/4a/4d034a318a001c89b49a99b78bb0d25e.jpg",
      altText: "Fungi mug",
      name: "Fungi Mug",
      price: 35.00,
      description: "Simple cream-colored mug with red mushroom decoration",
      category: "fantasy",
      new: false,
      offer: false,
      recommended: false,
      trending: true
   },
   {
      mugId: 321789,
      imgUrl: "https://i.pinimg.com/564x/52/9e/9c/529e9caa99ef9cac8dc25fc7a7f92c04.jpg",
      altText: "Custom mug",
      name: "Floricienta Mug",
      price: 65.00,
      description: "Cream-colored mug with sunflowers",
      category: "modern",
      new: true,
      offer: true,
      recommended: false,
      trending: false
   },
   {
      mugId: 147258,
      imgUrl: "https://i.pinimg.com/736x/ab/99/a9/ab99a92a1f72de491906e5bdc2929735.jpg",
      altText: "Artistic mug",
      name: "Strawberry Mug",
      price: 70.00,
      description: "Pink mug with small strawberries or cream-colored mug with pink strawberries",
      category: "fantasy",
      new: false,
      offer: true,
      recommended: true,
      trending: false
   }
];
