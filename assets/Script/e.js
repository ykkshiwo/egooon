cc.Class({
    //-- 继承
    extends: cc.Component,
    //-- 属性
    properties: {
        //-- 
        //-- y轴上的加速度
        accY: -20,
        //-- y轴上的速度
        speedY: 0,
        //-- x轴上的加速度
        accX: 0,
        //-- x轴上的速度
        speedX: 20,
        dynamPrefab:{
            default: null,
            type: cc.Prefab
        }
    },
    //-- 初始化
    onLoad(){
        this.registerInput();
    },

    registerInput () {
        var self = this;
        //add keyboard input listener to jump, turnLeft and turnRight
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // set a flag when key pressed
            onKeyPressed: function(keyCode, event) {
                self.accY = 10;
                self.node.getChildByName("G").active = true;
                self.node.getChildByName("Fv").active = true;
            },
            // unset a flag when key released
            onKeyReleased: function(keyCode, event) {
                self.accY = -20;
                self.node.getChildByName("G").active = false;
                self.node.getChildByName("Fv").active = false;
            }
        }, self.node);

        // touch input
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event) {
                self.accY = 10;
                self.node.getChildByName("G").active = true;
                self.node.getChildByName("Fv").active = true;
                // don't capture the event
                return true;
            },
            onTouchEnded: function(touch, event) {
                self.accY = -20;
                self.node.getChildByName("G").active = false;
                self.node.getChildByName("Fv").active = false;
            }
        }, self.node);
    },


    //-- 更新
    update (dt) {
        this.speedY += this.accY;
        this.node.y += dt * this.speedY;
    },
});
