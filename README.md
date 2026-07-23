# Aviral Goel — AI Portfolio

An interactive, AI-chat-driven portfolio. Instead of scrolling, visitors ask questions and an AI avatar answers using my real background, skills, experience, and projects.

Built on the [toukoum/portfolio](https://github.com/toukoum/portfolio) template, customized with my own content and switched to run on [Groq](https://groq.com) (GPT-OSS 120B) instead of OpenAI.

## How to run

### Prerequisites
- **Node.js** (v18 or higher)
- **pnpm** package manager
- **Groq API key** (for AI chat functionality) — get one free at [console.groq.com/keys](https://console.groq.com/keys)
- **GitHub token** (optional, for the GitHub star-count integration)

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/goelavi04/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   GITHUB_TOKEN=your_github_token_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`
