
const BRICK_COL = 7;
const BRICK_ROW = 7;

cc.Class({
    extends: cc.Component,

    properties: {
        brickPrefab:{
            default:null,
            type: cc.Prefab
        },
        padding: 0,
        spacing: 0,
        cols: 0,
        bricksNumber: 0,

    },

    init(bricksNumber) {
        this.node.removeAllChildren();
        this.bricksNumber = bricksNumber;
        for (let i = 0; i < this.bricksNumber; i++) {
            let brickNode = cc.instantiate(this.brickPrefab);
            brickNode.parent = this.node;
            brickNode.x = this.padding + (i % this.cols) * (brickNode.width + this.spacing) + brickNode.width / 2;
            brickNode.y = -this.padding - Math.floor(i / this.cols) * (brickNode.height + this.spacing) - brickNode.height / 2;
        }
    }
});

