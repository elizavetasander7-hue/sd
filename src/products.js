
// import mapImg from './images/map1.jpg';
// import mapImg1 from './images/orig.jpg';
// import mapImg2 from './images/m.png';
// import mapImg3 from './images/m4.jpeg';
// import mapImg4 from './images/m6.jpg';
// import mapImg5 from './images/m7.jpeg';
const products = [
  // Ноутбукиpng
  { 
    id: 1, 
    name: 'Ноутбук Honor MagicBook', 
    price: 55000,
    category: 'notebooks',
    brand: 'honor',
    image: 'mapImg',
    details: {
      processor: 'AMD Ryzen 5 5500U',
      ram: '16 GB DDR4',
      storage: '512 GB SSD',
      display: '14" IPS Full HD',
      graphics: 'AMD Radeon Graphics',
      os: 'Windows 11 Home',
      weight: '1.38 кг',
      battery: '56 Вт·ч'
    }
  },
  { 
    id: 2, 
    name: 'Клавиатура Logitech MX Keys', 
    price: 12000,
    category: 'notebooks',
    brand: 'logitech',
    image: 'mapImg1',
    details: {
      type: 'Беспроводная',
      connectivity: 'Bluetooth, USB',
      backlight: 'Да',
      battery: 'До 10 дней',
      compatibility: 'Windows, macOS, Linux'
    }
  },
  { 
    id: 3, 
    name: 'Процессор AMD Ryzen 7 7800X3D OEM', 
    price: 28699,
    category: 'notebooks',
    brand: 'amd',
    image: 'mapImg2',
    details: {
      socket: 'AM5',
      cores: '8',
      frequency: '4.2 ГГц – 5 ГГц',
      cache: '96 МБ (L3)',
      graphics: 'AMD Radeon Graphics',
      tdp: '120 Вт',
      package: 'OEM',
      warranty: '12 месяцев'
    }
  },
  // Смартфоны
  { 
    id: 4, 
    name: 'Смартфон Apple iPhone 14', 
    price: 75000,
    category: 'smartphones',
    brand: 'apple',
    image: 'mapImg3',
    details: {
      screen: '6.1" OLED Super Retina XDR',
      camera: '12MP + 12MP (двойная)',
      battery: '3279 мАч',
      processor: 'Apple A15 Bionic',
      ram: '6 GB',
      storage: '128 GB'
    }
  },
  // Смарт-часы
  { 
    id: 5, 
    name: 'Смарт-часы Apple Watch Series 8', 
    price: 35000,
    category: 'smartwatches',
    brand: 'apple',
    image: 'mapImg4',
    details: {
      display: 'Always-On Retina',
      size: '45mm',
      features: 'ЭКГ, измерение кислорода в крови',
      battery: 'До 18 часов',
      water_resistance: 'WR50'
    }
  },
  // Наушники
  { 
    id: 6, 
    name: 'Наушники Sony WH-1000XM5', 
    price: 25000,
    category: 'headphones',
    brand: 'sony',
    image: 'mapImg5',
    details: {
      type: 'Беспроводные',
      noise_cancelling: 'Да',
      battery: 'До 30 часов',
      connectivity: 'Bluetooth 5.2',
      weight: '250 г'
    }
  }, 
  // Холодильники
   { 
    id: 7, 
    name: 'Холодильник LG Smart Inverter', 
    price: 45000,
    category: 'refrigerators',
    brand: 'lg',
    image: 'mapImg5',
    details: {
      type: 'Двухкамерный',
          capacity: '230 л',
      weight: '65 кг',
      dimensions: '60 x 203 x 66 см',
        warranty: '3 года'
    }
  },
    { 
    id: 8, 
    name: 'Холодильник Samsung Twin Cooling+', 
    price: 52000,
    category: 'refrigerators',
    brand: 'samsung',
    image: 'mapImg1',
    details: {
      type: 'Side-by-Side',
      capacity: '382 л',
      dimensions: '91 x 180 x 72 см',
      weight: '85 кг',
      warranty: '2 года'
    }
  },
  { 
    id: 9, 
    name: 'Холодильник Bosch Serie 6', 
    price: 38999,
    category: 'refrigerators',
    brand: 'bosch',
    image: 'mapImg2',
    details: {
      type: 'Двухкамерный',
      capacity: '334 л',
      dimensions: '60 x 185 x 65 см',
      weight: '60 кг',
      warranty: '2 года'
    }
  },
   { 
    id: 10, 
    name: 'Холодильник Haier', 
    price: 29998,
    category: 'refrigerators',
    brand: 'haier',
    image: 'mapImg3',
    details: {
      type: 'Однокамерный',
      capacity: '280 л',
      dimensions: '55 x 170 x 60 см',
      weight: '50 кг',
      warranty: '1 год'
    }
  },
  // Телевизоры
{ 
  id: 11, 
  name: 'Телевизор Samsung QLED 4K', 
  price: 49999,
  category: 'tv',
  brand: 'samsung',
  image: 'mapImg4',
  details: {
    type: 'QLED 4K',
    screen_size: '55"',
    resolution: '3840 x 2160',
    refresh_rate: '120 Гц',
    connectivity: 'Wi-Fi, Bluetooth, HDMI x4',
    dimensions: '123 x 71 x 6 см',
    weight: '18 кг',
    warranty: '3 года'
  }
},
{ 
  id: 12, 
  name: 'Телевизор LG OLED evo', 
  price: 79999,
  category: 'tv',
  brand: 'lg',
  image: 'mapImg5',
  details: {
    type: 'OLED evo 4K',
    screen_size: '65"',
    resolution: '3840 x 2160',
    refresh_rate: '120 Гц',
    connectivity: 'Wi-Fi, Bluetooth, HDMI x4',
    dimensions: '145 x 83 x 5 см',
    weight: '24 кг',
    warranty: '3 года'
  }
},
{ 
  id: 13, 
  name: 'Телевизор Sony Bravia XR', 
  price: 89999,
  category: 'tv',
  brand: 'sony',
  image: 'mapImg',
  details: {
    type: 'OLED 4K XR',
    screen_size: '65"',
    resolution: '3840 x 2160',
    refresh_rate: '120 Гц',
    connectivity: 'Wi-Fi, Bluetooth, HDMI x4',
    dimensions: '145 x 84 x 4 см',
    weight: '22 кг',
    warranty: '3 года'
  }
},
// Смартфоны
{ 
  id: 14, 
  name: 'Смартфон Samsung Galaxy S24 Ultra', 
  price: 99999,
  category: 'smartphones',
  brand: 'samsung',
  image: 'mapImg1',
  details: {
    screen: '6.8" Dynamic AMOLED 2X',
    camera: '200MP + 12MP + 50MP + 10MP',
    processor: 'Snapdragon 8 Gen 3',
    ram: '12 GB',
    storage: '256 GB',
    battery: '5000 мАч'

  }
},
{ 
  id: 15, 
  name: 'Смартфон Google Pixel 8 Pro', 
  price: 79999,
  category: 'smartphones',
  brand: 'google',
  image: 'mapImg2',
  details: {
    screen: '6.7" OLED LTPO',
    camera: '50MP + 48MP + 12MP',
    processor: 'Google Tensor G3',
    ram: '12 GB',
    storage: '128 GB',
    battery: '5050 мАч'
  }
},
// Смарт-часы
{ 
  id: 16, 
  name: 'Смарт-часы Samsung Galaxy Watch 6 Classic', 
  price: 19000,
  category: 'smartwatches',
  brand: 'samsung',
  image: 'mapImg3',
  details: {
    display: '1.5" Super AMOLED',
    size: '47 мм',
    features: 'ЭКГ, измерение давления, сон, SpO2',
    battery: 'До 40 часов',
    water_resistance: '5 ATM'
  }
},
{ 
  id: 17, 
  name: 'Смарт-часы Apple Watch Ultra 2', 
  price: 9999,
  category: 'smartwatches',
  brand: 'apple',
  image: 'mapImg4',
  details: {
    display: '1.92" Always-On Retina LTPO',
    size: '49 мм',
    features: 'ЭКГ, SpO2, GPS, компас, альтиметр',
    battery: 'До 36 часов (72 часа в режиме экономии)',
    water_resistance: '100 м'
  }
},

// Наушники
{ 
  id: 18, 
  name: 'Наушники Apple AirPods Max', 
  price: 54999,
  category: 'headphones',
  brand: 'apple',
  image: 'mapImg4',
  details: {
    type: 'Беспроводные',
    noise_cancelling: 'Да',
    battery: 'До 20 часов',
    connectivity: 'Bluetooth 5.0',
    weight: '385 г'
  }
},
{ 
  id: 19, 
  name: 'Наушники Bose QuietComfort Ultra', 
  price: 29999,
  category: 'headphones',
  brand: 'bose',
  image: 'mapImg5',
  details: {
    type: 'Беспроводные',
    noise_cancelling: 'Да',
    battery: 'До 24 часов',
    connectivity: 'Bluetooth 5.3',
    weight: '250 г'
  }
}
];

export default products;
