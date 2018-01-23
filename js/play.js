var playState = {
    
    
    preload: function() {				
		
        game.load.image('back', 'assets/images/back.png');
        //game.load.image('ground', 'assets/platform.png');
        //game.load.image('star', 'assets/star.png');
        //game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

    },
    create: function() {	

		game.add.sprite(0, 0, 'back'); //add background image

    },
    
    update: function() {      
		
		// When the player sprite and win sprite overlap, the 
	},
	
	Win: function() {
		
		game.state.start('win');
	}

}