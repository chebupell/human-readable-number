module.exports = function toReadable(number) {
  if (number === 0) return 'zero';

  const units = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const result = [];

  const hundred = Math.floor(number / 100);
  if (hundred > 0) {
    result.push(`${units[hundred]} hundred`);
  }

  const remainder = number % 100;
  if (remainder >= 20) {
    const ten = Math.floor(remainder / 10);
    result.push(tens[ten]);

    const unit = remainder % 10;
    if (unit > 0) {
      result.push(units[unit]);
    }
  } else if (remainder >= 10) {
    result.push(teens[remainder - 10]);
  } else if (remainder > 0) {
    result.push(units[remainder]);
  }

  return result.join(' ');
};
