// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

/* 
verse 1
Well, I've been wondering 'bout who I am
And just how far I'd drive to see the end
I started from, when I believe I've won
And as the sweat rolls down my face
I put my heart into this place of mine
Go back in time, to see what I'm living in

chorus 1
My will, my way
My fear fades away
With wings I fly high
Watch me fly

verse 2
It's just my wild heart moving in
It's just my will to live the win you know
I need it so, life's when the race begins
And all the years I've wondered why
I've stared at speed with open eyes you see
It lives in me, now, that's what sets me free

chorus 1
My will, my way
My fear fades away
With wings I fly high
Watch me fly

chorus 2
I keep this fire
Burning inside me
The thrill of desire
Coming over, over me

verse 3
Now I believe whether near or far
The road is windy there where you are
Try to take the curve
Next turn, another learned
And so I finally see my way
Straight and true pass yesterday, my friend
I've waited for
The thrill, the chase forever more
Watch me fly
*/

function verse1() {
    let output = '';
    // your code here
    output += '<p>';
    output += 'Well, I\'ve been wondering \'bout who I am<br>';
    output += 'And just how far I\'d drive to see the end<br>';
    output += 'I started from, when I believe I\'ve won<br>';
    output += 'And as the sweat rolls down my face<br>';
    output += 'I put my heart into this place of mine<br>';
    output += 'Go back in time, to see what I\'m living in<br><br>';
    output += '</p>';

    return output;
}

function verse2() {
    let output = '';
    // your code here
    output += '<p>';
    output += 'It\'s just my wild heart moving in<br>';
    output += 'It\'s just my will to live the win you know<br>';
    output += 'I need it so, life\'s when the race begins<br>';
    output += 'And all the years I\'ve wondered why<br>';
    output += 'I\'ve stared at speed with open eyes you see<br>';
    output += 'It lives in me, now, that\'s what sets me free<br><br>';
    output += '</p>';

    return output;
}

function verse3() {
    let output = '';
    // your code here
    output += '<p>';
    output += 'Now I believe whether near or far<br>';
    output += 'The road is windy there where you are<br>';
    output += 'Try to take the curve<br>';
    output += 'Next turn, another learned<br>';
    output += 'And so I finally see my way<br>';
    output += 'Straight and true pass yesterday, my friend<br>';
    output += 'I\'ve waited for<br>';
    output += 'The thrill, the chase forever more<br>';
    output += 'Watch me fly<br><br>';
    output += '</p>';

    return output;
}

function chorus1() {
    let output = '';
    // your code here
    output += '<p>';
    output += 'My will, my way<br>';
    output += 'My fear fades away<br>';
    output += 'With wings I fly high<br>';
    output += 'Watch me fly<br><br>';
    output += '</p>';

    return output;
}

function chorus2() {
    let output = '';
    // your code here
    output += '<p>';
    output += 'I keep this fire<br>';
    output += 'Burning inside me<br>';
    output += 'The thrill of desire<br>';
    output += 'Coming over, over me<br><br>';
    output += '</p>';

    return output;
}



function main() {
    let finalOutput = '' // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags
    // v1 c1 v2 c1 c2 v3
    finalOutput += verse1();
    finalOutput += chorus1();
    finalOutput += verse2();
    finalOutput += chorus1();
    finalOutput += chorus2();
    finalOutput += verse3();

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function () {
    main();
}