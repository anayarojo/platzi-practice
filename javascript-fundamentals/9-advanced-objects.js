// const p1 = {
//     x: 0,
//     y: 4,
//     moveX: function(x){
//         this.x = this.x + x;
//     },
//     moveY: function(y){
//         this.y = this.y + y;
//     }
// }

// const p2 = {
//     x: 0,
//     y: 4,
//     moveX: function (x) {
//         this.x = this.x + x;
//     },
//     moveY: function (y) {
//         this.y = this.y + y;
//     }
// }

function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.moveX = function moveX(x){
    this.x = this.x + x;
}

Point.prototype.moveY = function moveY(y) {
    this.y += y;
}

Point.prototype.getDistance = function getDistance(p){
    const x = this.x - p.x;
    const y = this.y - p.y;

    return Math.sqrt(x * x + y * y);
}

const p1 = new Point(0,4);
const p2 = new Point(0,4);