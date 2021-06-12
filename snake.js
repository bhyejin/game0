class Snake {

    constructor() {
        this.len = 0;
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.xdir = 0;
        this.ydir = 0;

    }

    setDir(x, y) {
        this.xdir = x; 
        this.ydir = y;
    }

    update() {
        this.body[0].x += this.xdir;
        this.body[0].y += this.ydir;

    } 

    grow() {
        this.len++;
        this.body.push(createVector);
    }


    eat(pos) {
        let x = this.body[0].x;
        let y = this.body[0].y;
        if (x == pos.x && y == pos.y) {
            this.grow();
            return true;
        }
        return false;
    }

    show() {
        for (let i = 0; i < this.body.length; i++)
        fill(0);
        noStroke();
        rect(this.body[i].x, this.body[i].y, 10, 10);
    }
} 