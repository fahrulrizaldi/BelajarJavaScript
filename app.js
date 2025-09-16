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

for (i = 2 ; i <= 16 ; i*= 2){
    console.log (i);
}