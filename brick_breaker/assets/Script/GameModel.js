
cc.Class({
    extends: cc.Component,

    properties: {
        score:0,
        brickNumber: 30,
    },
    
    init (){
        this.score = 0;
        this.brickNumber = 30;
    },

    addScore(score){
        this.score +=score;
    },

    minusBrick(n){
        this.brickNumber -= n;
    },



});
