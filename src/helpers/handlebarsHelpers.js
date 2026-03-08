import Handlebars from 'handlebars';

export function registerHelpers() {
  Handlebars.registerHelper('isDiscount', function (price_key, options) {
    if (price_key && price_key.includes('%')) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper('shortLicenseName', function (fullName) {
    if (!fullName) return '';
    // Match everything up to the last space before a digit or a slash
    const match = fullName.match(/^(.+?)\s(?=\d|\/)/);

    return match ? match[1].trim() : fullName;
  });
}
