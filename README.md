# Personal Productivity Dashboard

A modern, responsive web application developed during **JavaScript Week** by **Group 3: Cofradía de Korotkevich**, designed to reinforce essential JavaScript concepts through hands-on application. This dashboard enables users to manage tasks, track completions, receive productivity tips, and switch themes — all built using **HTML**, **CSS**, and **JavaScript** without external libraries.

## 🎯 Project Purpose

This project was created to apply and deepen understanding of:

- Variables and functions
- Conditional logic and loops
- DOM manipulation and event handling
- Arrays and JavaScript data structures
- Input validation and user interaction

Each team member contributed unique functionality, focusing on specific JavaScript concepts.

---

## 🧩 Features by Team Member

### 🧠 Andrés Restrepo
- **Task Counter Button**  
  Increments a global task counter with each click, showing custom alerts at milestones (3 and 5 clicks). Demonstrates use of `if` statements and DOM updates.
  
- **Display Days of the Week**  
  Dynamically generates a list of the days using an array and a `for` loop. Injects each day into the DOM as a list item.

### 🛠️ Juan David González
- **Task Adder Button**  
  Validates input before adding tasks to the weekly list. Shows a warning if the field is empty and a confirmation if the task is added. Demonstrates use of `.trim()`, truthy/falsy validation, and CSS class manipulation.

### 💡 Roxana Naranjo
- **Random Productivity Tip Generator**  
  Displays a random productivity tip from a predefined array using `Math.random()` and `Math.floor()`. Updates content within a paragraph dynamically.

### 👋 Cristian Henao P
- **Conditional Greeting Button**  
  Shows a contextual greeting based on the time of day. Uses `Date`, `if/else`, and DOM manipulation to display personalized messages (e.g., “Good morning”).

### 🎨 Juan Pablo Vargas
- **Background Color Changer**  
  Changes the background color randomly on click. Uses an array of color values and updates the page style dynamically.

---

## 🖥️ Full Dashboard Features

- ✅ Weekly task management (add, view, delete tasks)
- 🧮 Task completion counter with milestone feedback
- 💡 Productivity tips shown randomly
- 🌙 Light/dark mode toggle
- 👋 Smart greeting based on time of day
- 🎬 Animated preloader with project title
- 📱 Fully responsive design for mobile and desktop
- ⚡ Persistent task storage using `localStorage`

---

## 🧪 Technologies Used

- **HTML5** — Semantic structure and responsive layout  
- **CSS3** — Custom styles, transitions, animations, and media queries  
- **JavaScript** — Core logic, DOM interactions, and local storage

---

## ✅ Technical Requirements Met

- Variables and constants  
- Conditionals (`if/else`)  
- Reusable functions  
- Repetitive structures (`for`, `forEach`)  
- Arrays and array methods  
- Truthy/falsy validations  
- DOM manipulation (`getElementById`, `addEventListener`, etc.)  
- Project collaboration via GitHub branches

---

## 🗂 Project Structure

```plaintext
.
├── index.html           # Main structure and layout
├── style.css            # Styling, animations, responsiveness
├── script.js            # Functional logic and interactivity
├── assets/
│   └── favicon.png      # App icon

---

## 🌐 Live Preview & Repository
GitHub Repository:
👉 Dashboard de Productividad Personal


---


## 📌 Future Improvements
Add weekly task resets on Monday.

Sync with external calendars (Google Calendar integration).

Add progress charts for daily/weekly stats.

Export task history to .csv or .json.



