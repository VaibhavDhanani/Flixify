const SERIES = [
  {
    id: 1,
    title: "K-Dramas",
    movies: [
      {
        id: 1,
        name: "Goblin",
        imageUrl: "https://imgs.search.brave.com/jykNpRCR01aXgmk50Spw-8GT2jkH5k91meQXw-7Z1h4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlltTm1Nek5p/TUdJdFlXUXdPQzAw/TWpKaExXRTRabVV0/TURGbVlUWm1ZV1Zt/WXpreVhrRXlYa0Zx/Y0dkZVFYVnlPRFl5/TXpVeE5Ua0AuanBn",
        ratings: 4.8,
        totalSeasons: 1,
        totalLikes: 2500,
      },
      {
        id: 2,
        name: "Crash Landing on You",
        imageUrl: "https://imgs.search.brave.com/dhoYs4cFguWRrI7U0tm_9QglGhBv1-QtEGSEiJewt8U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vaHctbWVk/aWEuaGVyd29ybGQu/Y29tL3B1YmxpYy8y/MDIwLzAyL0NMT1kx/LmpwZz93PTc1MCZz/c2w9MQ",
        ratings: 4.7,
        totalSeasons: 1,
        totalLikes: 3000,
      },
      {
        id: 3,
        name: "Descendants of the Sun",
        imageUrl: "https://imgs.search.brave.com/xBi2BxMHggyYPrW4mNZ9cWEzESzKPxBcLwAY4RoJwm4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc2lh/bndpa2kuY29tL2lt/YWdlcy9lL2UzL0Rl/c2NlbmRhbnRzX29m/X3RoZV9TdW4tcDEu/anBn",
        ratings: 4.6,
        totalSeasons: 1,
        totalLikes: 2800,
      },
      {
        id: 4,
        name: "It's Okay to Not Be Okay",
        imageUrl: "https://imgs.search.brave.com/jk3UpsmNGYVBdXPO_tVnohplJ2RvcyFhQfHv3s-W-a8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc2lh/bndpa2kuY29tL2lt/YWdlcy9kL2Q1L0l0/J3NfT2theV90b19O/b3RfQmVfT2theS1D/UHNtMS5qcGc",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 5,
        name: "Boys Over Flowers",
        imageUrl: "https://imgs.search.brave.com/H7Dh0Iml8HU2MQEIr_OZd1m6wmrDBzvN8Y46-PG-SsM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLm15/ZHJhbWFsaXN0LmNv/bS9kOEtyZ18zcy5q/cGc",
        ratings: 4.5,
        totalSeasons: 2,
        totalLikes: 2700,
      },
      {
        id: 6,
        name: "Vincenzo",
        imageUrl: "https://imgs.search.brave.com/VXb1erpYtD8KxHi9_jz29vZ-bU_gcYuowYwUFuaDN5E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvdmluY2Vuem8t/cGljdHVyZXMtM2o1/eHIxMHhnYWpyNmR5/OS5qcGc",
        ratings: 4.8,
        totalSeasons: 1,
        totalLikes: 3100,
      },
      {
        id: 7,
        name: "My Love from the Star",
        imageUrl: "https://example.com/my-love-from-the-star.jpg",
        ratings: 4.6,
        totalSeasons: 1,
        totalLikes: 2900,
      },
      {
        id: 8,
        name: "Reply 1988",
        imageUrl: "https://example.com/reply-1988.jpg",
        ratings: 4.7,
        totalSeasons: 1,
        totalLikes: 2800,
      },
      {
        id: 9,
        name: "Strong Woman Do Bong-soon",
        imageUrl: "https://example.com/strong-woman-do-bong-soon.jpg",
        ratings: 4.7,
        totalSeasons: 1,
        totalLikes: 3000,
      },
      {
        id: 10,
        name: "Hospital Playlist",
        imageUrl: "https://example.com/hospital-playlist.jpg",
        ratings: 4.8,
        totalSeasons: 1,
        totalLikes: 3200,
      },
    ],
  },
  {
    id: 2,
    title: "Anime",
    movies: [
      {
        id: 1,
        name: "Naruto",
        imageUrl: "https://imgs.search.brave.com/ITHgR82OK2_k4XNXzLOTmxuW--0KW1LsMiO4ggqXsZI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85MC82/Ni81bDdrQTQuanBn",
        ratings: 4.5,
        totalSeasons: 9,
        totalLikes: 5000,
      },
      {
        id: 2,
        name: "Attack on Titan",
        imageUrl: "https://imgs.search.brave.com/OT8Rr85kDjov9OLndaGNXFi_mtGUHyD4H6WN7cicdPU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzY2/NTguanBn",
        ratings: 4.6,
        totalSeasons: 4,
        totalLikes: 4500,
      },
      {
        id: 6,
        name: "Demon Slayer: Kimetsu no Yaiba",
        imageUrl: "https://imgs.search.brave.com/NIYtTKIoaPwYUYZ59Zh2TY25JOx8MqombwrZA8iD0ik/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTA5/OTUyOS5qcGc",
        ratings: 4.8,
        totalSeasons: 2,
        totalLikes: 5100,
      },
      {
        id: 3,
        name: "One Piece",
        imageUrl: "https://imgs.search.brave.com/MBfkX9Ql-P83G2v7uQMdYkh8RZYmCPSr02JW2mtGXwE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvb25lLXBpZWNl/LXBpY3R1cmVzLWJq/bTl0ZGZmOXl6Z3Vv/dXAuanBn",
        ratings: 4.7,
        totalSeasons: 20,
        totalLikes: 5500,
      },
      {
        id: 4,
        name: "Dragon Ball Z",
        imageUrl: "https://imgs.search.brave.com/18Cnf5vMUU0Rp9uX6MyN2JoH4PlFqpPBVsmfO3RPIls/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYnJvbHktcGI5/a255azZ5NzZzYjdo/cy5qcGc",
        ratings: 4.5,
        totalSeasons: 9,
        totalLikes: 4800,
      },
      {
        id: 5,
        name: "Death Note",
        imageUrl: "https://example.com/death-note.jpg",
        ratings: 4.8,
        totalSeasons: 1,
        totalLikes: 5200,
      },
      {
        id: 7,
        name: "Fullmetal Alchemist: Brotherhood",
        imageUrl: "https://example.com/fullmetal-alchemist.jpg",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 5400,
      },
      {
        id: 8,
        name: "My Hero Academia",
        imageUrl: "https://example.com/my-hero-academia.jpg",
        ratings: 4.7,
        totalSeasons: 5,
        totalLikes: 4900,
      },
      {
        id: 9,
        name: "Sword Art Online",
        imageUrl: "https://example.com/sword-art-online.jpg",
        ratings: 4.4,
        totalSeasons: 4,
        totalLikes: 4700,
      },
      {
        id: 10,
        name: "Hunter x Hunter",
        imageUrl: "https://example.com/hunter-x-hunter.jpg",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
    ],
  },
];

export default SERIES;