let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalizeName(name) {
  let words = name.split(' ');
  return words.map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function removeDots(name) {
  return name.replace(/\./g, '');
}

function processBands(data) {
  return data.map(band => {
    return {
      name: removeDots(capitalizeName(band.name)),
      country: 'Canada',
      active: band.active
    };
  });
}

console.log(processBands(bands));
console.log(bands);


// function processBands(data) {
//   let bands = data;
//   bands.map(band => {
//     updateCountry(band);
//     capitalizeBandName(band);
//     removeDotsInBandName(band);
//     return band;
//   });
// }


// function updateCountry(band) {
//   band.country = 'Canada';
// }

// function capitalizeBandName(band) {
//   band.name = capitalizeName(band.name);
// }

// function removeDotsInBandName(band) {
//   band.name = removeDots(band.name);
// }
// processBands(bands);
// console.log(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]