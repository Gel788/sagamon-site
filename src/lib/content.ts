export const artist = {
  name: "Давид Сагомонянц",
  stage: "SAGAMON",
  latin: "David Sagamonyants",
  tagline: "Отец, музыкант, бизнесмен",
  birth: "Владикавказ, 1987",
  quote:
    "Я настоящий фанат игры на барабанах! Вся моя жизнь связана с музыкой. Весь мир меня вдохновляет!",
  wisdom: "Настойчивость рождает результат.",
} as const;

export const stats = [
  { value: "TOP 5", label: "барабанщиков мира", sub: "Roland V-Drums, LA 2012" },
  { value: "40+", label: "стран", sub: "от клубов до арен" },
  { value: "14", label: "лет на сцене", sub: "с 14 лет — профессионал" },
  { value: "SD", label: "DRUM SHOW", sub: "основатель фестиваля" },
] as const;

export const bio = [
  "Родился в семье музыкантов во Владикавказе. В шесть лет — скрипка, оркестровые концерты. В четырнадцать — барабаны и джаз навсегда.",
  "Ростовская консерватория им. Рахманинова. Лауреат международных конкурсов. Представлял Россию на Roland V-Drums Contest в Лос-Анджелесе — вошёл в пятёрку лучших барабанщиков планеты.",
  "Играет джаз, рок, хип-хоп, fusion и world music — от камерных клубов до многотысячных арен. Барабанщик Скриптонита и MOT — на сцене и в студии. Сотрудничал с Joe Lynn Turner, Steve Turre, Karl Frierson и оркестром Игоря Бутмана.",
] as const;

export const collaborators = [
  "Scriptonite",
  "Joe Lynn Turner",
  "Steve Turre",
  "Karl Frierson",
  "Igor Butman Orchestra",
  "Mark Evich",
  "MOT",
  "XUMAN",
  "Manuk Gazaryan",
  "Zoltan Lantos",
] as const;

export const endorsements = [
  "Zildjian",
  "TAMA",
  "Roland",
  "Vic Firth",
  "Sonor",
] as const;

export const awards = [
  "Grand Prix — Yamaha Music Award (2010)",
  "Победитель — Roland V-Drums Contest Russia (2011)",
  "Top 5 Worldwide — Roland V-Drums, Los Angeles (2012)",
  "Лауреат — международный конкурс джазовых исполнителей (2007)",
  "SONOR Drum Festival — Moscow (2017)",
] as const;

export const links = {
  sonor: "https://www.sonor.com/drums/artists/artists-detail/david-sagamonyants",
  zildjian: "https://zildjian.com/blogs/artist/david-sagamonyants",
  sdDrumSchool: "https://t.me/sddrum",
  telegram: "https://t.me/sddrum",
  shop: "https://sdmusic.shop",
  instagram:
    "https://www.instagram.com/sddrumshow?igsh=MWR1aDhuNDJ3ZHhvMg==",
  youtube: "https://youtube.com/@sddrumshow?si=hAa0_OEyoucC3g-S",
  vk: "https://vk.com/sddrumshow",
} as const;

export const navItems = [
  { href: "#about", label: "О музыканте" },
  { href: "#legacy", label: "Достижения" },
  { href: "#collabs", label: "Коллаборации" },
  { href: "#festival", label: "SD Drum School" },
  { href: "#contact", label: "Контакт" },
] as const;
