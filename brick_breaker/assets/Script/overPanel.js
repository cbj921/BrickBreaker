

cc.Class({
    extends: cc.Component,

    properties: {
        resultLabel: cc.Label,
        scoreLabel: cc.Label,
    },

    onLoad(){

    },

    init (gameCtl){
        this.gameCtl = gameCtl;
        this.node.active = false;
    },

    show:function(score,isWin){
        this.node.active = true;
        if(isWin){
            this.resultLabel.string = "YOU WIN";
        }
        else{
            this.resultLabel.string = "YOU LOSE";
        }
        this.scoreLabel.string = 'SCORE: ' + score;
    },
    onBtnRestart:function(){
        this.gameCtl.startGame();
    }

});
