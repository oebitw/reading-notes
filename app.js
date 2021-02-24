// let score =0;
// alert('welcome to js test website');
// let playGame= prompt('Do You want to play a game?').toLowerCase;
// while(playGame=='yes' && playGame=='y'){
//     prompt(playGame);
// }
// let userName=prompt('what is your name?')
// while(userName.toLowerCase !=='omar'){
//     userName=prompt('what is your name?');
// }

// let educationCertificate = prompt('My Education Certificate is Bachelor Degree?' , 'yes or no');
// while (educationCertificate.toLowerCase() !== 'yes' && educationCertificate.toLowerCase() !== 'y' && educationCertificate.toLowerCase() !== 'no' && educationCertificate.toLowerCase() !== 'n') {
//     educationCertificate= prompt('My Education Certificate is Bachelor Degree?', 'yes or no');
//   }

// let userName= prompt('What is your name?');
// while(userName !== 'omar'){
//     userName=prompt('what is your name?');
// }

let hotelName = 'royal';

let swimmingPool = 3;

let totalRooms= 200;

//filled by the receptionist
let occupiedRooms= Number(prompt('How many occupied rooms?'));

let totalParkings=100 ;
if (occupiedRooms>=totalRooms){
    alert('Sorry no available rooms');
}else if (occupiedRooms<totalRooms ) {
    alert ('There are' + freeRooms + ' available Rooms');
}
