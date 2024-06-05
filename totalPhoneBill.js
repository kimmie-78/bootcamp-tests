function totalPhoneBill(data) {
    const items = data.split(', ');
    let callCount = 0;
    let smsCount = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i] === 'call') {
            callCount++;
        } else if (items[i] === 'sms') {
            smsCount++;
        }
    }
    const callCost = callCount * 2.75;
    const smsCost = smsCount * 0.65;
    const totalCost = callCost + smsCost;

    return 'R' + totalCost.toFixed(2); 
}

