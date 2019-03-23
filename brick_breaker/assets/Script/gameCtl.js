const GameModel = require('GameModel');

cc.Class({
    extends: cc.Component,

    properties: {
        gameView: require('GameView'),
        ball: require('ball'),
        paddle: require('paddle'),
        brickLayout: require('brickLayout'),
        overPanel: require('overPanel'),
    },

    onLoad(){
    
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,(event)=>{
            if(event.keyCode === cc.KEY.back){
                cc.director.end();
            }
        });
        this.physicsManager = cc.director.getPhysicsManager();
        this.gameModel = new GameModel();
        this.startGame();

        // 物理系统debug绘制
        /*cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        cc.PhysicsManager.DrawBits.e_pairBit |
        cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        cc.PhysicsManager.DrawBits.e_jointBit |
        cc.PhysicsManager.DrawBits.e_shapeBit
        ;*/
    },

    init (){
        this.physicsManager.enabled = true;
        this.gameModel.init();

        this.gameView.init(this);
        this.ball.init(this);
        this.paddle.init(this);
        this.brickLayout.init(this.brickLayout.bricksNumber);
        this.overPanel.init(this);
    },

    startGame(){
        this.init();
    },

    pauseGame(){
        this.physicsManager.enabled = false;
    },

    resumeGame(){
        this.physicsManager.enabled = true;
    },

    stopGame(){
        this.physicsManager.enabled = false;
        this.overPanel.show(this.gameModel.score,this.gameModel.brickNumber === 0);
    },

    onBallContactBrick(ballNode,brickNode){
        brickNode.parent = null;
        this.gameModel.addScore(1);
        this.gameModel.minusBrick(1);
        this.gameView.updateScore(this.gameModel.score);
        brickNode.destroy();
        if(this.gameModel.brickNumber <= 0){
            this.stopGame();
        }

    },

    onBallContactGround(ballNode,groundNode){
        this.stopGame();
    },

    onBallContactWall(){

    },

    onBallContactPaddle(){

    },
  

    // update (dt) {},
});
