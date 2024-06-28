export const parseExcel = (pastedText) => {
  const rows = pastedText
    .replace(/"((?:[^"]*(?:\r\n|\n\r|\n|\r))+[^"]+)"/mg, function (match, p1) {
      return p1
        .replace(/""/g, '"')
        .replace(/\r\n|\n\r|\n|\r/g, ' ');
    })
    .split(/\r\n|\n\r|\n|\r/g);

  const headers = rows[0].split('\t');
  const data = rows.slice(1).map((row) => {
    const cells = row.split('\t');
    return headers.reduce((obj, header, index) => {
      obj[header] = cells[index];
      return obj;
    }, {});
  });

  return data;
};
