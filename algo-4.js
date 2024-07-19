// Funksiya: Verilmiş arraydəki ədədlərin cəmini hesablayır
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Nəticəni göstərmək üçün funksiya
function displaySum() {
    // Sadə bir array
    const numbersArray = [1, 2, 3, 4, 5];
    
    // Nəticəni hesablamaq
    const sum = sumArray(numbersArray);
    
    // Nəticəni HTML-də göstərmək
    document.getElementById('result').innerText = `Sum: ${sum}`;
}