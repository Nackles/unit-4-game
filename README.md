## unit-4-game
This is my Apex Legends-themed version of the Crystal collector. 

## Play It
https://nackles.github.io/unit-4-game/

## re(Possess It)
https://github.com/Nackles/unit-4-game

## Goals
To create a table of clickable characters that contribute randomized number values to reach a random target number value and not go over, a la backjack.

##Functionality [as of Thurs. morn)
IT WORKS!!! EVERYTHING SEEMS TO WORK AS I WANT IT TO AND NOTHING BREEEEEAKS!

##Specifically
I had a PlayerLosses rather than playerLosses that was throwing the text updater - which was also most of my problem. Besides the initial targetScore text update, I moved amy text updating into a function and just called it wherever it would change.

## Functionality [as of turn-in time]
The buttons can be pressed and their functions run. The character buttons have a randomized number value that persists until reset. The win and loss conditions can be triggered but seemingly at random amounts for under the target amount. The loss condition is current pushing 1s and setting an html value? It might have something to do with how I'm mistreating strings and variables this whole time. I feel like I just have a name wrong or overlapping variables and Ids is a bigger sin than I thought. I want to add a GameOver! Win!/Lose! html element that pops up when the game ends for a win or a loss.