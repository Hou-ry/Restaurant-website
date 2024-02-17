// variable declaration
let menuBox = document.getElementById('second_conatiner');
// little cards
let platesLittleCard = document.getElementById('plateslilcard');
let saladLilCard = document.getElementById('saladlilcard');
let dessertLilCard = document.getElementById('dessertlilcard');
let drinksLilCard = document.getElementById('drinkslilcard');
// bigCards
let platesBigCard = document.getElementById('plates');
let saladBigCard = document.getElementById('salads');
let dessertBigCard = document.getElementById('dessert');
let drinksBigCard = document.getElementById('drinks');
// images
let plateImg = document.getElementById('plateslilImg');
let saladImg = document.getElementById('saladlilimg');
let dessertImg = document.getElementById('dessertlilimg');
let drinkImg = document.getElementById('drinkslilimg');


// show cards function 

// salads
saladLilCard.onclick = function () {
    if (saladBigCard.style.display === 'none') {
        saladBigCard.style.display = 'flex';
        saladLilCard.style.background = '#f3274c';
        saladLilCard.style.color = 'white';
      // Hide other big cards
        drinksBigCard.style.display = 'none';
        dessertBigCard.style.display = 'none';
        platesBigCard.style.display = 'none';
      // Reset styles for other little cards
      // Assuming you have variables saladLilCard, dessertLilCard, platesLilCard, etc.
        drinksLilCard.style.background = '#ffff';
        drinksLilCard.style.color = 'black';
        drinkImg.src='../images.jpg/orange-juice.png';
        // reset the image
        saladImg.src='../images.jpg/salad (3).png';

        dessertLilCard.style.background = '#ffff';
        dessertLilCard.style.color = 'black';
        dessertImg.src='../images.jpg/donut.png';
        
        platesLittleCard.style.background = '#ffff';
        platesLittleCard.style.color = 'black';
        plateImg.src='../images.jpg/food.png';
    }
};
// dessert
dessertLilCard.onclick = function () {
    if (dessertBigCard.style.display === 'none') {
        dessertBigCard.style.display = 'flex';
        dessertLilCard.style.background = '#f3274c';
        dessertLilCard.style.color = 'white';
      // Hide other big cards
        drinksBigCard.style.display = 'none';
        saladBigCard.style.display = 'none';
        platesBigCard.style.display = 'none';
      // Reset styles for other little cards
      // Assuming you have variables saladLilCard, dessertLilCard, platesLilCard, etc.
        drinksLilCard.style.background = '#ffff';
        drinksLilCard.style.color = 'black';
        drinkImg.src='../images.jpg/orange-juice.png';
        // reset the image 
        dessertImg.src='../images.jpg/donut (1).png';

        saladLilCard.style.background = '#ffff';
        saladLilCard.style.color = 'black';
        saladImg.src='../images.jpg/salad (1).png';
        
        platesLittleCard.style.background = '#ffff';
        platesLittleCard.style.color = 'black';
        plateImg.src='../images.jpg/food.png';
    }
};
// drinks
drinksLilCard.onclick = function () {
    if (drinksBigCard.style.display === 'none') {
        drinksBigCard.style.display = 'flex';
        drinksLilCard.style.background = '#f3274c';
        drinksLilCard.style.color = 'white';
      // Hide other big cards
        saladBigCard.style.display = 'none';
        dessertBigCard.style.display = 'none';
        platesBigCard.style.display = 'none';
      // Reset styles for other little cards
      // Assuming you have variables saladLilCard, dessertLilCard, platesLilCard, etc.
        // reset the image 
        drinkImg.src='../images.jpg/orange-juice (1).png'

        saladLilCard.style.background = '#ffff';
        saladLilCard.style.color = 'black';
        saladImg.src='../images.jpg/salad (1).png';

        dessertLilCard.style.background = '#ffff';
        dessertLilCard.style.color = 'black';
        dessertImg.src='../images.jpg/donut.png';

        platesLittleCard.style.background = '#ffff';
        platesLittleCard.style.color = 'black';
        plateImg.src='../images.jpg/food.png';
        }
};
// plates
platesLittleCard.onclick = function () {
    if ( platesBigCard.style.display === 'none' && plateImg.src !== '../images/food(1).png') {
        platesBigCard.style.display = 'flex';
        platesLittleCard.style.background = '#f3274c';
        platesLittleCard.style.color = 'white';
      // Hide other big cards
        drinksBigCard.style.display = 'none';
        dessertBigCard.style.display = 'none';
        saladBigCard.style.display = 'none';
      // Reset styles for other little cards
      // Assuming you have variables saladLilCard, dessertLilCard, platesLilCard, etc.
        drinksLilCard.style.background = '#ffff';
        drinksLilCard.style.color = 'black';
        drinkImg.src='../images.jpg/orange-juice.png';

        dessertLilCard.style.background = '#ffff';
        dessertLilCard.style.color = 'black';
        dessertImg.src='../images.jpg/donut.png';
        
        saladLilCard.style.background = '#ffff';
        saladBigCard.style.color = 'black';
        saladImg.src='../images.jpg/salad (1).png';
        // reset the image 
        plateImg.src='../images.jpg/food (1).png';

    } 
};



