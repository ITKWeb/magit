'use strict';

describe('Services: ParseSrv', function () {

  beforeEach(module('magitApp'));

  beforeEach(inject(function () {
    
  }));

  it('should parse a simple line', inject( function (ParseSrv, DataMockedSrv) {
    var stringToParse = '* 10b07bf - Initial commit (il y a 2 heures)<Romain Maneschi>';
    var res = ParseSrv.parse(stringToParse);
    expect(res.comment).toBe(DataMockedSrv.getSimpleDataMocked().comment);
    expect(res.hash).toBe(DataMockedSrv.getSimpleDataMocked().hash);
    expect(res.user).toBe(DataMockedSrv.getSimpleDataMocked().user);
    expect(res.time).toBe(DataMockedSrv.getSimpleDataMocked().time);
  }));

  it('should parse a branch', inject( function (ParseSrv, DataMockedSrv) {
    var stringToParse = '* 46127ee - (HEAD, origin/master, origin/HEAD, master) clean generated files + put first DOM architecture of project (il y a 23 minutes)<Romain Maneschi>';
    var res = ParseSrv.parse(stringToParse);
    expect(res.branchs[0]).toBe(DataMockedSrv.getSimpleDataMocked().children[0].children[0].children[0].branchs[0]);
  }));

  it('should parse a complete branch', inject( function (ParseSrv, DataMockedSrv) {
    var stringToParse = ['* 46127ee - (HEAD, origin/master, origin/HEAD, master) clean generated files + put first DOM architecture of project (il y a 23 minutes)<Romain Maneschi>',
      '* 5922bab - bootstrap project with yeoman :\'( (il y a 37 minutes)<Romain Maneschi>',
      '* a7cf633 - explain how to run project (il y a 37 minutes)<Romain Maneschi>',
      '* 10b07bf - Initial commit (il y a 2 heures)<Romain Maneschi>'
    ].join('\n');
    var res = ParseSrv.parse(stringToParse);
    expect(res.children[0].children[0].children[0].branchs[0]).toBe(DataMockedSrv.getSimpleDataMocked().children[0].children[0].children[0].branchs[0]);
  }));

  it('should parse multiple branchs', inject( function (ParseSrv, DataMockedSrv) {

  });

});
