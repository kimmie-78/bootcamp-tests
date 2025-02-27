describe('CountAllFromTown Function Test', function() {
    it('should count the registration numbers from the specified town', function() {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
        
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 1)


    });
    it('should return 0 if no registration numbers match the specified town', function() {
        const registrationNumbers = "CY 567,CJ 456,CA 789";
        const town = "CL";
        const result = countAllFromTown(registrationNumbers, town);
        assert.equal(result, 0);
    });

})