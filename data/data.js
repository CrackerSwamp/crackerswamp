// CRACKER SWAMP DATA SYSTEM

export const bands = [
  {
    id: "love-tractor",
    name: "Love Tractor",
    location: "Athens, GA",
    genre: "Indie / Punk",
    image: "/assets/bands/LoveTractor.jpg",
    links: {
      instagram: "",
      spotify: "",
      youtube: "biYofdnvXGk"
    }
  },
  {
    id: "nuclear-tourist",
    name: "Nuclear Tourist",
    location: "Atlanta, GA",
    genre: "Punk",
    image: "/assets/bands/nuclear-tourist.jpg",
    links: {
      instagram: "",
      spotify: "",
      youtube: ""
    }
  }
];

export const videos = [
  {
    id: "vid1",
    bandId: "love-tractor",
    title: "Love Tractor - Video",
    youtubeId: "YjD9Uycc01I",
    state: "georgia"
  },
  {
    id: "vid2",
    bandId: "nuclear-tourist",
    title: "Nuclear Tourist - Track",
    youtubeId: "ysz5S6PUM-U",
    state: "georgia"
  }
];

export const radio = [
  {
    id: "track1",
    title: "Swamp Static",
    band: "Love Tractor",
    file: "/assets/music/swamp-static.mp3",
    category: "Georgia"
  }
];
