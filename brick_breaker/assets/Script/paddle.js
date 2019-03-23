

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        this.node.parent.on("touchmove",(event)=>{
            // 将世界坐标转换为本地坐标
            let touchPoint = this.node.parent.convertToNodeSpaceAR(event.getLocation());
            this.node.x = touchPoint.x;
        });
    },

    init (){
        this.node.x = 323;
    }


 
});
