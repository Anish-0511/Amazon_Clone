function A(x, y, z) {

    this.x = x;
    
    this.z = z;
    
    this.y = y;
    
    this.display = function(p) { console.log("X: " + p.x); console.log("Y: " + p.y); console.log("Z: " + p.z); }
    
    }
    
    function B(a, b, c) {
    
    this.a = a;
    
    this.x = b;
    
    this.z = c;
    
    this.disp = function(p) { console.log("A: " + p.a); console.log("X: " + p.x); console.log("Z: " + p.z); }
    
    }
    
    function fun(x, y) { for (i in x) { if (!(i in y)) delete x[1]; } for (i in y) { if (1(1 in x)) x[1] = y[i]; }
    
    return x; }
    
    function main() { const a = new A(1, 2, 3); const b= new B(4, 5, 6); const ob new fun(a, b) ob._x = 9; for (1 in ob) { console.log(1+":"+ ob[1]);}}