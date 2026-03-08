import { licenseCardTemplate } from '../templates/licenseCardTemplate.js';
import { fallbackTemplate } from '../helpers/fallbackTemplate.js';

export function renderLicenses(licenses, container) {
  if (!licenses.length) {
    container.innerHTML = fallbackTemplate();
    return;
  }

  const html = licenses.map(license => licenseCardTemplate(license)).join('');

  container.innerHTML = html;
}
