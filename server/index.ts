import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

// todo: move this data into a DB
const tracks = [
  {
    "id": 1,
    "name": "First Snow",
    "artist": "Emancipator",
    "album": "7,000 plays",
    "url": "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
    "cover_art_url": "https://images.unsplash.com/photo-1736457908762-d6ae9e5fb593?q=80&w=192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 2,
    "name": "Intro / Sweet Glory",
    "artist": "Jimkata",
    "album": "21,345 plays",
    "url": "https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3",
    /* source: https://unsplash.com/photos/a-close-up-of-a-red-object-with-a-blurry-background-wEK9gAJPL8s */
    "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg"
  },
  {
    "id": 3,
    "name": "Offcut #6",
    "artist": "Little People",
    "album": "500 plays",
    "url": "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
    "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg"
  },
  {
    "id": 4,
    "name": "Dusk To Dawn",
    "artist": "Emancipator",
    "album": "80,020 plays",
    "url": "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
    "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg"
  },
  {
    "id": 5,
    "name": "Anthem",
    "artist": "Emancipator",
    "album": "Soon It Will Be Cold Enough",
    "url": "https://521dimensions.com/song/Anthem-Emancipator.mp3",
    "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
  }
];

// todo: add middlware for cross cutting concerns
// like security, authorization, caching, rate limiting

app.get("/api/tracks", (req, res) => {
  res.json(tracks);
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});