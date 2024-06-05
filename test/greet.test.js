describe('Greeting Test', function() {
    it('It should be able to greet Siri', function() {
        const greetSiri = greet('Siri')
        assert.equal(greetSiri, 'Hello, Siri')
    })

    it('It should not be able to greet empty name', function() {
        const greetSiri = greet()
        assert.equal(greetSiri, 'Hello, undefined')
    })
})