function valueToApi (value, api) {
  const valueNoSpaces = value.trim();
  if (api === 'shows') {
    return valueNoSpaces.replace(' ', '%20%');
  }

  if (api === 'music') {
    return valueNoSpaces.replace(' ', '+');
  }
  return '';
};

export default valueToApi;