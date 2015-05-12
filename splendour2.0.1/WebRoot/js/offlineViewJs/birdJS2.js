var Bird = function() {
    var scope = this;
    BIRDO.Geometry.call(this);
    v(5, 0, 0);
    v( - 5, -2, 1);
    v( - 5, 0, 0);
    v( - 5, -2, -1);
    v(8, 2, -6);
    v(0, 2, 6);
    v(2, 0, 0);
    v( - 6, 0, 0);
	v(16, 2, -6);
    v(0, 2, 6);
    v(18, 0, 0);
    v( - 6, 0, 0);
    f3(0, 2, 1);
    f3(4, 7, 6);
    f3(5, 6, 7);
    this.computeCentroids();
    this.computeFaceNormals();
    function v(x, y, z) {
        scope.vertices.push(new BIRDO.Vertex(new BIRDO.Vector3(x, y, z)));
    }
    function f3(a, b, c) {
        scope.faces.push(new BIRDO.Face3(a, b, c));
    }
}
Bird.prototype = new BIRDO.Geometry();
Bird.prototype.constructor = Bird;