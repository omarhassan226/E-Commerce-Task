import { IProduct } from '../models/product.model';

export const MOCKING_PRODUCTS: IProduct[] = [
  {
    id: '1',
    name: 'bleu de chanel',
    type: 'Eau de Parfum Spray',
    price: 132,
    image: 'product-image-1.webp',
    stock: 5,
    descriptions: [
      {
        title: 'product',
        description:
          'Unexpected and undeniably bold. Fresh, clean and profoundly sensual, the woody, aromatic fragrance reveals the spirit of a man who chooses his own destiny with independence and determination—a man who defies convention.',
      },
      {
        title: 'COMPOSITION',
        description:
          'The fragrance features a fresh citrus accord followed by ambery cedar. Woody notes are amplified by tonka bean and vanilla for heightened sensuality. New Caledonian sandalwood unfolds at the base for greater depth, leaving a captivating trail',
      },
      {
        title: 'ART OF PERFUMING',
        description: 'The Eau de Parfum comes in a spray for easy application.',
      },
    ],
  },
  {
    id: '2',
    name: 'chance eau tendre',
    type: 'Eau de Parfum Spray',
    price: 176,
    image: 'product-image-2.webp',
    stock: 7,
    descriptions: [
      {
        title: 'PRODUCT',
        description:
          'An enhanced interpretation of the unexpected floral-fruity fragrance, CHANCE EAU TENDRE Eau de Parfum possesses a tender, delicate presence that sweeps you into a whirlwind of happiness and fantasy—a chance encounter.<br /><br />I saw an opportunity, and I took it.” Gabrielle Chanel knew that her real chance was the one of her own creation, a state of mind, a way of being',
      },
      {
        title: 'COMPOSITION',
        description:
          'A dazzling constellation of notes is intensified by jasmine absolute and rose essence. An intoxicatingly soft and enveloping trail unfurls for a radiant and feminine scent.',
      },
      {
        title: 'INSPIRATION',
        description:
          "It comes and goes, it never stays put… and you only have a few seconds to seize your chance. It is unpredictable and appears when you least expect it, but if you decide to seize it, anything is possible. 'A chance came up, I seized it. 'Mademoiselle Chanel knew that her real chance was the one of her own creation, a state of mind, a way of being.",
      },
      {
        title: 'ART OF PERFUMING',
        description: 'The Eau de Parfum comes in a spray for easy application.',
      },
    ],
  },
  {
    id: '3',
    name: 'coco mademoiselle',
    type: 'Eau de Parfum Spray',
    price: 143,
    image: 'product-image-3.webp',
    stock: 6,
    descriptions: [
      {
        title: 'PRODUCT',
        description:
          'rresistibly sensual, irrepressibly spirited. A sparkling, bold ambery fragrance that recalls a daring young Coco Chanel. An absolutely modern composition with a strong yet surprisingly fresh character.<br /><br />A double name, a double personality. Independent and endearing, mischievous and provocative, light and exuberant. The expression of a woman free to reinvent herself day after day.',
      },
      {
        title: 'COMPOSITION',
        description:
          'Vibrant orange immediately awakens the senses. A clear and sensual heart reveals a transparent accord of jasmine and May rose. The scent finally unfurls with refined accents of patchouli and vetiver.',
      },
      {
        title: 'ART OF PERFUMING',
        description: 'The Eau de Parfum comes in a spray for easy application.',
      },
    ],
  },
];
