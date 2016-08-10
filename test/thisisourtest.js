// // var assert = require('assert');
// var chai = require('chai');
// var spies = require('chai-spies');
// var expect = require('chai').expect
// var should = require('chai').should()
// var mocha = require('mocha');
// chai.use(spies);

// // var assert = require('chai').assert;

// describe('simple test', function() {
//     it('equal 4 as 2 and 2 do', function() {
//       expect(2+2).to.equal(4);
//     });

// });

// // expect(foo).to.deep.equal({ bar: 'baz' });
// // expect({ foo: { bar: { baz: 'quux' } } })
// //   .to.have.deep.property('foo.bar.baz', 'quux');

// describe('test of async and set timeout being 1 sec', function() {
//   describe('setTimeout()', function() {
//     it('should be around 1 sec', function(done) {
//       var start = new Date();
//       setTimeout(function() {
// 		var duration = new Date() - start;
//       	expect(duration).to.be.closeTo(999,50);
//       	done();
//       }, 1000);
//       // user.save(function(err) {
//       //   if (err) throw err;
//       //   done();
//       // });
//     });
//   });
// });

// describe('test of whether forEach runs once per array element', function (){
// 	describe ('forEach', function() {
// 		// it('should run 4 times for an array with 4 elements', function(array) {
// 		// 	var arrayWeAreTesting = [1, 2, 3, 4];
// 		// 	var divideByTwo = function(element){return element / 2};
// 		// 	var divideByTwoSpy = chai.spy(divideByTwo)
// 		// 	var resultOfDivideByTwo = arrayWeAreTesting.forEach(divideByTwoSpy);
// 		// 	console.log('heres our spy', divideByTwoSpy);
// 		// 	expect(divideByTwoSpy).to.have.been.called.exactly(4);
// 		// });


// 		//working example from workshop
// 		it('will invoke a function once per element', function () {
// 		  var arr = ['x','y','z'];
// 		  function logNth (val, idx) {
// 		    console.log('Logging elem #'+idx+':', val);
// 		  }
// 		  logNth = chai.spy(logNth);
// 		  arr.forEach(logNth);
// 		  expect(logNth).to.have.been.called.exactly(arr.length);
// 		});

// 	});
// });








