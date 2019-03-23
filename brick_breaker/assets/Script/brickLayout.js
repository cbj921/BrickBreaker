
const BRICK_COL = 7;
const BRICK_ROW = 7;

cc.Class({
    extends: cc.Component,

    properties: {
        brickPrefab:{
            default:null,
            type: cc.Prefab
        },
    

    },

    onLoad(){

    },

    init:function(){
        this.node.removeAllChildren(true); // 默认清除所有移除的子节点
        this.brickInit();
    },

    brickInit:function(){

        this.brickArr = this.arrayInit(BRICK_COL,BRICK_ROW);
        let n = 0;

        for(let col=0;col<BRICK_COL;col++){
            for(let row=0;row<BRICK_ROW;row++){
                let brick = cc.instantiate(this.brickPrefab);
                this.node.addChild(brick);
                this.brickArr[col][row] = brick;
            }
        }
    },

    /**
     * @description: 
     * @param {Number}  xDimension:一维数组的长度
     * @param {Number}  yDimension:一维数组中每个元素的长度
     * @return: twoArray 返回一个二维数组
     */
    arrayInit: function (xDimension, yDimension) {
        let blockArr = new Array(); // 先声明一维数组
        for (let i = 0; i < xDimension; i++) {
            blockArr[i] = new Array();
            for (let j = 0; j < yDimension; j++) {
                blockArr[i][j] = 0;
            }
        }
        return blockArr;
    },


    // update (dt) {},
});
