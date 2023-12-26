import bim1 from "@/assets/project/bm-1.png";
import bim2 from "@/assets/project/bm-2.png";
import bim3 from "@/assets/project/bm-3.png";

import msk1 from "@/assets/project/msk-1.png";
import msk2 from "@/assets/project/msk-2.png";
import msk3 from "@/assets/project/msk-3.png";

import md1 from "@/assets/project/md-1.jpg";
import md2 from "@/assets/project/md-2.jpg";
import md3 from "@/assets/project/md3.png";

export default [
  {
    id: 1,
    icon: "src/assets/project/bimlib-logo.svg",
    title: "BimLib",
    date: "2023-настоящее время",
    text: "Профессиональная площадка для производителей, заказчиков, инженеров-проектировщиков, сметчиков и иных профессионалов стройиндустрии. Цифровые каталоги, AR- и BIM-модели, сервис мониторинга проектных потребностей, отраслевые новости, статьи и обсуждения.",
    short_text:
      "Профессиональная площадка для производителей, заказчиков, инженеров-проектировщиков...",
    tags: ["Frontend", "Middle"],
    stack: ["Nuxt", "Vue", "Vuetify", "Pinia", "TS", "Quasar"],
    link: "/project/1",
    img: [bim1, bim2, bim3],
  },
  {
    id: 2,
    icon: "src/assets/project/market-logo.svg",
    title: "Market-Data",
    date: "2021-2022",
    text: "Высокоточный сервис внутренней аналитики, который поможет вам продавать на Wildberries. С помощью этого сервиса вы можете отслеживать важные показатели, такие как продажи, выручка, коэффициент конверсии и поведение клиентов, чтобы принимать обоснованные решения относительно списка ваших товаров и маркетинговых стратегий.",
    short_text:
      "Высокоточный сервис внутренней аналитики, который поможет вам продавать на Wildberries...",
    tags: ["Frontend", "Junior", "Co-Designer"],
    stack: ["Vue 3", "Vuex", "SCSS", "ApexChart"],
    link: "/project/2",
    img: [md3, md2, md1],
  },
  {
    id: 3,
    icon: "src/assets/project/msk-logo.png",
    title: "MskVolley",
    date: "2021-2022",
    text: "Платформа принимает заявки от команд на старт чемпионата, координирует проведение матчей и вводит результаты игр.  Это исключает рутину и делает процесс простым и быстрым.  А команды и организаторы находят время, чтобы насладиться игрой!",
    short_text:
      "Платформа принимает заявки от команд на старт чемпионата, координирует проведение матчей...",
    tags: ["Frontend", "Junior"],
    stack: ["Vue", "Vuetify", "Vuex", "VueDataTable"],
    link: "/project/3",
    img: [msk1, msk2, msk3],
  },
];
