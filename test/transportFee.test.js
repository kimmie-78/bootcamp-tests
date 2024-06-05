describe('transportFee Function', function() {
    it('should return mocha.js', function() {
        assert.equal(transportFee('morning'), 'R20');

        assert.equal(transportFee('afternoon'), 'R10');
        
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })
});