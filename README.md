# Sweet Confections Showcase

A modern web application for showcasing confectionery products, built with Vite, React, TypeScript, and shadcn/ui.

## 🚀 Tech Stack

- **Vite** - Next Generation Frontend Tooling
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable components
- **React Router DOM** - Routing
- **React Query** - Data fetching and state management
- **Supabase** - Backend as a Service
- **EmailJS** - Email functionality

## 📁 Project Structure

```
sweet-confections-showcase/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Custom components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities, configs
│   ├── pages/           # Page components
│   ├── types/           # TypeScript types
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── .env.example          # Environment variables example
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind config
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
└── README.md            # Documentation
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sweet-confections-showcase.git
   cd sweet-confections-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables:
   - Supabase URL and Anon Key
   - EmailJS credentials

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Adding Components

Add shadcn/ui components:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
# Add any other components you need
```

## 🌐 Environment Variables

Create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

## 📱 Features

- ⚡ **Fast development** with Vite HMR
- 🎨 **Beautiful UI** with shadcn/ui and Tailwind
- 📱 **Fully responsive** design
- 🔒 **Type safety** with TypeScript
- 🔐 **Authentication ready** with Supabase
- 📧 **Contact form** with EmailJS
- 🗄️ **Database integration** with Supabase

## 📝 License

This project is licensed under the MIT License.

## 👏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)