let sinon = require("sinon");
let main = require("../lib/main");

describe('main()', () => {
    it('should display the added student indormation',function(){
        sinon.spy(console, 'log');
        let input = "hujian,2015,han,1,数学:80,语文:80,英语:80,编程:80";
        main.stdin1(input);
        expect(console.log).toEqual(`
        { name: 'hujian',
          code: '2015',
          nation: 'han',
          klass: '1',
          scores:
           [ { course: '数学', score: 80 },
             { course: '语文', score: 80 },
             { course: '英语', score: 80 },
             { course: '编程', score: 80 } ],
          sumScore: 320 }`);
    });

});