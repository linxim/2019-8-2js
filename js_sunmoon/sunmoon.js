var obj = {
    init: function () {
        this.moon = document.getElementsByClassName('moon')[0];
        this.sun = document.getElementsByClassName('sun')[0];
        this.bindEvent();
    },
    bindEvent: function () {
        var self = this;
        var moon = self.moon;
        var dis;
        var flag = false;
        var body = document.getElementsByTagName('body')[0];
        moon.onmousedown = function (e) {
            flag = true;
            dis = e.clientX - moon.offsetLeft;
            // console.log(dis);
        };
        body.onmousemove = function (e) {
            if (!flag) {
                return;
            };
            moon.style.left = (e.clientX - dis) + 'px';
            // console.log(moon.style.left);
            self.getVoice();
        }
        body.onmouseup = function () {
            flag = false;
        }

    },
    getVoice: function () {
        var self = this;
        var sun = self.sun;
        var moon = self.moon;
        var per,
             d = moon.clientWidth,
            moonL = moon.offsetLeft,
            moonR = moonL + d,
            sunL = sun.offsetLeft,
            sunR = sunL + d;
        if (sunL > moonR || moonL > sunR) {
            per = 0;
        } else {
            if (sunL < moonL) {
                per = (sunR - moonL) / d;
            } else if (moonR >= sunL) {
                per = (moonR - sunL) / d;
            }
        }
        self.change(per);
    },
    change: function (vol) {
        var moon = this.moon;
        var body = document.getElementsByTagName('body')[0];
        moon.style.background="hsl(194,56%,"+(1-vol)*60+"%)";
        body.style.background="hsl("+(194+Math.floor(166*vol))+",66%,"+(1-vol)*50+"%)";
    }
}
obj.init();