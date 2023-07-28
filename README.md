A README.mdfile with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems

Welcome to my memory game project. 

I used flex box and ternary operator to write some of my if statement to make it more efficiency.

At first I was going to make all my cards buttons but I didn't want to have too many event listeners in my code

Then I wanted to create the flip function of the card

The goal of the game is to guess the cards and whoever guess the cards the quickest than that person is the winner

    I used target: clickedCard property inside the function to have the user select the cards and flip them

    Then I set a function for the matching cards and than another function to shuffle the cards

Issues I ran into

    One issue I ran into was trying to select the card in the flipcard function. I tried to add an event listener but I realize that I could set the target as a parameter instead

    Another issue I ran into was shuffling the cards. I had the pictures name differently but ended renaming the pictures by numbers in order to push the cards into an array

Methods and terminology discovered
    I discovered through research that I learned about
        -Ternary Operators instead of if statements which is faster and more versitial
        -Calc function was used to calculate the exact width and hieght of my cards and cards container
        -I could grab image tags with classes and store my pictures from the array I created.
        -I learned about the setTimeOut and setInterval and clearTimeOut useful need

What is working
    The timer is work in the code
    I am able to flip and shuttle the deck
    I can select the card two at a time
    the cards flip over to the front if the cards do not match

What is not working
    I am unable to get the timed finished store into a variable and make a function to determine a winner
    Could not get the names to display properly

What to do in the future
    Get the two player version working
    Get the score stored in a variable so player one and player 2 score could be compared.
    Create sound effects and more text on the page