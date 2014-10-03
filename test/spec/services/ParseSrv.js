'use strict';

describe('Services: ParseSrv', function () {

  beforeEach(module('magitApp'));

  beforeEach(inject(function () {
    
  }));

  it('should parse a simple line', inject( function (ParseSrv, DataMockedSrv) {
    var stringToParse = '10b07bf##il y a 2 heures||Romain Maneschi|Initial commit';
    var res = ParseSrv.parse(stringToParse);
    expect(res.comment).toBe(DataMockedSrv.getSimpleDataMocked().comment);
    expect(res.hash).toBe(DataMockedSrv.getSimpleDataMocked().hash);
    expect(res.user).toBe(DataMockedSrv.getSimpleDataMocked().user);
    expect(res.time).toBe(DataMockedSrv.getSimpleDataMocked().time);
  }));

  it('should parse a branch', inject( function (ParseSrv, DataMockedSrv) {
    var stringToParse = '46127ee#5922bab#il y a 3 heures| (HEAD, origin/master, origin/HEAD, master)|Romain Maneschi|clean generated files + put first DOM architecture of project';
    var res = ParseSrv.parse(stringToParse);
    expect(res.branchs[0]).toBe(DataMockedSrv.getSimpleDataMocked().children[0].children[0].children[0].branchs[0]);
  }));

  it('should parse a complete branch', inject( function (ParseSrv, DataMockedSrv) {
    var stringToParse = [
      '46127ee#5922bab#il y a 3 heures| (HEAD, origin/master, origin/HEAD, master)|Romain Maneschi|clean generated files + put first DOM architecture of project',
      '5922bab#a7cf633#il y a 3 heures||Romain Maneschi|bootstrap project with yeoman :\'(',
      'a7cf633#10b07bf#il y a 3 heures||Romain Maneschi|explain how to run project',
      '10b07bf##il y a 4 heures||Romain Maneschi|Initial commit'
    ].join('\n');
    var res = ParseSrv.parse(stringToParse);
    expect(res.children[0].children[0].children[0].branchs[0]).toBe(DataMockedSrv.getSimpleDataMocked().children[0].children[0].children[0].branchs[0]);
  }));

  it('should parse a complexe tree', inject( function (ParseSrv, DataMockedSrv) {
    var stringToParse = [
      '731cd4a#bc55f20#il y a 31 minutes| (HEAD, master)|Romain Maneschi|change git commande and parse implementation in 10 minutes thanks to tdd :D',
      'bc55f20#d99ed02#il y a 31 minutes||Romain Maneschi|fake commit to simulate multiple branch dijonction',
      'd99ed02#d642469 daaf2d7#il y a 53 minutes| (origin/master, origin/HEAD)|MarineMiquet|Merge branch \'treeGit_directive\'',
      'daaf2d7#e6ddc5d#il y a 54 minutes||MarineMiquet|dataTree vertical OK avec donnees mockees',
      'e6ddc5d#81f4ded#il y a 74 minutes||MarineMiquet|fake arbre et style',
      '81f4ded#4f8f953#il y a 74 minutes||MarineMiquet|fichiers de conf OK et bon nom de directive',
      '4f8f953#4162e5f#il y a 75 minutes||MarineMiquet|coucoutest',
      '4162e5f#d642469#il y a 75 minutes||MarineMiquet|directive cree',
      '872a020#d642469#il y a 83 minutes| (complexeTree)|Romain Maneschi|fake commit for multiple branchs',
      'd642469#1218574#il y a 89 minutes||Romain Maneschi|parse simple branch'
    ].join('\n');
    var res = ParseSrv.parse(stringToParse);
    expect(res.comment).toBe('parse simple branch');
    expect(res.children.length).toBe(3);
    expect(res.children[0].hash).toBe('872a020');
    expect(res.children[1].hash).toBe('4162e5f');
    expect(res.children[2].hash).toBe('d99ed02');
  }));

});
