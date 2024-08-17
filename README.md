# GitHub and Vercel API Dashboard

I tend to need to hit the GitHub API quite often, so here's a quick overview of the data I'm trying to fetch or mutate. Built with all vanilla tools (Express, etc.).

Demo: [can be seen here](https://api.remcostoeten.com)

## Features

- 📊 Comprehensive view of your GitHub profile
- 📚 List of your GitHub repositories with details
- ⭐ Display of starred repositories
- 📝 Access to your public Gists
- 🚀 Vercel project and deployment information
- 🌐 Vercel domain management overview
- 🔍 Dynamic filtering system for easy navigation

## Setup and Installation

1. Clone the repository:

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your API tokens:

```bash
GITHUB_TOKEN=your_github_token_here
VERCEL_TOKEN=your_vercel_token_here

```

4. Start the server:

```bash
npm start
```

Or just do

```bash
node server.js
```

5. Open your browser and navigate to `http://localhost:3000` (or the port you've configured).

## Usage

The dashboard is divided into several tabs:

- **GitHub Profile**: Displays your basic GitHub information.
- **GitHub Repos**: Lists all your public repositories.
- **Starred Repos**: Shows repositories you've starred.
- **Gists**: Displays your public Gists.
- **Vercel User**: Shows your Vercel account information.
- **Vercel Projects**: Lists your Vercel projects and their latest deployments.
- **Vercel Domains**: Displays domains associated with your Vercel account.

Use the filter options to narrow down the displayed information based on specific tags or attributes.

---

<div align="center">

Made with ❤️ by [Remco Stoeten](https://github.com/remcostoeten)

</div>
