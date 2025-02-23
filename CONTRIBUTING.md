# Contributing to CheatSheets

Thank you for your interest in contributing to CheatSheets! We welcome contributions from everyone, whether it's fixing a typo, adding new content, or improving the structure of the project.

## How to Contribute

### 1. Fork the Repository
First, fork the repository to your own GitHub account:
- Navigate to the [CheatSheets repository](https://github.com/EIC95/CheatSheet.git)
- Click the **Fork** button in the top-right corner

### 2. Clone the Repository
Clone the forked repository to your local machine:
```sh
git clone https://github.com/your-username/CheatSheet.git
cd CheatSheet
```

### 3. Create a New Branch
Before making any changes, create a new branch:
```sh
git checkout -b my-feature-branch
```

### 4. Adding New Notes
To add a new technology or topic, follow these steps:

#### 4.1 Update Navigation
1. Open `Navbar.jsx` and add the new technology to the `technologies` array.
    - Include:
        - The technology name
        - The folder name inside `public/`
        - The path to the first page
        - The icon file name (stored in `assets/`)
        - A suitable color that works for both dark and light themes
```json
{ name: "MongoDB", directory: "mongodb", path: "mongodb/basics", icon: "mongodb.svg", color: "#00684A" }
```

2. Open `Content.jsx` and update the `technologies` array with:
    - The technology name
    - The folder name
    - The link to its official documentation
    - The name of the documentation website
```json
{ name: 'MongoDB', directory: 'mongodb', doc: 'https://www.mongodb.com/docs/', docSite: 'mongodb.com' }
```

3. Open `Home.jsx` and update the `technologies` array with:
    - The technology name
    - The path to the first markdown file
    - The icon file name (preferably in `.svg` format)
```json
{ name: 'MongoDB', path: 'mongodb/basics', icon: 'mongodb.svg' }
```

#### 4.2 Writing Notes in Markdown
- Notes should include:
    - Tables (optional), bullet points or numbered lists and code examples
    - Titles for topics using `# Title`
    - Subtitles for sections using `## Subtitle` (so they appear in the right sidebar navigation)

- Folder structure:
    - Each technology has a folder in `public/`
    - Each topic has a separate markdown file
    - File names should follow the technology name and topic

- `README.md` in each technology folder:
    - Starts with the technology name (`# Technology`)
    - Contains an ordered list of topics so they appear properly in the sidebar

#### 4.3 Adding a New Notes to the Sitemap

To improve SEO and ensure that search engines index new technologies properly, each newly added language must be included in the `sitemap.xml` file.

##### Steps to Update `sitemap.xml`

1. Open the `public/sitemap.xml` file.
2. Add a new `<url>` entry following this structure:

```xml
<url>
    <loc>https://cheatsheets/technology-name/first-subject</loc>
    <priority>0.8</priority>
</url>
```

### 5. Test Your Changes
Run the project locally to verify that everything works correctly:
```sh
npm install
npm run dev
```

### 6. Commit and Push Your Changes
Once satisfied with your changes, commit them:
```sh
git add .
git commit -m "Describe your changes here"
git push origin my-feature-branch
```

### 7. Open a Pull Request
Go to the original repository and click on **New Pull Request**. Select your branch and submit the PR for review.

## Guidelines
- Follow the existing project structure.
- Write clear and concise commit messages.
- Ensure Markdown files are properly formatted.
- Test your changes before submitting.

## Reporting Issues
If you find a bug or want to suggest an improvement, please open an issue in the [GitHub Issues](https://github.com/EIC95/CheatSheet/issues) section.

---
Thank you for contributing! 🎉