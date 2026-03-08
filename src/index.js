import { fetchLicenses } from './api/licenses.js';
import { renderLicenses } from './components/licenseCard.js';
import { registerHelpers } from './helpers/handlebarsHelpers.js';
import { detectBrowser } from './helpers/detectBrowser.js';
import { initDownloadArrow } from './components/downloadArrow.js';

document.body.classList.add(detectBrowser());

registerHelpers();
initDownloadArrow();

async function loadAndRenderLicenses() {
  const container = document.querySelector('#licenses-container');

  const licenses = await fetchLicenses();

  renderLicenses(licenses, container);
}

loadAndRenderLicenses();
