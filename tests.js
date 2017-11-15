let _ = require('./index');

let validate = (zipcode, notes = '') => {
  console.log(zipcode, _.isUrban(zipcode), notes);
};

console.log('\nKnown Urban');
validate('02116', 'Boston');
validate('02139', 'Cambridge (Boston, MA--NH--RI Urbanized Area)');
validate('10001', 'New York');
validate('94061', 'San Francisco');
validate('98103', 'North Seattle (Wallingford)');
validate('60007', 'Chicago');
validate('73301', 'Austin');
validate('77001', 'Houston');

console.log('\nBoston Validation');
validate('02169', 'Quincy');
validate('02170', 'Quincy');
validate('02456', 'Newton');
validate('02495', 'Newton');
validate('02474', 'Arlington');
validate('02477', 'Arlington');
validate('01601', 'Worcester');

console.log('\nKnown Rural');
validate('89010', 'Not in a 2010 urban area');
validate('01253', 'Test');
validate('49010', 'PDF intersection of rural and urban');
