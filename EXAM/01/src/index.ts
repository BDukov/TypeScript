function  printNumbersAndSum(start: number, end: number): void {
    let sum: number = 0;
    let numbers: string = "";

    for(let i = start; i <= end; i++) {
        sum += i;
        numbers += i + " ";
    }
    console.log(numbers.trim());
    console.log(`Sum: ${sum}`);
} 

printNumbersAndSum(0, 26);