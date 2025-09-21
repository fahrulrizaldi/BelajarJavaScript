// // first commit hello world!
// console.log('hello world!');

// //second commit if statement

// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//     console.log("angka lebih besar dari 0.5");
// }

// if (angka <= 0.5) {
//     console.log("angka lebih kecil dari 0.5");
//}

// third commit

// const iniHari = 'senin';

// if (iniHari === 'senin'){
//     console.log("Selamat Bekerja Kawan! ")
// }else if (iniHari === 'sabtu'){
//     console.log("Semoga Jangan Cepat Berlalu")
// }else if (iniHari === 'Rabu'){
//     console.log("Sudah Setengah Perjalanan kawan")
// }

// // fourth commit 
// const iniHari = prompt('isikan hari!').toLocaleLowerCase();

// if (iniHari === 'senin'){
//     console.log("Selamat Bekerja Kawan !!!")
// }else if (iniHari === 'sabtu'){
//     console.log("Selamat liburan kawan")
// }else {
//     console.log("Yah biasa aja")
// }

// kondisi if berlapis 
//const password = prompt("Masukan password !")

// if (password.length >= 6) {
    
//     if (password.indexOf(' ') === -1 ){
//         console.log('Password Valid');
//     }else{
//         console.log('Password tidak boleh ada spasi')
//     }
// }else {
//     console.log('Password Minimal 6 karakter');
// }

// Operator Logic And
// const password = prompt("Masukan password !")

// if (password.length >= 6 && password.indexOf(' ') === -1 ) {
//     console.log('password Valid');
// } else {
//     console.log('password tidak Valid');
// }

// Operator Logic OR
// const role = prompt("masukan role mode!")

// if (role === 'admin' || role === 'spv'){
//     console.log("Akses di terima")
// }else {
//     console.log("Akses di tolak")
// }

// Operator Logic NOT
// const role = prompt("masukan role mode!")

// if (role !== 'admin'){
//     console.log("Akses di tolak")
// }else {
//     console.log("Akses di terima")
// }


// If Alternatif Statement 
// const balonku = prompt ('Input Warna Balon');

// switch(balonku){
//     case 'merah':
//     console.log('Balon Saya');
//     break;
//     case 'kuning':
//     console.log('Balon Saya')
//     break;
//     case 'hijau':
//     console.log('Dooooooorr')
//     break;
//     default:
//         console.log('Bukan Balon Saya')
// }

// Array indexOf
// const cariAnimal = prompt ('masukan nama hewan !');

// const animal = ['kucing', 'ayam' , 'jerapah' , 'gajah' , 'harimau'];

// if (animal.indexOf(cariAnimal) === -1)
// {
//     console.log('Tidak ada nama hewan di kebun binatang ini');
// }else (
//     console.log(animal.indexOf(cariAnimal))
// )

// perulangan for

// for (i = 2 ; i <= 16 ; i*= 2){
//     console.log (i);
// }

//perulangan array
// const materialAc = ['pipa tembaga','ducttape','kabel','pipa pvc','bracket'];

// for (let i = 0 ; i < materialAc.length ; i++ )
// {
//     console.log(i+1, materialAc[i]);
// }

//nested loop
// const pilihan = 'abcd';

// for (let i=1 ; i <= 10 ; i++) 
// {
//     console.log(`${i}. soal nomor ${i} :`);

//     for (let j = 0 ; j < pilihan.length ; j++)
//     {
//         console.log(`${pilihan[j]} . pilihan jawaban` );    
//     }
// }

// Perulangan While

// const password ='Pass123';

// let guess = prompt('Enter The Password');
// while (guess !== password){
//     guess = prompt('Enter The Password!');
// }

// alert('congrats! the password is correct');

// kata kunci break

// let input = prompt('hei, say something!');

// while (true){
//     if (input.toLowerCase() === 'stop') break;
//     input = prompt(input);
// }

// alert('ok');

// for (i =1 ; i <= 1000 ; i++){
//     console.log(i);
//     if (i === 100) break;
// }

// let maximum = parseInt(prompt('masukan nilai maksimal!'));

// while (!maximum){
//     maximum = parseInt(prompt('masukan nilai Maksimal!'));
// }

// const targetNum = Math.floor(Math.random() * maximum) +1;
// console.log(targetNum);

// let guess = parseInt(prompt('isi tebakan pertama kamu!'));
// let attempts = 1 ;
// while (parseInt(guess) !== targetNum) {
//     attempts++;
//     if (guess > targetNum) {
//         guess = parseInt(prompt('Tebakan terlalu tinggi, tebak lagi!'));
//     }else {
//         guess = parseInt(prompt('tebakan terlalu rendah, tebak lagi!'));
//     }

// }

//     alert(`selamat tebakan kamu benar!, dengan percobaan ${attempts}`);

// syntax for of

// let noSepatu =[38,39,40,41,42];

// for(let sepatu of noSepatu ){
//     console.log(`ukuran sepatu ${sepatu}`);
// }

// for in
// const nilaiAkademik = {

// Fahrul : 10,
// Andri : 9,
// Robi : 9,
// Rais :7,
// Maul : 9,
// Deni : 5,
// }

// for (let nilai in nilaiAkademik){
//     console.log(`${nilai} memiliki nilai skor ${nilaiAkademik[nilai]}`);
// }

// let total = 0;
// let scores = Object.values(nilaiAkademik);

// for( let score of scores){
//     total += score;
// }
// console.log(total/scores.length);


//function

// function lemparDadu () {

//     console.log(Math.floor(Math.random()*6)+1 );

// }

// function salam(nama){

//     console.log(`hai, ${nama} semangat belajar`);
// }

// salam('fahrul');

//function 2 parameter

// function penjumlahan(a,b){
//     jumlah = a + b;
//     console.log(jumlah);
// }

// function jumlahkan(a, b)
// {
//     if( typeof a !== 'number' || typeof b !== 'number'){
//         return 'penjumlahan harus angka';
//     }

//     return a+b;
// }


// lexical scope

// function beliAC(){
//     const merkAC = 'Daikin';

//     function salesAC(){
//         let penawaran = `kamu bisa membeli AC dengan merk ${merkAC}`;
//         console.log(penawaran); 
//     }
// salesAC();
// }


//function expressions
// const hasilPerpangkatan = function perpangkatan(hasil){
//     return hasil*hasil ;
// }

//function sebagai argument function lain
// function duaKali(func)
// {
//     func();
//     func();
// }

// function lemparDadu(){
//     const dadu = Math.floor(Math.random() * 6) +1;
//     console.log(dadu);
// }

// return function 

// function balikanFunction(){
//     const rand = Math.random();

//     if( rand > 0.1) {
//         return function(){
//     console.log(rand);
//             console.log ('selamat angka anda lebih dari 0.10');
//         };

//     } else {
//             console.log(rand);
//         return function(){
//             console.log('maaf silahkan coba lagi');
//         };
//     }

// }


// belajar method
const myMath = { //object
    perkalian : function perkalian(a,b) // method
    {
        return a*b;
    },
    pembagian : function pembagian(a,b){
        return a/b;
    }
}