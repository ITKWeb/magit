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

});
