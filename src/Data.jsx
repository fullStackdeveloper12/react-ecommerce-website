const items = [
  {
    id: 1,
    category: "mobiles",
    title: "Apple iPhone 14",
    imgSrc:
      "https://m.media-amazon.com/images/I/31KxpX7Xk7L._SY445_SX342_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3PuckZp",
    description: "Apple iPhone 14 (128 GB) - Blue",
    price: "89999",
  },
  {
    id: 2,
    category: "laptops",
    title: "Xiaomi [Smartchoice] Notebookpro",
    imgSrc:
      "https://m.media-amazon.com/images/I/41Nt-bBjrmL._SX300_SY300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3EzeQaC",
    description: "Xiaomi [Smartchoice] Notebookpro ",
    price: "49999",
  },
  {
    id: 3,
    category: "tablets",
    title: "Xiaomi Pad 6",
    imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
    amazonLink: "https://amzn.to/3ZeNRdY",
    description: "Xiaomi Pad 6| Qualcomm Snapdragon 870| ",
    price: "29999",
  },
  {
    id: 4,
    category: "mobiles",
    title: "Apple iPhone 11",
    imgSrc:
      "https://m.media-amazon.com/images/I/31Na4uyIEyL._SY445_SX342_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/44MiYi6",
    description: "Apple iPhone 11 (64GB) - White",
    price: "79999",
  },
  {
    id: 5,
    category: "tablets",
    title: "Lenovo Tab P12 Pro AMOLED",
    imgSrc:
      "https://m.media-amazon.com/images/I/415gV21fNCL._SX300_SY300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3RabsdH",
    description:
      "Lenovo Tab P12 Pro AMOLED (12.6 inch (32 cm), 8 GB, 256 GB, Wi-fi Only), Storm Grey with Precision Pen 3",
    price: "19999",
  },
  {
    id: 6,
    category: "mobiles",
    title: "Apple iPhone 13",
    imgSrc: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3r6XJtv",
    description: "Apple iPhone 13 (128GB) - Blue",
    price: "69999",
  },
  {
    id: 7,
    category: "laptops",
    title: "Lenovo IdeaPad Slim 5 ",
    imgSrc:
      "https://m.media-amazon.com/images/I/418LKVJFftL._SY300_SX300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/44JsK4r",
    description: 'Lenovo IdeaPad Slim 5 Intel Core i5 12450H 14" (35.5cm) ',
    price: "29999",
  },
  {
    id: 8,
    category: "tablets",
    title: "Samsung Galaxy Tab A8",
    imgSrc:
      "https://m.media-amazon.com/images/I/31qVIrbLqJL._SY300_SX300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3Pdsh4F",
    description:
      "Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)",
    price: "49999",
  },
  {
    id: 9,
    category: "laptops",
    title: "Apple MacBook Air Laptop",
    imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3r9rvhm",
    description:
      "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, ",
    price: "89999",
  },
  {
    id: 10,
    category: "mobiles",
    title: "Apple iPhone 14",
    imgSrc:
      "https://m.media-amazon.com/images/I/31KxpX7Xk7L._SY445_SX342_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3PuckZp",
    description: "Apple iPhone 14 (128 GB) - Blue",
    price: "89999",
  },
  {
    id: 11,
    category: "laptops",
    title: "Xiaomi [Smartchoice] Notebookpro",
    imgSrc:
      "https://m.media-amazon.com/images/I/41Nt-bBjrmL._SX300_SY300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3EzeQaC",
    description: "Xiaomi [Smartchoice] Notebookpro",
    price: "49999",
  },
  {
    id: 12,
    category: "tablets",
    title: "Xiaomi Pad 6",
    imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
    amazonLink: "https://amzn.to/3ZeNRdY",
    description: "Xiaomi Pad 6| Qualcomm Snapdragon 870|",
    price: "29999",
  },
  {
    id: 13,
    category: "mobiles",
    title: "Apple iPhone 11",
    imgSrc:
      "https://m.media-amazon.com/images/I/31Na4uyIEyL._SY445_SX342_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/44MiYi6",
    description: "Apple iPhone 11 (64GB) - White",
    price: "79999",
  },
  {
    id: 14,
    category: "tablets",
    title: "Lenovo Tab P12 Pro AMOLED",
    imgSrc:
      "https://m.media-amazon.com/images/I/415gV21fNCL._SX300_SY300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3RabsdH",
    description:
      "Lenovo Tab P12 Pro AMOLED (12.6 inch (32 cm), 8 GB, 256 GB, Wi-fi Only), Storm Grey with Precision Pen 3",
    price: "19999",
  },
  {
    id: 15,
    category: "mobiles",
    title: "Apple iPhone 13",
    imgSrc: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3r6XJtv",
    description: "Apple iPhone 13 (128GB) - Blue",
    price: "69999",
  },
  {
    id: 16,
    category: "laptops",
    title: "Lenovo IdeaPad Slim 5 ",
    imgSrc:
      "https://m.media-amazon.com/images/I/418LKVJFftL._SY300_SX300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/44JsK4r",
    description: "Lenovo IdeaPad Slim 5 Intel Core i5 12450H 14 (35.5cm)",
    price: "29999",
  },
  {
    id: 17,
    category: "tablets",
    title: "Samsung Galaxy Tab A8",
    imgSrc:
      "https://m.media-amazon.com/images/I/31qVIrbLqJL._SY300_SX300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3Pdsh4F",
    description:
      "Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)",
    price: "49999",
  },
  {
    id: 18,
    category: "laptops",
    title: "Apple MacBook Air Laptop",
    imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3r9rvhm",
    description:
      "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display",
    price: "89999",
  },
  {
    id: 19,
    category: "tablets",
    title: "Samsung Galaxy Tab S7+",
    imgSrc:
      "https://m.media-amazon.com/images/I/31OVAmHjLPL._SX300_SY300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3IZ4TEC",
    description:
      "Samsung Galaxy Tab S7+ (12.4 inch, Wi-Fi + LTE, 8GB RAM, 256GB Storage), Mystic Black",
    price: "79999",
  },
  {
    id: 20,
    category: "laptops",
    title: "HP Pavilion Gaming Laptop",
    imgSrc:
      "https://m.media-amazon.com/images/I/41E38ILdvRL._SX300_SY300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3r3fRqG",
    description:
      "HP Pavilion Gaming Laptop, Ryzen 5 5600H, 16.1 inches (40.9 cm) FHD IPS Display, 16GB RAM, 512GB SSD, NVIDIA GTX 1650 4GB Graphics",
    price: "72990",
  },
  {
    id: 21,
    category: "mobiles",
    title: "Apple iPhone 14",
    imgSrc:
      "https://m.media-amazon.com/images/I/31KxpX7Xk7L._SY445_SX342_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3PuckZp",
    description: "Apple iPhone 14 (128 GB) - Blue",
    price: "89999",
  },
  {
    id: 22,
    category: "laptops",
    title: "Xiaomi [Smartchoice] Notebookpro",
    imgSrc:
      "https://m.media-amazon.com/images/I/41Nt-bBjrmL._SX300_SY300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3EzeQaC",
    description: "Xiaomi [Smartchoice] Notebookpro",
    price: "49999",
  },
  {
    id: 24,
    category: "tablets",
    title: "Xiaomi Pad 6",
    imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
    amazonLink: "https://amzn.to/3ZeNRdY",
    description: "Xiaomi Pad 6| Qualcomm Snapdragon 870|",
    price: "29999",
  },
  {
    id: 25,
    category: "mobiles",
    title: "Apple iPhone 11",
    imgSrc:
      "https://m.media-amazon.com/images/I/31Na4uyIEyL._SY445_SX342_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/44MiYi6",
    description: "Apple iPhone 11 (64GB) - White",
    price: "79999",
  },
  {
    id: 26,
    category: "tablets",
    title: "Lenovo Tab P12 Pro AMOLED",
    imgSrc:
      "https://m.media-amazon.com/images/I/415gV21fNCL._SX300_SY300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3RabsdH",
    description:
      "Lenovo Tab P12 Pro AMOLED (12.6 inch (32 cm), 8 GB, 256 GB, Wi-fi Only), Storm Grey with Precision Pen 3",
    price: "19999",
  },
  {
    id: 27,
    category: "mobiles",
    title: "Apple iPhone 13",
    imgSrc: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3r6XJtv",
    description: "Apple iPhone 13 (128GB) - Blue",
    price: "69999",
  },
  {
    id: 28,
    category: "laptops",
    title: "Lenovo IdeaPad Slim 5 ",
    imgSrc:
      "https://m.media-amazon.com/images/I/418LKVJFftL._SY300_SX300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/44JsK4r",
    description: "Lenovo IdeaPad Slim 5 Intel Core i5 12450H 14 (35.5cm)",
    price: "29999",
  },
  {
    id: 29,
    category: "tablets",
    title: "Samsung Galaxy Tab A8",
    imgSrc:
      "https://m.media-amazon.com/images/I/31qVIrbLqJL._SY300_SX300_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/3Pdsh4F",
    description:
      "Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)",
    price: "49999",
  },
  {
    id: 30,
    category: "laptops",
    title: "Apple MacBook Air Laptop",
    imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3r9rvhm",
    description:
      "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display",
    price: "89999",
  },
  {
    id: 31,
    category: "t-shirts",
    title: "Men's Classic T-Shirt",
    imgSrc:
      "https://www.nonasties.in/cdn/shop/products/black-henley-no-nasties-organic-cotton-clothes-1_640x_crop_center.jpg?v=1668329360",
    amazonLink: "https://amzn.to/3IhIks7",
    description: "Men's Classic T-Shirt - 100% Cotton Short Sleeve Tee",
    price: "1999",
  },
  {
    id: 32,
    category: "t-shirts",
    title: "Women's V-Neck T-Shirt",
    imgSrc: "https://m.media-amazon.com/images/I/71f1iF7s0GL._SY879_.jpg",
    amazonLink: "https://amzn.to/3r3yv1F",
    description: "Women's V-Neck T-Shirt - Slim Fit Basic Short Sleeve Tee",
    price: "1699",
  },
  {
    id: 33,
    category: "t-shirts",
    title: "Men's Graphic T-Shirt",
    imgSrc:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/0/n/w/xl-hood-283-checkedshirt-black-lewel-original-imagjp3t3zsgtddh.jpeg?q=70",
    amazonLink: "https://amzn.to/3r8i7D9",
    description: "Men's Graphic T-Shirt - 100% Cotton Short Sleeve Tee",
    price: "2299",
  },
  {
    id: 34,
    category: "t-shirts",
    title: "Women's Crewneck T-Shirt",
    imgSrc: "https://m.media-amazon.com/images/I/71txf2tWwCL._SY879_.jpg",
    amazonLink: "https://amzn.to/3Ezt81n",
    description: "Women's Crewneck T-Shirt - Casual Short Sleeve Tee",
    price: "1899",
  },
];

export default items;
