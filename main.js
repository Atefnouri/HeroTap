// Initialize Phaser and creates a game
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');
var hero;
var text;
var counter;
var gameTitle;
var gamePic;
var gameIns;
var socialNetwork;

var once = true;


    WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.


    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['VT323']
    }

};




// Creates a new 'main' state that will contain the game
var mainState = {
    
    // Function for loading all assets of the game (called only once)
    preload: function() { 
     
      //do all the scaling
    if(!game.device.desktop)
    {
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.setScreenSize(true);    
    }else
    {
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize(true);    
    }
 
    
      //  Load the Google WebFont Loader script
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');  
        
    game.load.image('img','assets/hero.png'); 
    game.load.image('img2','assets/herosplash.png');  
    game.load.image('facebook','assets/facebook.png');
       
        
    },

    // Fuction called o after 'preload' to setup the game (called only once)
    create: function() {
        
     
            
        
        hero = game.add.sprite(0,game.world.centerY,'img');
        hero.anchor.set(0.5);
        game.physics.startSystem(Phaser.Physics.ARCADE);                  game.physics.arcade.enable(hero);  
      hero.alpha = 0;        
        
   
        
        
        
        socialNetwork =  game.add.sprite(game.world.width-75,10,'facebook');    
        
     game.stage.backgroundColor = '#5ac2e9';
     
     gamePic = game.add.sprite(game.world.centerX,             game.world.centerY,'img2');
      gamePic.anchor.set(0.5);    
        
   
     socialNetwork.inputEnabled = true; 
     gamePic.inputEnabled = true;        
        
     counter = 0;
     var style = {font:"18px VT323",fill: "#FFFFFF"};
     var style2 = {font:"90px VT323",fill: "#FFFFFF"};
     var style3 = {font:"20px VT323",fill: "#FFFFFF"};      

     gameIns = game.add.text(game.world.centerX+20,500,"Tap The Hero To Start",style3);        
     gameIns.anchor.set(0.5);        
        
     gameTitle = game.add.text(game.world.centerX+20,100,"HERO TAP",style2);        
     gameTitle.anchor.set(0.5);     
     counter = 0;   
    
        
    //Animation    
    /*gameIns.alpha = 0;
    game.add.tween(gameIns).to( { alpha: 1 }, 1000,       Phaser.Easing.Linear.None, true, 0, 400, true);*/
        
        
    //event listenr
    
    gamePic.events.onInputDown.add(listener, this);    
    
    socialNetwork.events.onInputDown.add(listener2, this);    
    
     function listener3()
    {
    counter++;
   text.setText("You've Clicked "+counter+" Times ");
   
    
    }      
        
        
    function listener2()
    {
    
    window.open("http://facebook.com", "_blank");
   
    
    }    
        
    function listener () {
        
    gamePic.alpha = 0;    
    socialNetwork.alpha = 0;
    gameTitle.alpha = 0;
    gameIns.alpha = 0;
    startGame();    
     
}
        
function startGame()
{

if(once){    
hero.alpha = 1;    
hero.body.velocity.x=700;
text = game.add.text(600,20,"You've Clicked "+counter+" Times ",style);
once = false;
hero.inputEnabled = true;
hero.events.onInputDown.add(listener3, this);    
}
} 
        
            
       
},
    
    
    

// This function is called 60 times per second
update: function() {
        
     
if(hero.inWorld == false)
{
this.gameOver();

}    
        
        
        
},
    
 gameOver:function ()
{

hero.x = 50;
hero.body.velocity.x=0;
hero.alpha = 0;    
var style3 = {font:"70px VT323",fill: "#FFFFFF"};     
var gameoverText =  game.add.text(game.world.centerX,200,"Your Score Is",style3);
var resultText =  game.add.text(game.world.centerX,280,counter,style3);    
gameoverText.anchor.set(0.5);       


} 
};



//Add and start the 'main' state to start the game
game.state.add('main', mainState);
game.state.start('main'); 