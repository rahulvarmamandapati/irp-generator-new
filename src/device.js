export const size = {
  minHeight: '700px',
  maxHeight: '675px',
  mobileS: '320px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
};

export const device = {
  minHeight: `(min-height: ${size.minHeight})`,
  maxHeight: `(max-height: ${size.maxHeight})`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  ipad: `(min-device-width : ${size.tablet}) and (max-device-width :  ${size.laptop}) and (orientation : portrait)`,
  breakUp320: `(min-width: ${size.mobileS})`,
  breakUp425: `(min-width: ${size.mobileL})`,
  breakUp768: `(min-width: ${size.tablet})`,
  breakUp1024: `(min-width: ${size.laptop})`,
  breakUp1440: `(min-width: ${size.laptopL})`,
};
