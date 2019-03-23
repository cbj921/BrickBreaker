

cc.Class({
    extends: cc.Component,

    properties: {

    },

    init (gameCtl){
        this.gameCtl = gameCtl;
        this.node.position = cc.v2(325,155);
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(800,800);
    },

    onBeginContact(contact,self,other){
        switch(other.tag){ // 这里的other是碰撞体，而不是碰撞体的节点, 所以应该用tag来识别碰撞
            case 0: //球碰到墙  wall.tag = 0
                this.gameCtl.onBallContactWall(self.node,other.node);
                break;
            case 1: //ground.tag = 1
                this.gameCtl.onBallContactGround(self.node,other.node);
                break;
            case 2: //paddle.tag = 2
                this.gameCtl.onBallContactPaddle(self.node,other.node);
                break;
            case 3: //brick.tag = 3
                this.gameCtl.onBallContactBrick(self.node,other.node);
                break;
        }
    }

});
