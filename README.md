# Sachini Morawinnage — Data Analyst & BI Portfolio

A responsive static portfolio built with HTML, CSS and vanilla JavaScript. It uses local image paths only; it does not use stock or AI-generated images. Missing images show labelled placeholders until you add your own files.

## Run locally

1. Download and unzip the project folder.
2. Open `index.html` in a browser.
3. For the most reliable preview and CV-file detection, run a small local server from this folder:

   **Python:**
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000`.

   **VS Code:** install/use the Live Server extension and choose **Open with Live Server**.

No build step or package installation is required.

## Add your real images

Place image files in `assets/images/` using the filenames below. Keep the names exactly as written, or change the matching `src` path in `index.html`. The page layout and JavaScript do not need to change when you replace an image with another image using the same filename.

| Image | Intended use |
|---|---|
| `profile.jpg` | Your real profile photo |
| `noodles-dashboard.png` | Noodles executive dashboard screenshot |
| `noodles-timeseries.png` | Noodles time series analysis screenshot |
| `noodles-platform.png` | Noodles platform analysis screenshot |
| `noodles-currency.png` | Noodles currency deep-dive screenshot |
| `noodles-data-model.png` | Actual warehouse/schema diagram |
| `heart-disease-analysis.png` | Heart disease analysis overview |
| `heart-eda.png` | Exploratory analysis chart |
| `heart-model-results.png` | Actual model evaluation results |
| `todo-app.png` | ToDo application screenshot |

Use screenshots you own or are permitted to share. Avoid showing credentials, personal records, private datasets, or confidential internship information. Dashboard images use `object-fit: contain` so the whole report screenshot remains visible.

## Add your CV PDF

1. Export your final verified CV as a PDF.
2. Name it `Sachini-Morawinnage-CV.pdf`.
3. Put it in `assets/` (not `assets/images/`).
4. The hero's **Download my CV** button points to that exact path. If the PDF is missing, the button displays a helpful message instead of pretending to download a file.

## Update links

Open `script.js` and edit the `portfolioConfig` object near the top:

```js
const portfolioConfig = {
  noodlesRepo: "https://github.com/YOUR-USERNAME/YOUR-REPOSITORY",
  heartRepo: "https://github.com/YOUR-USERNAME/YOUR-REPOSITORY",
  todoRepo: "https://github.com/SachiniM96/ToDoApp"
};
```

The Noodles and Heart Disease links currently point to the GitHub profile as safe placeholders, not to invented repositories. Replace them with the exact repository URLs when ready. The ToDo link uses the known repository URL. The LinkedIn and email links are in `index.html`; update those there if your public profile details change.

## Before publishing

- Verify every role title, employer, date and responsibility against your final CV.
- Remove the Interflex entry if you prefer not to show it publicly.
- Replace the earlier-work placeholder with a verified entry or remove it.
- Add your own screenshots and CV.
- Replace the Noodles and Heart Disease placeholder repository links with the actual repositories.
- Check that you are allowed to publish any internship screenshots or data.
- Test the mobile menu, project links, email link and CV button.

## Publish using GitHub Pages

1. Create a GitHub repository, for example `sachini-portfolio`.
2. Upload the contents of this folder (make sure `index.html` is at the repository root).
3. In the repository, open **Settings → Pages**.
4. Under build/deployment, select **Deploy from a branch**.
5. Select your main branch and the `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish and open the URL shown on the Pages settings screen.

You can also host the folder on any static hosting service. Because this site is static, the contact button opens an email draft rather than submitting to a backend; there is intentionally no fake contact form.

## Notes about project claims

The Noodles project is marked **in progress**. Its current description focuses on Python-based data exploration/preparation, engagement analysis and documentation. Add warehouse, DAX and dashboard accomplishments only after they are completed and verified. For Heart Disease Analysis, add only actual charts, findings and model metrics from your project documentation.
