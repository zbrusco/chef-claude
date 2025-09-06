# Chef Gemini

**Chef Gemini** is a React-based recipe generator that turns a list of ingredients into a recipe using AI.\
Enter your ingredients, click “Get Recipe,” and Chef Gemini will provide a recipe for you.

<p align="center">
  <img src="https://github.com/user-attachments/assets/945157cd-1402-45d1-82fa-cf4a8e874774" alt="Chef Gemini Demo"/>
</p>

---

## Features

- Add multiple ingredients dynamically
- Fetch AI-generated recipes using **Chef Gemini** (default) or **Mistral**
- Smooth scroll to the recipe section once generated
- Clean, simple UI inspired by Figma design
- Built entirely with **React** and plain CSS

---

## Tech Stack

- **Frontend:** React (functional components, hooks: useState, useEffect, useRef)
- **State & Effects:** Dynamic ingredient list, recipe fetch, and smooth scroll
- **Styling:** Plain CSS, Figma-inspired design
- **AI Integration:** Fetch recipes from Chef Gemini or Mistral APIs
- **Build/Dev Tools:** Node.js, npm, modern React tooling

---

## How It Works

1. Add ingredients to the list via the input form
2. Click "Get Recipe" to fetch an AI-generated recipe
3. The recipe appears and the page scrolls automatically to it

Chef Gemini demonstrates integrating React with AI APIs, dynamic state management, and user-friendly UI interactions.

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zbrusco/chef-gemini.git

# Navigate into the project
cd chef-gemini

# Install dependencies
npm install

# Start the app
npm run dev
```

<sub>Built during a Scrimba React course; code, styling, and features were implemented independently.</sub>
