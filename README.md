# Linux Essentials Study Page

A self-study web app to help prepare for the **Linux Essentials certification**.  
It includes interactive **flashcards**, **quizzes**, and a searchable **reference guide** covering key topics such as:

- File Management  
- Process Management  
- File Permissions & Special Permissions  
- Networking  
- Package Management  
- User & Group Management  
- System Configuration  
- Shell Environment  

---

## Features

- **Flashcards**  
  - Flip between command and short definition.  
  - Browse by category (File Management, Networking, etc.).  
  - Navigate with Previous / Next / Random.  

- **Quizzes**  
  - Supports multiple-choice and free-text questions.  
  - Score tracking.  
  - Option to quiz by category.  
  - Shows definitions & switches after each question for learning.  

- **Reference Guide**  
  - Searchable, filterable study guide.  
  - Includes commands, definitions, switches, and categories.  
  - Highlighted search matches.  

---

## File Structure

study-page/
├── css/
│ └── style.css # Styles for all pages
├── js/
│ ├── commands.js # Command data (definitions, flashcards, quiz questions)
│ ├── flashcards.js # Flashcards logic
│ ├── quiz.js # Quiz logic
│ └── reference.js # Reference page logic
├── index.html # Landing page
├── flashcards.html # Flashcards page
├── quiz.html # Quiz page
└── reference.html # Reference guide page



---

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
