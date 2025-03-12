# Calc

# Pseudocode Here

## CPU Logic
- Create function getComputerChoice
- Use Math.random to get number between 0 and 1
- If Math.random <= .33, go with option 1
- Else if Math.random <= .66, go with option 2
- Else go with option 3

## Player Logic
- Create function getHumanChoice
- Prompt user for choice
- Return their choice back

## Round Logic
- If human has rock and cpu has scissors, add 1 point to human and print win message
- Continue with the other 2 conditions
- However, if human and cpu have the same, print a message saying no one wins
- Else statement to catch all conditions where cpu wins, which adds 1 point to cpu and prints lose message

## Game Logic
- While loop iterates rounds until number of rounds is finished
- Winner is determined by their final score count
- 