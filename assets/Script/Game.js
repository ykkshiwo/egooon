cc.Class({
    extends: cc.Component,

    properties: {
        e: {
            default: null,
            type: cc.Node
        },
        eleField:{
            default: null,
            type: cc.Node
        },
        jstUp: {
            default: null,
            type: cc.Node
        },
        jstDown: {
            default: null,
            type: cc.Node
        },
        accXgo: 150,
        czjsd_: {
            default: null,
            type: cc.Label
        },
        czsd_: {
            default: null,
            type: cc.Label
        },
        spjsd_: {
            default: null,
            type: cc.Label
        },
        spsd_: {
            default: null,
            type: cc.Label
        },
    },

    // use this for initialization
    onLoad: function () {
        this.platfondY = this.jstUp.y;
        this.groundY = this.jstDown.y;
        this.eR = this.e.height/2
        this.limitU = this.platfondY - this.eR;
        this.limitD = this.groundY + this.eR;
        this.noAccXup = this.platfondY - this.accXgo;
        this.noAccXdown = this.groundY + this.accXgo;
    },

    update: function(dt){
        if(this.e.y < this.limitD || this.e.y > this.limitU){
            this.e.y = 0
        }
        else if(this.e.y < this.noAccXup && this.e.y > this.noAccXdown){
            this.e.getComponent('e').accX = 0
            this.e.getChildByName("Fh").active = false;
        }
        else{
            this.e.getComponent('e').accX = 10
            this.e.getChildByName("Fh").active = true;
            this.e.getComponent('e').speedX += this.e.getComponent('e').accX * dt
            this.eleField.getComponent('scroller').speed = -this.e.getComponent('e').speedX
            console.log(this.eleField.getComponent('scroller').speed)
        }
        this.czsd_.string = this.e.getComponent('e').speedY.toString() + ' m/s';
        this.czjsd_.string = this.e.getComponent('e').accY.toString() + " m/s^2";
        this.spjsd_.string = this.e.getComponent('e').accX.toString() + " m/s^2";
        this.spsd_.string = Math.round(this.e.getComponent('e').speedX).toString() + ' m/s';
    }

});