# Learn-English-with-Ruby
 🎮 English Learning Game – "Roli Teaches English"

Welcome to the interactive English-learning game designed to be fun, challenging, and educational!

> **"Hi, I'm Roli, here to teach you English – let's get started!"**

---

## 🧠 About the Game

The game displays images along with 3 possible English spellings of a word. The player must select the correct option within a limited time to score points.

It features a dynamic user experience, smart timers, engaging animations, and a robot character (Roli) that guides, encourages, and interacts vocally with the player.

---

## 🧩 Game Structure

### 🏠 Home Page
- Player registration and login.
- Intro by Roli with animated text and voice.

### 🎚️ Level Page
- Choose from 3 difficulty levels:
  - Affects the complexity and number of words per level.
- Detailed game instructions.
- Option to view player achievements.

### 🎮 Game Page
- Hover over the image to reveal the Hebrew translation.
- Current score display.
- 10-second timer for each question.
- Automatic transition to the next question if time runs out.

### 🏆 End of Game
- Level summary screen.
- Option to proceed to the next level or return to level selection.
- Final achievements page.

---

## ✨ Special Features

- **Live Typing Animation by Roli**:
  ```js
  function typeLetter() {
      if (index == 0) {
          playAudiohp();
      }
      if (index < text.length) {
          document.getElementById("output").innerHTML += text.charAt(index);
          index++;
          if (text_output.style.display != 'none') {
              setTimeout(typeLetter, 80);
          }
      }
  }
  ```
  Simulates live typing to mimic Roli speaking in real time.

- **Interactive Audio**: Roli greets players, cheers on success, and offers encouragement after incorrect answers.

- **Confetti Animation on Correct Answers**:
  - Celebratory confetti stars on correct answers.
  - Customized for position, duration, and speed.
  - Powered by a carefully chosen external library.

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (with animations)
- Vanilla JavaScript
- Audio API
- External confetti animation library

---

## 🚀 How to Run

1. Download the project files.
2. Open `index.html` in your browser.
3. Register or log in to the game.
4. Choose a level and start learning English with Roli! 🎉

---

## 📁 Project Structure

```
project-folder/
│
├── index.html         # Home page
├── level.html         # Level selection page
├── game.html          # Main game interface
├── result.html        # End of game summary
│
├── /css               # Styling
│   └── style.css
│
├── /js                # Scripts
│   ├── main.js
│   └── gameLogic.js
│
├── /assets
│   ├── images/        # Game images
│   └── audio/         # Roli’s voice clips
```

---

## 📣 Credits

- Development & Design: **Roli – Software Engineer**
- UX & Voice Interaction Design: Roli AI
- Confetti Animation: [External library selected for effect]

---

## 📬 Contact

For questions, suggestions, or collaborations – feel free to reach out via GitHub or email.

---

> "*When learning is fun – success is guaranteed!*" – Roli 😊