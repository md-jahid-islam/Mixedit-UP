const foodData = [
    {
      "product_id": 1,
      "food_name": "Butter Pasta",
      "food_price": 5.99,
      "food_image": "https://i.ibb.co/ftW75Qd/product-1-11-312x312.png",
      "discount_price": 4.99,
      "category": "breakfast"
    },
    {
      "product_id": 2,
      "food_name": "Chicken Fried Rice",
      "food_price": 8.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_6.png",
      "discount_price": null,
      "category": "lunch"
    },
    {
      "product_id": 3,
      "food_name": "Chicken Leg Piece",
      "food_price": 3.49,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_9.png",
      "discount_price": 2.99,
      "category": "dinner"
    },
    {
      "product_id": 4,
      "food_name": "Chicken with Rice",
      "food_price": 7.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_8.png",
      "discount_price": 6.99,
      "category": "lunch"
    },
    {
      "product_id": 5,
      "food_name": "Butter Past",
      "food_price": 12.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_11.png",
      "discount_price": null,
      "category": "dinner"
    },
    {
      "product_id": 6,
      "food_name": "Grilled Chicken",
      "food_price": 4.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_10.png",
      "discount_price": 3.99,
      "category": "evening"
    },
    {
      "product_id": 7,
      "food_name": "Egg and Cocumber",
      "food_price": 6.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_1.png",
      "discount_price": 5.99,
      "category": "breakfast"
    },
    {
      "product_id": 8,
      "food_name": "Bruno Scribble",
      "food_price": 9.49,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/menu_card_7.jpg",
      "discount_price": 8.49,
      "category": "lunch"
    },
    {
      "product_id": 9,
      "food_name": "Chicha Morada",
      "food_price": 3.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/menu_card_1.jpg",
      "discount_price": 2.99,
      "category": "dinner"
    },
    {
      "product_id": 10,
      "food_name": "Oysters Dozen",
      "food_price": 6.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/menu_card_2.jpg",
      "discount_price": null,
      "category": "lunch"
    },
    {
      "product_id": 11,
      "food_name": "Raw Salmon Salad",
      "food_price": 9.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_4-312x312.png",
      "discount_price": 8.99,
      "category": "dinner"
    },
    {
      "product_id": 12,
      "food_name": "Redish Oysters",
      "food_price": 4.49,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/menu_card_8.jpg",
      "discount_price": 3.99,
      "category": "evening"
    },
    {
      "product_id": 13,
      "food_name": "Salmon Beef Stack",
      "food_price": 3.49,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_5-312x312.png",
      "discount_price": null,
      "category": "breakfast"
    },
    {
      "product_id": 14,
      "food_name": "Salmon Salad",
      "food_price": 8.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_3-312x312.png",
      "discount_price": 7.99,
      "category": "lunch"
    },
    {
      "product_id": 15,
      "food_name": "Sicilian Pizza",
      "food_price": 5.49,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_7-312x312.png",
      "discount_price": 4.99,
      "category": "dinner"
    },
    {
      "product_id": 16,
      "food_name": "Testy Roll",
      "food_price": 10.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/menu_card_6.jpg",
      "discount_price": null,
      "category": "dinner"
    },
    {
      "product_id": 17,
      "food_name": "Tofu Red Chili",
      "food_price": 6.49,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_2-312x312.png",
      "discount_price": 5.49,
      "category": "evening"
    },
    {
      "product_id": 18,
      "food_name": "Vanilla Cake",
      "food_price": 7.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/menu_card_5.jpg",
      "discount_price": 6.99,
      "category": "breakfast"
    },
    {
      "product_id": 19,
      "food_name": "Vegetable Salad",
      "food_price": 8.49,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_12-312x312.png",
      "discount_price": null,
      "category": "lunch"
    },
    {
      "product_id": 20,
      "food_name": "Wild Mushroom",
      "food_price": 5.99,
      "food_image": "https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/menu_card_3.jpg",
      "discount_price": 4.99,
      "category": "dinner"
    },
  ]
  
  export default foodData