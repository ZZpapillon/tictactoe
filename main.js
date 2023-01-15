const Players = (name, sign) => {
    
    return { name, sign};
};


function getComputerChoice() {
    const randomNumber = (Math.floor(Math.random() * 2));
    if (randomNumber === 0) {
        gameBoard.game.players.Player1.sign = '0';
        gameBoard.game.players.Player2.sign = 'X';
    } else if (randomNumber === 1) {
        gameBoard.game.players.Player1.sign = 'X';
        gameBoard.game.players.Player2.sign = '0';
    }
}




const gameBoard = (() =>  {
       
     let fields = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        function createField() {
        for(let i = 0; fields.length > i; i++) {
            const container = document.querySelector('.container')
             fields[i] = document.createElement('div');
            fields[i].classList.add('square'+i );
            container.appendChild(fields[i]);

            }

        }
    const game = {
        players: {
            Player1: Players('','') ,
            Player2: Players('','')
        },
        turn: '' ,

        value : 0,
        start: false,
        computerPlay: false,
        otherFunction: function () {
        
            for (let i = 0; fields.length > i; i++) {
                fields[i].addEventListener('click', function () {
                if (game.value === 0 && game.start === true && game.computerPlay === false) {
                    if (fields[i].textContent !== "") return;
                    console.log('Field ' + i + ' was clicked');
                    if (game.turn === game.players.Player1.name) {
                    fields[i].textContent = game.players.Player1.sign
                    game.turn = game.players.Player2.name
                    } else {
                        fields[i].textContent = game.players.Player2.sign
                        game.turn = game.players.Player1.name
                    }
                    game.endGame()
                }
                if (game.value === 0 && game.start === true && game.computerPlay === true) {
                    if (fields[i].textContent !== "") return;
                    console.log('Field ' + i + ' was clicked');
                    if (game.turn === game.players.Player1.name) {
                        fields[i].textContent = game.players.Player1.sign
                        game.turn = game.players.Player2.name
                        game.endGame()
                           if (game.value === 0) {
                            // Create an array of fields that do not have text content
                            const emptyFields = fields.filter(field => field.textContent === "");
                            // Generate a random number between 0 and the length of the empty fields array
                            const randomIndex = Math.floor(Math.random() * emptyFields.length);
                            // Select a random field from the array
                            const randomField = emptyFields[randomIndex];
                            // Set the text content of the selected field
                            randomField.textContent = game.players.Player2.sign;
                            game.turn = game.players.Player1.name
                           }
                        
                    }
                    game.endGame()
                
                
            }

                });
            }
        
        },
        endGame: function () {

            
            
            if (fields[0].textContent === fields[1].textContent && fields[1].textContent === fields[2].textContent && fields[0].textContent !== '')  {
                if (game.turn === game.players.Player1.name) {
                   let container = document.querySelector('.container')
                   container.style.opacity = 0.05
                
                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player2.name + ' Won'   
                } else {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player1.name + ' Won'
                }
                game.value = 1
                }
            
            if (fields[3].textContent === fields[4].textContent && fields[4].textContent === fields[5].textContent && fields[3].textContent !== '') {
                if (game.turn === game.players.Player1.name) {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player2.name + ' Won'
                } else {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player1.name + ' Won'
                }
                game.value = 1
            }
            if (fields[6].textContent === fields[7].textContent && fields[7].textContent === fields[8].textContent && fields[6].textContent !== '') {
                if (game.turn === game.players.Player1.name) {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player2.name + ' Won'
                } else {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player1.name + ' Won'
                }
                game.value = 1
            }
            if (fields[0].textContent === fields[4].textContent && fields[4].textContent === fields[8].textContent && fields[0].textContent !== '') {
                if (game.turn === game.players.Player1.name) {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player2.name + ' Won'
                } else {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player1.name + ' Won'
                }
                game.value = 1
            }
            if (fields[2].textContent === fields[4].textContent && fields[4].textContent === fields[6].textContent && fields[2].textContent !== '') {
                if (game.turn === game.players.Player1.name) {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player2.name + ' Won'
                } else {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player1.name + ' Won'
                }
                game.value = 1
            } 
            if (fields[0].textContent === fields[3].textContent && fields[3].textContent === fields[6].textContent && fields[0].textContent !== '') {
                if (game.turn === game.players.Player1.name) {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player2.name + ' Won'
                } else {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player1.name + ' Won'
                }
                game.value = 1
            } 
            if (fields[1].textContent === fields[4].textContent && fields[4].textContent === fields[7].textContent && fields[1].textContent !== '') {
                if (game.turn === game.players.Player1.name) {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player2.name + ' Won'
                } else {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player1.name + ' Won'
                }
                game.value = 1
            } 
            if (fields[2].textContent === fields[5].textContent && fields[5].textContent === fields[8].textContent && fields[2].textContent !== '') {
                if (game.turn === game.players.Player1.name) {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player2.name + ' Won'
                } else {
                    let container = document.querySelector('.container')
                    container.style.opacity = 0.05

                    let winner = document.querySelector('.winner')
                    winner.textContent = game.players.Player1.name + ' Won'
                }
                game.value = 1
            } 
            if (fields.every(field => field.textContent !== "")) {
                let container = document.querySelector('.container')
                container.style.opacity = 0.05
                let winner = document.querySelector('.winner')
                winner.textContent = "Draw!!!"
                game.value = 1
                return;
            }
        }
           
    }



           
    
   
    
    
   

    
    return {
        fields,
        createField,
        game
        
        
        
        
        
    };
    
})()
gameBoard.createField();
gameBoard.game.otherFunction();


const buttonStart = (function () {
    let start = document.querySelector(".start");

    function startGame() {
      start.addEventListener("click", function (event) {
        if (gameMode === 'Player') {  
        
        if (document.getElementById("form").checkValidity()) {
              event.preventDefault(); 
            
                let player1Name = document.querySelector('#player1').value
                let player2Name = document.querySelector('#player2').value
                  gameBoard.game.players.Player1.name = player1Name
                  gameBoard.game.players.Player2.name = player2Name
                  gameBoard.game.turn = gameBoard.game.players.Player1.name
                  getComputerChoice()
                  console.log(gameBoard.game.players.Player1)
                  console.log(gameBoard.game.value)
                gameBoard.game.start = true
          }
        } 
          if (gameMode === 'Robot') {  
              if (document.getElementById("form").checkValidity()) {
            event.preventDefault(); 
              
              let player1Name = document.querySelector('#player1').value
              let player2Name = 'Computer'
              gameBoard.game.players.Player1.name = player1Name
              gameBoard.game.players.Player2.name = player2Name
              gameBoard.game.turn = gameBoard.game.players.Player1.name
              getComputerChoice()
              gameBoard.game.computerPlay = true
              gameBoard.game.start = true
              }
        }
    });
}

    return {
        start, startGame
    };
})();
buttonStart.startGame()




const buttonRobot = (function () {
    let robot = document.querySelector(".robot");
    let player = document.querySelector('.player');
    let play2 = document.querySelector('#play2')

    function playerVsRobot() {
        robot.addEventListener("click", function () {
            let layout = document.querySelector('.layout')
            let chooseGame = document.querySelector('.chooseGame')
            player.remove()
            robot.remove()
            play2.remove()
            gameMode = 'Robot'
         chooseGame.remove()
            layout.style.display = 'grid'
        });
    }

    return {
       play2, player, robot, playerVsRobot
    };
})();

buttonRobot.playerVsRobot()


const buttonPlayer = (function () {
    let player = document.querySelector(".player");
    let robot = document.querySelector('.robot')
    
    

    function playerVsplayer() {
        player.addEventListener("click", function () {
            let layout = document.querySelector('.layout')
            let chooseGame = document.querySelector('.chooseGame')
            player.remove()
            robot.remove()
            chooseGame.remove()
            layout.style.display = 'grid'
            gameMode = 'Player'
            
        });
    }

    return {
         player, robot, playerVsplayer
    };
})();
buttonPlayer.playerVsplayer()

let gameMode = ''
console.log(gameBoard.fields[2])


const buttonRestart = (function () {
    let restart = document.querySelector(".restart");
    let container = document.querySelector('.container')
    let winner = document.querySelector('.winner')
    let inputs = document.querySelectorAll("#form input[type='text']");


    function restartGame() {
        restart.addEventListener("click", function () {
            gameBoard.game.start = false
            gameBoard.game.value = 0;
            gameBoard.game.turn = gameBoard.game.players.Player1.name
            gameBoard.fields.forEach(field => field.textContent = "")
           
            container.style.opacity = 1
            winner.textContent = ""
            inputs.forEach(input => input.value = "");
           

        });
    }

    return {
        restart, inputs, winner, container, restartGame
    };
})();
buttonRestart.restartGame()




