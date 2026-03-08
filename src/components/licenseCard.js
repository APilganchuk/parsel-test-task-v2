import { licenseCardTemplate } from '../templates/licenseCardTemplate.js';

export function renderLicenses(licenses, container) {
  if (!licenses.length) {
    container.innerHTML = '<p>No licenses found</p>';
    return;
  }

  const html = licenses.map(license => licenseCardTemplate(license)).join('');

  container.innerHTML = html;
}
