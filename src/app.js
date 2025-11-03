class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    // Retourne les côtés sous forme de tableau
    getSides() {
        return [this.a, this.b, this.c];
    }
}

module.exports = {
    Triangle:Triangle
}