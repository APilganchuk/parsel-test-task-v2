import { fetchLicenses } from './api/licenses.js';
import { renderLicenses } from './components/licenseCard.js';
import { registerHelpers } from './helpers/handlebarsHelpers.js';

registerHelpers();

async function loadAndRenderLicenses() {
  const container = document.querySelector('#licenses-container');

  const licenses = await fetchLicenses();

  renderLicenses(licenses, container);
}

loadAndRenderLicenses();
