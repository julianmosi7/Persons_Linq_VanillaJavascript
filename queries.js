$(document).ready(_ => {
  Show(AverageSallaryOfCompanyIn('Indonesia'), 'AverageSallaryOfCompanyIn("Indonesia")');
  Show(NrPersonsInStreetNr(66), 'NrPersonsInStreetNr(66)');
  Show(PersonsLivingInSameCountryAsCompany(), 'PersonsLivingInSameCountryAsCompany()');
  Show(DistinctFirstNamesFromJapan(), 'DistinctFirstNamesFromJapan()');
  Show(BornOnFirstApril(), 'BornOnFirstApril()');
  Show(MostPopularFirstname(), 'MostPopularFirstname()');
});

function Show(list, heading) {
  console.log(`%c${heading}`, 'background-color: blue; color: white');
  if (typeof list === 'object') list.forEach(item => console.log(`   ${JSON.stringify(item)}`));
  else console.log(`   ${list}`);
}

function AverageSallaryOfCompanyIn(country) {
  return -1;
}

function NrPersonsInStreetNr(streetNr) {
  return -1;
}

function PersonsLivingInSameCountryAsCompany() {
  return [];
}

function DistinctFirstNamesFromJapan() {
  return [];
}

function BornOnFirstApril() {
  return [{}];
}

function MostPopularFirstname() {
  return '';
}