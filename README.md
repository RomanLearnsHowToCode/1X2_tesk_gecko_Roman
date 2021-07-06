# Task #

Given a set of symbol assets and dummy responses create your own very simple slot machine

Your simple slot machine should do the following:

# Main Task #
* Load & display all the symbols in the /assets folder - done
* Display the players balance & stake amount - done
* Display a button which simulates a 'spin' such that when clicked it does the following:
	* Deducts players stake from the current balance - done
	* Randomly selectes a dummy JSON response from the responses I have provided - done
	* From the response calculate if there was a win, if so add that to the players balance, play the 'win' animations for the correct winning symbols and display the win amount
	* The button must remain disabled until all this has been completed - done
---

# Bonus Task #
* Make the stake adjustable by the player this should change the amount deducted from the balance when pressing spin - done
* The stake controls should remain disabled for the duration of the spin and win animations  - done

# Roman's Extras#
* BET system is now progressive, if bet is higher than 1, then a new symbol will show up, each wheel is set to generate random number from 0 to 5, if bet is greater than 1 then it will generate int in range 0 - 6
* WIN TO CREDIT - functionality, then a player can send won amount to credit amount
* CASH OUT - functionality, where the amount from credit and win will be withdrawn from the machine, and game will stop

---

* I have setup a basic PIXI game setup for you which contains the SpinePlugin needed to handle the assets and a tweening engine that we use in the gecko framework
* I have also included a basic npm package to setup a locally hosted http-server
* Feel free to modify the environment to your preferances provided their are clear instructions for us to run/build the game  
  
---

* This test is intended to demonstrate
	* your creativity
	* ability to read documentation and implement unfamiliar libraries
	* coding style (we like OOD)   
	
---

* Good luck and have fun 

* The documentation for PIXI, handling spine assets and greesocks tween engine can be found here:
* [PixiJs](https://pixijs.io/examples/#/demos-basic) - Pixi documentation
* [pixi-spine](https://github.com/pixijs/spine/tree/pixi5-spine3.7) - Pixi spine respository
* [GreenSock](https://greensock.com/docs/) - Green socks tween engine documentation
