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

    // Calcule le périmètre : somme des 3 côtés
    getPerimeter() {
        return this.a + this.b + this.c;
    }

    // Calcule l’aire avec la formule de Héron
    getArea() {
        const s = (this.a + this.b + this.c) / 2;
        const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return area;
    }
}

module.exports = {
    Triangle:Triangle
}