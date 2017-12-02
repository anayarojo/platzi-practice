const Point = {
    init: function init (x, y){
        this.x = x;
        this.y = y;
    },
    moveX: function moveX(x) {
        this.x += x;
    },
    moveY: function moveY(y) {
        this.y += y;
    },
    getDistance: function getDistance(p) {
        const x = this.x - p.x;
        const y = this.y - p.y;

        return Math.sqrt(x * x + y * y);
    }
}

const p1 = Object.create(Point);
p1.init(0,4);