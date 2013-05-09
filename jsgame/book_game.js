function add2DCapabilities(object) {
    object.x = 0;
    object.y = 0;

    object.relativeCoordinates = function(direction, distance) {
        return {
            x: this.x + distance * direction.orientation.x,
            y: this.y + distance * direction.orientation.y
        };
    };

    object.moveTo = function(objectWithCoords) {
        object.x = objectWithCoords.x;
        object.y = objectWithCoords.y;
    };
}

function Grid(laby) {
    this.cells = [];

    this.height = laby.length;
    this.width = laby[0].length;

    //array initialization
    for (var i = 0; i < this.width; i++) {
        this.cells.push(new Array(this.height));
    };

    for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
            var cell = new Cell();
            cell.x = x;
            cell.y = y;

            switch (laby[y][x]) {
            case '*':
                cell.paint({ wall: true });
                break;
            case ' ':
                cell.paint({ wall: false });
                break;
            case 's':
                cell.paint({ wall: false });
                this.start = cell;
                break;
            case 'x':
                cell.paint({ wall: false });
                this.exit = cell;
                break;
            }

            this.cells[x][y] = cell;
        };
    };

};

Grid.directions = {
    up: {
        name: 'haut',
        orientation: {
            x: 0,
            y: -1
        }
    },
    down: {
        name: 'bas',
        orientation: {
            x: 0,
            y: 1
        }
    },
    right: {
        name: 'droite',
        orientation: {
            x: 1,
            y: 0
        }
    },
    left: {
        name: 'gauche',
        orientation: {
            x: -1,
            y: 0
        }
    }
};


Grid.canWalkOn = function(cell) {
    return (cell && !cell.wall);
};

Grid.prototype.coordsInWorld = function(coords) {
    return (coords.x >= 0 && coords.y >= 0 && coords.x < this.width && coords.y < this.height);
};


Grid.prototype.getCell = function(coords) {
    if (this.coordsInWorld(coords)) {
        return this.cells[coords.x][coords.y];
    } else {
        return false;
    }
};

Grid.prototype.neighbourOf = function(cell, direction) {
    var targetCoords = cell.relativeCoordinates(direction, 1);
    return this.getCell(targetCoords);
};

Grid.prototype.neighboursOf = function(cell) {
    var result = {};
    for (var directionName in Grid.directions) {
        result[directionName] = this.neighbourOf(cell, Grid.directions[directionName]);
    };
    return result;
};

Grid.prototype.displayWalkableWays = function(cell) {
    var neighbours = this.neighboursOf(cell);
    for (var directionName in neighbours) {
        if (Grid.canWalkOn(neighbours[directionName])) {
            console.log("vous pouvez aller vers " + Grid.directions[directionName].name); //DO BETTER. because of console . use sendMessage ?
        }
    }
};

Grid.prototype.displayNeighbourMap = function(cell) {
    var upCell = this.neighbourOf(cell, Grid.directions['up']);
    var upNeighbours = upCell ? this.neighboursOf(upCell) : {};

    var centerNeighbours = this.neighboursOf(cell);

    var downCell = this.neighbourOf(cell, Grid.directions['down']);
    var downNeighbours = downCell ? this.neighboursOf(downCell) : {};

    console.log(this.renderCell(upNeighbours['left']) + this.renderCell(centerNeighbours['up']) + this.renderCell(upNeighbours['right']));

    console.log(this.renderCell(centerNeighbours['left']) + '♀' + this.renderCell(centerNeighbours['right']));

    console.log(this.renderCell(downNeighbours['left']) + this.renderCell(centerNeighbours['down']) + this.renderCell(downNeighbours['right']));
};


Grid.prototype.renderCell = function(cell) {
    return (cell ? cell.render() : '█');
};

function Player(grid) {
    this.grid = grid;
    this.steps = 0;
    add2DCapabilities(this);

    this.moveTo(grid.start);

    this.displayWalkableWays();
}

Player.prototype.displayWalkableWays = function() {
    this.displayNeighbourMap();
    this.grid.displayWalkableWays(this.cell());
};

Player.prototype.sendMessage = function(message) {
    console.log(message);
};

Player.prototype.cell = function() {
    return this.grid.getCell(this);
};

Player.prototype.displayNeighbourMap = function() {
    this.grid.displayNeighbourMap(this.cell());
};

Player.prototype.move = function(directionName) {
    var direction = Grid.directions[directionName];

    var targetCoords = this.relativeCoordinates(direction, 1);
    var targetCell = this.grid.getCell(targetCoords);

    if (Grid.canWalkOn(targetCell)) {
        this.moveTo(targetCell);
        this.steps += 1;
        this.sendMessage('Vous vous êtes déplacé vers ' + direction.name);
        this.sendMessage('Vous avez fait ' + this.steps + ' mouvements.');
        this.displayWalkableWays();
    } else {
        this.sendMessage('Mouvement impossible');
    }

};

Player.createMoveShortcut = function(directionName) {
    Player.prototype[directionName] = function() {
        this.move(directionName);
    };
};

(function() {
    for (var directionName in Grid.directions) {
        Player.createMoveShortcut(directionName);
    }
})();

/* don't do:
for(var directionName in Grid.directions) {
    Player.prototype[directionName] = function () {
        this.move(directionName);
    };
}
*/

function Cell() {
    this.wall = false;
    add2DCapabilities(this);
}

Cell.prototype.render = function() {
    if (this.wall) {
        return '█';
    } else {
        return ' ';
    }
};

Cell.prototype.paint = function(options) {
    if (typeof options.wall !== undefined) {
        this.wall = options.wall;
    }
};

var laby = [];

laby.push("* * x");
laby.push("*   *");
laby.push("  ** ");
laby.push("* s  ");

var grid = new Grid(laby);
var player = new Player(grid);
