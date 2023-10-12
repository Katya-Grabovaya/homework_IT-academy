function numberOfFridaythe13ths() {
    let start = new Date(2000, 0, 1);
    let end = new Date (Date.now ());
    let count = 0;
    
    while (start <= end) {
        if (start.getDate() === 13 && start.getDay() === 5) {
            count++;   
        }
        
        start.setDate(start.getDate() + 1);
    }
    
    return count;
}

console.log(numberOfFridaythe13ths());