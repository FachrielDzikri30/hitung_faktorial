const faktorial = (num) => {
    let hasil = 1;
    for (let i =1; i<= num; i++) {
        hasil *= i;
    }
    return hasil;
}


const hasilKali = () => {
    const inputBil = parseInt(document.getElementById("bilInt").value);
    const hasil = document.getElementById("hasil");
    const hitungFaktorial = faktorial(inputBil);
    if (inputBil < 0) {
        hasil.textContent = "Bilangan harus bulat positif"; 
        console.log("Bilangan harus bulat positif");
    }
    else {
        hasil.textContent = `Hasil perkalian ${inputBil}! adalah ${hitungFaktorial}`;
        console.log(`Hasil perkalian ${inputBil}! adalah ${hitungFaktorial}`);
    }
}
