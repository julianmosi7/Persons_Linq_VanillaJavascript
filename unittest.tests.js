/* eslint-disable no-undef */
/* eslint-disable camelcase */
testSuite.T01_AverageSallaryOfCompanyIn = function () {
  return testSuite.test(_ => {
    const results = [];
    results.push(`Indonesia: ${AverageSallaryOfCompanyIn('Indonesia').assertEquals(3650.3)}`);
    results.push(`China: ${AverageSallaryOfCompanyIn('China').assertEquals(3414.519)}`);
    results.push(`Russia: ${AverageSallaryOfCompanyIn('Russia').assertEquals(3754.652)}`);
    return results;
  });
};

testSuite.T02_NrPersonsInStreetNr = function () {
  return testSuite.test(_ => {
    const results = [];
    results.push(`Nr 13: ${NrPersonsInStreetNr(13).assertEquals(0)}`);
    results.push(`Nr  1: ${NrPersonsInStreetNr(1).assertEquals(7)}`);
    results.push(`Nr 66: ${NrPersonsInStreetNr(66).assertEquals(2)}`);
    results.push(`Nr 99: ${NrPersonsInStreetNr(99).assertEquals(1)}`);
    return results;
  });
};

testSuite.T03_PersonsLivingInSameCountryAsCompany = function () {
  return testSuite.test(_ => {
    const expected = ['Baker Ruby',
      'Boyd Andrea',
      'Crawford Beverly',
      'Daniels Alice',
      'Duncan Bonnie',
      'Garza Pamela',
      'Greene Howard',
      'Hudson Mark',
      'Owens Ernest',
      'Price Linda',
      'Price Raymond',
      'Reed Russell',
      'Reid Richard',
      'Rice Diana',
      'Russell Robert',
      'Thompson Keith'
    ];
    return PersonsLivingInSameCountryAsCompany().assertEquals(expected);
  });
};

testSuite.T04_DistinctFirstNamesFromJapan = function () {
  return testSuite.test(_ => {
    const expected = ['Albert', 'Betty', 'Jason', 'Phillip', 'Phyllis', 'Randy', 'Steve'];
    return DistinctFirstNamesFromJapan().assertEquals(expected);
  });
};

testSuite.T05_BornOnFirstApril = function () {
  return testSuite.test(_ => {
    const expected = [{
        Lastname: 'Welch',
        Firstname: 'Carolyn',
        Born: '01.04.1959'
      },
      {
        Lastname: 'Baker',
        Firstname: 'Bruce',
        Born: '01.04.1965'
      },
      {
        Lastname: 'Franklin',
        Firstname: 'Walter',
        Born: '01.04.1981'
      },
      {
        Lastname: 'Hansen',
        Firstname: 'Louis',
        Born: '01.04.1992'
      }
    ];
    return BornOnFirstApril().assertEquals(expected);
  });
};

testSuite.T06_MostPopularFirstname = function () {
  return testSuite.test(_ => MostPopularFirstname().assertEquals('Raymond'));
};