
cc.Class({
    extends: cc.Component,

    properties: {
        score:0,
        brickNumber:49,
    },
    
    init (){
        this.score = 0;
    },

    addScore(score){
        this.score +=score;
    },

    minusBrick(n){
        this.brickNumber -= n;
    },



});
