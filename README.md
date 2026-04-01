# 🌐 Personal Portfolio

Welcome to my personal portfolio website!  
This project showcases my skills, projects, and experience as a developer — built with a modern, responsive, and creative design.

🔗 **Live Site:** https://

---

## 🚀 Tech Stack

- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- 📧 EmailJS (Contact Form)
- 🌍 Vercel (Deployment)

---

## ✨ Features

- Modern, dark-themed creative design
- Fully responsive — mobile, tablet & desktop
- Smooth scroll navigation with hamburger menu on mobile
- Hero section with animated tagline
- About section with stats
- Project showcase with tech tags
- Skills board organized by category
- Working contact form powered by EmailJS
- Environment variables for secure API key management
- Fast performance with Vite build

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── icon.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js   ← edit this to personalise
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                        ← not committed (see below)
├── .gitignore
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/upendrakda/Portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

> Get these values from your [EmailJS dashboard](https://emailjs.com).  
> The `.env` file is listed in `.gitignore` and will never be pushed to GitHub.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎨 Personalising the Portfolio

All content — name, bio, projects, skills, and contact info — lives in one file:

```
src/data/portfolioData.js
```

Edit that file only. Every component reads from it automatically. No need to touch individual components.

---

## 📦 Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

---

## 🚀 Deployment (Vercel)

This project is deployed using **Vercel** with a custom domain.

### Steps:
1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add your environment variables in Vercel:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Deploy — Vercel auto-builds on every push to `main`
5. Add your custom domain in **Settings → Domains**

> ⚠️ Never put API keys directly in your code. Always use `.env` locally and the hosting platform's environment variable settings in production.

---

## 📧 Contact Form Setup

The contact form uses [EmailJS](https://emailjs.com) — no backend required.

1. Create a free EmailJS account
2. Connect your Gmail under **Email Services**
3. Create a template under **Email Templates** using these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — message subject
   - `{{message}}` — message body
4. Set **Reply To** as `{{from_email}}` so replies go directly to the sender
5. Paste your Service ID, Template ID, and Public Key into `.env`

---

## 🤝 Contributing

Feel free to fork this repo and improve it. Contributions are welcome!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Upendra Khadka**
- GitHub: [github.com/upendrakda](https://github.com/upendrakda)
- Portfolio: [khadkaupendra.com.np](https://khadkaupendra.com.np)

---

⭐ If you like this project, give it a star!