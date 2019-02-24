// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (W03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing our pointCal function with four sets of inputs', function (assert) {
    assert.strictEqual(recarea(2,2), 4, 'Area is 4');
    assert.strictEqual(recarea(2,3), 6, 'Area is 6');
    assert.strictEqual(recarea(3,1), 3, 'Area is 3 ');
    assert.strictEqual(recarea(2,1), 2, 'Area is 2');
    assert.strictEqual(recarea(1,1), 1, 'Area is 1');
    assert.strictEqual(recarea(20,0), 0, 'Area is 0');
});
