                   FUNCTION

      
           1:  SAY YOUR NAME

var yourName = "Abubakar Abdullahi Shehu";

var funName = function() {
var textX = random(0, 300);
var textY = random(0, 300);
fill(255, 0, 0);
textSize(30);
text("Hiiii, " + yourName, textX, textY);


};
 funName();
 funName();
 funName();
 funName();


         
          2:   MOLES IN HOLES

var drawMole = function(moleX, moleY) {
    
    noStroke();
    fill(125, 93, 43);
    ellipse(moleX, moleY, 60, 60); // face
    fill(255, 237, 209);
    ellipse(moleX, moleY+10, 33, 28); 
    fill(0, 0, 0);
    ellipse(moleX-10, moleY-15, 10, 10); // eyes
    ellipse(moleX+10, moleY-15, 10, 10);
    ellipse(moleX, moleY-5, 10, 10); // nose
    ellipse(moleX, moleY+10, 20, 5); // mouth
};

background(52, 168, 83); // green grass
fill(0, 0, 0);
ellipse(200, 200, 100, 30); // holes!
ellipse(70, 119, 100, 30);
ellipse(300, 60, 100, 30);
ellipse(297, 350, 100, 30);

drawMole(200, 200);
drawMole(70, 119);
drawMole(300, 60);
drawMole(297,350);


  

           3:  CALCULATOR


var add = function(num1, num2) {
    return num1 + num2;
};
var subtract = function(num1, num2) {
    return num1 - num2;
};
var multiply = function(num1, num2) {
    return num2 * num1;
};
var divide = function(num1, num2) {
    return num1 / num2;
};

fill(255, 0, 0);
text("15 + 3 is " + add(15, 3), 10, 20);
text("15 - 3 is " + subtract(15, 3), 10, 50);
text("15 * 3 is " + multiply(15, 3), 10, 80);
text("15 / 3 is " + divide(15, 3), 10, 110);

text("8 + 4 is " + add(8, 4), 10, 170);
text("8 - 4 is " + subtract(8, 4), 10, 200);
text("8 * 4 is " + multiply(8, 4), 10, 230);
text("8 / 4 is " + divide(8, 4), 10, 260);


              4:  FISH TANK

background(89, 216, 255);

var drawFish = function(centerX, centerY, tailWidth, eyeSize){
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);
noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
//var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
 centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, eyeSize, eyeSize);
};

 drawFish(250, 180, 35, 10); 
 drawFish(100, 200, 20, 20);         
 drawFish(100, 270, 40, 25); 
 drawFish(150, 70, 20, 40); 
 drawFish(350, 33, 50, 12); 
 drawFish(78, 128, 30, 19); 
 drawFish(100, 350, 29.5, 19); 
 drawFish(350, 100, 23, 32);
 drawFish(350, 200, 46, 27); 
 drawFish(350, 260, 13, 18); 
 drawFish(350, 340, 17, 21); 
 drawFish(220, 10, 21, 14); 
 drawFish(220, 240, 28, 24); 
 drawFish(220, 310, 65, 11);
 drawFish(250, 380, 52, 22); 
 drawFish(210, 130, 14, 18);
 drawFish(80, 10, 17, 28);
 drawFish(30, 70, 41, 27); 
        
         

