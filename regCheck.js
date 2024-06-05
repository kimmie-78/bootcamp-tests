function regCheck(registrationNumber, locationCode) {
    return registrationNumber.endsWith(locationCode);
}


var isGP = regCheck('DV 23 NB GP', 'GP');


var isMP = regCheck('DV 23 LP GP', 'MP'); 


var isBellville = regCheck('CY 189-012', 'CY'); 


var isDurban = regCheck('CY 189-012', 'ND'); 

