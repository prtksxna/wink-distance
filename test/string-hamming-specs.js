//     wink-distance
//     Distance functions for Bag of Words, Strings,
//     Vectors and more.
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of “wink-distance”.
//
//     “wink-distance” is free software: you can redistribute
//     it and/or modify it under the terms of the GNU Affero
//     General Public License as published by the Free
//     Software Foundation, version 3 of the License.
//
//     “wink-distance” is distributed in the hope that it will
//     be useful, but WITHOUT ANY WARRANTY; without even
//     the implied warranty of MERCHANTABILITY or FITNESS
//     FOR A PARTICULAR PURPOSE.  See the GNU Affero General
//     Public License for more details.
//
//     You should have received a copy of the GNU Affero
//     General Public License along with “wink-distance”.
//     If not, see <http://www.gnu.org/licenses/>.

//
var chai = require( 'chai' );
var mocha = require( 'mocha' );
var hamming = require( '../src/wink-distance.js' ).string.hamming;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'string-hamming normal behaviour', function () {
  var tests = [
    { whenInputIs: { str1: 'john', str2: 'john' }, expectedOutputIs: 0 },
    { whenInputIs: { str1: 'sam', str2: 'sat' }, expectedOutputIs: 1 },
    { whenInputIs: { str1: 'summer', str2: 'samuel' }, expectedOutputIs: 3 }
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( hamming( test.whenInputIs.str1, test.whenInputIs.str2 ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );

describe( 'string-hamming error behaviour', function () {
  var tests = [
    { whenInputIs: { str1: 'john', str2: 'johny' }, expectedOutputIs: 'throw error' },
    { whenInputIs: { str1: 'saturn', str2: 'urn' }, expectedOutputIs: 'throw error' }
  ];

  tests.forEach( function ( test ) {
    it( 'should ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( hamming.bind( null, test.whenInputIs.str1, test.whenInputIs.str2 ) ).to.throw( 'wink-distance: hamming requires identical length input strings.' );
    } );
  } );
} );
