export interface Product {
  id: number;
  link: string;
  name: string;
  img: string[];
  price: number;
  description: string;
  rating:number;

}

export const products = [
  {
    id: 1,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium"],
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 297488,
    description: 'nFC technology: Yes\n' +
        'color: черный\n' +
        'screen type: OLED, Gorilla Glass Victus\n' +
        'diagonal: 6.1 inch\n' +
        'rAM size: 4 GB\n' +
        'processor: 6-ядерный Apple A15 Bionic\n' +
        'built-in memory: 128.0 GB\n' +
        'battery capacity: 3095.0 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    rating: 5,

  },
  {
    id: 2,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium"],
    name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    price: 70717,
    description: 'nFC technology: Yes\n' +
        'black color\n' +
        'screen type: OLED, touch\n' +
        'diagonal: 6.5 inch\n' +
        'rAM size: 6 GB\n' +
        'processor: 8-ядерный MediaTek Helio G99\n' +
        'built-in memory: 128.0 ГБ\n' +
        'battery capacity: 5000.0 мАч',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000',
    rating: 5,

  },
  {
    id: 3,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium"],
    name: 'Ноутбук Apple MacBook Air 13 MGN63RU/A серый',
    price: 458000,
    description: 'screen diagonal: 13.3 дюйм\n' +
        'processor: Apple M1\n' +
        'video card:Apple M1\n' +
        'rAM size: 8.0 Гб\n' +
        'hard drive type: SSD\n' +
        'total storage capacity: 256.0 Гб',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63ru-a-seryi-101182724/?c=750000000',
    rating: 5,

  },
  {
    id: 4,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/84577188020254.jpg?format=gallery-medium"],
    name: 'Ноутбук Apple MacBook Pro 14 MRX33 черный',
    price: 1020192,
    description: 'screen diagonal: 14.2 дюйм\n' +
        'processor: Apple M3 Pro\n' +
        'video card:Apple M3 Pro 14-Core\n' +
        'rAM size: 18.0 Гб\n' +
        'hard drive type: SSD\n' +
        'total storage capacity: 512.0 Гб',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/?c=750000000',
    rating: 5,

  },{
    id: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h10/hf6/84798670831646.jpg?format=gallery-medium"],
    name: 'LEGO Fast and Furious 2 Nissan Skyle 76917, parts 319 pcs.',
    price: 14189,
    description: 'type: block\n' +
        'number of parts: 319\n' +
        'lEGO Series: Speed ​​Champions\n' +
        'child gender: boy\n' +
        'color: multicolor\n' +
        'main material: plastic',
    link: 'https://kaspi.kz/shop/p/lego-forsazh-2-nissan-skail-76917-detalei-319-sht-108313086/?c=750000000',
    rating: 0,

  },{
    id:6,
    img:["https://resources.cdn-kaspi.kz/img/m/p/he9/h5d/64030413226014.jpg?format=gallery-medium"],
    name:"Mouse Xiaomi Mi Portable Mouse 2 BXSBMW02-BLACK black",
    price:6499,
    description:"sensor type: optical laser\n" +
        "connection type: wireless\n" +
        "interface: USB, ,Bluetooth\n" +
        "design: for right and left hand\n" +
        "gaming: Yes\n" +
        "optical sensor resolution: 4000.0 dpi",
    link:"https://kaspi.kz/shop/p/xiaomi-mi-portable-mouse-2-bxsbmw02-black-chernyi-102134869/?c=750000000",
    rating: 5,

  },{
    id:7,
    img:["https://resources.cdn-kaspi.kz/img/m/p/hcc/hfc/83011845849118.jpg?format=gallery-medium"],
    name:"Smart watch Google Pixel Watch gold-gray",
    price:129900,
    description:"platform Support: Android\n" +
        "case material: stainless steel steel\n" +
        "case color: golden\n" +
        "case shape: round\n" +
        "interfaces: Bluetooth, ,Wi-Fi\n" +
        "screen technology: AMOLED\n" +
        "rAM capacity: 2 GB\n" +
        "built-in memory: 32 GB\n" +
        "operating time: up to 24 hours",
    link:"https://kaspi.kz/shop/p/google-pixel-watch-zolotistyi-seryi-112726642/?c=750000000",
    rating: 4.5,

  }
  ,{
    id:8,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h6c/h33/68441429016606.jpg?format=gallery-medium"],
    name:"Monitor AOC 25G3ZM/BK black",
    price:108910,
    description:"diagonal: 24.5 inch\n" +
        "resolution: 1920x1080\n" +
        "lCD Matrix Type: TFT *VA\n" +
        "brightness: 300.0 cd/m2\n" +
        "response time: 1.0ms\n" +
        "max. Frame rate: 240.0 Hz\n" +
        "inputs: HDMI, ,DisplayPort",
    link:"https://kaspi.kz/shop/p/aoc-25g3zm-bk-chernyi-108668975/?c=750000000",
    rating: 0,

  },{
    id:9,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h2f/h5e/64392799059998.jpg?format=gallery-medium"],
    name:"Smartphone Google Pixel 6a 6 GB/128 GB white",
    price:174998,
    description:"nFC technology: Yes\n" +
        "white color\n" +
        "screen type: Super AMOLED, capacitive, multi-touch\n" +
        "diagonal: 6.2 inch\n" +
        "rAM size: 6 GB\n" +
        "processor: 8 cores (2x2.80 GHz Cortex-X1 and 2x2.25 GHz Cortex-A76 and 4x1.80 GHz Cortex-A55)\n" +
        "built-in memory: 128.0 GB\n" +
        "battery capacity: 4800.0 mAh",
    link:"https://kaspi.kz/shop/p/google-pixel-6a-6-gb-128-gb-belyi-106250314/?c=750000000",
    rating: 5,

  },{
    id:10,
    img:["https://resources.cdn-kaspi.kz/img/m/p/ha9/h27/64163639001118.jpg?format=gallery-medium"],
    name:"RAM Kingston Fury Beast KF432C16BBK2/16 16 GB",
    price:20590,
    description:"Tmemory type: DDR4\n" +
        "form factor: DIMM\n" +
        "number of modules included: 2\n" +
        "clock frequency: 3200 MH",
    link:"https://kaspi.kz/shop/p/kingston-fury-beast-kf432c16bbk2-16-16-gb-101900315/?c=750000000",
    rating: 4.5,

  }
];

