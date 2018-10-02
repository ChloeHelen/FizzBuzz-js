describe('fizzbuzz', function () {
    it('return "fizz" when passed a multiple of 3', function () {
        expect(fizzbuzz(3)).toEqual('Fizz');
    });
    it('return "buzz" when passed a multiple of 5', function () {
        expect(fizzbuzz(5)).toEqual('Buzz');
    });
    it('return "FizzBuzz" when passed a multiple of both 3 and 5', function () {
        expect(fizzbuzz(15)).toEqual('FizzBuzz');
    });
});
