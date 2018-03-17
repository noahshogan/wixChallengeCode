/*
 * #1: Assuming '(' means go up and ')' means go down, which floor will you end up on given the input? The building you are in has an
 * infinite number of floors and an infinite number of basements. You start at floor 0.
 * Your input is:
 */

let firstTaskInput= "((())))))())))(())()(()()(()))(()(()())(((((()()()))()()((())))))()((())(())(()((((())(((()(()()((())))))(((()" +
    ")))))(()(()))))((())()((()((())))((()()((((()()())(((()))()))))())(()()))())()))())()())()(()())(((()()))(((())))()))(()))()))" +
    ")((())((((()))())))()))()(((()()(())())()((()()())(())())())((()(((((()(())(())(()))())())()))()))(()((()(()()(()((()())(()())" +
    "(()((())()))))()(()((()()(()())((()((()))))))())()((())(())((()))(()))((((((()()))())()((((()((()()))()(())((()))()()())))(())" +
    "((((((()()()))((()(()))((())))()()(()())))))(())))())))()())()(()(())()()(())))()(()()()))((()(()()))))))))()())(()()())))))((" +
    "()())()((())())((()((())())(())(((()))(((()(((())())(())(())()))((())()(()((()()(((()((())()(((())(())()()(())(())(())((((((((" +
    "(((()(()))))))((()((()((()((()))(())((((()))(()(()))))))))))(((((((())(()()))()())()))()())()()()(((((())(()((((((()))((()((((" +
    "((())((()))()))))())()))()))()()()())()))))((((())())(()))(()(((()((()(((())()(()))()))(()(()((()))((())()))(((())))))(((())((" +
    "))()((()()()())((()(()(()(())))()())()))(()(()()())(()))((()(()))()(((()))()))()))())(()())()))()()(()))())())()))(()))))((()(" +
    ")))(()()()))())())))()()(())())((((((()())(()()(()(()))))(()((((())(())((()()(((()()()())((()))))))(((())()(())((()((())))))()" +
    "(())))((((((()()(";

document.getElementById("firstTask").innerHTML = "First task answer: " + firstTaskFloorCount(firstTaskInput);

function firstTaskFloorCount(firstTaskInput) {
    return firstTaskInput.replace(/[^(]/g, "").length - firstTaskInput.replace(/[^)]/g, "").length;
}
/*
 * #2: Assuming '<' means left, '>' means right, '^' means up and 'v' means down, you start at a position in the middle of a huge field,
  * where you have more than enough room to move. You start walking according to the directions in input. How many positions did you
  * visit more than once? The position you start in is considered a visit.
 * Your input is:
 */

let secondTaskInput= "<^>v^>^<^^<<<>v>^<>vv^<>>^^>^<^vv^^>^<^v^>^^v>v>>v<^^v^vvv>>^vv>>vv<vv<<<>v^^v>^^v^^^<>vv^^^<v>v>^v<<>>vv>v^^>" +
    "v^><<v<^>>v<vv>><>vvvv<><v<>v^<>v<^^>><v<^><v<^v^>vv>>v>>^^^vv><^v<>v>v>v><>v>>><<v>v<>v>><<^v>^<>v<>^>>>^^<<><^v<^vvvv><v<^>v>" +
    ">v><><^<v>>^<v^^^v^vv<>v^^^><^v<^><>>^>v>^^<^>v>^<^<<<^^^^v>^^v^>>>>>^^v>><vv><>^v^<^v^>v^<v>^<v>vv>^<<>^v^<>vv^>><v><v>><^vv^v" +
    ">>^v>^><<>v<>vvv<^^<^v>>>^>v<<v<<^<v^v<<v^vv>v<^<<>v>>>>v^vv<vv<>^<v>><<^v><<<<>v^v^<><^<v^>v><^^^v>>v>vv<<^^v>vvvv>v<^^<<^v<v>" +
    "v<v>>>vv^^vv><^vv>>^^><^>>v<><^vv^^^v<>><><^^><vv<^<v>>vv>>^>><>v>v<<<>><<>^vvv>>v>^>vv<v>v><v^vv<^vv^<>>^><^^>^v^>^>>^^<<^^>^^" +
    "v^>^^<><<^^^^>^v<^^v^^<<>vvv^v<vv>>v^v^v<>><>v<<>^<^<^<^^v<>^><<>^^v>v<>v^vv>>>>v^>v<><>^><^^>>^^>>v^vv^<vv^vvv><>^v>><v^>>>><v" +
    "<<<v<vv^vv>^>^<vv^v><^v>>v><<v^v<vv^<v<^<><<<v>>>><^^v>vvvv^<>v>^^>><<<>v^>v<v<^^^^v^<^>vv>^><^v^>>><^<<^<<><^^>v<v^>vv<v>v<^<>" +
    ">^>><^v><v>>v>^<vv>vv>^<vv^^><>>^>v><<<<^<>><<^>v^^^^<>>^^^<>>v>^^<v<^>^v>>v^v<<vvvv^^>>^<^^^^v^<^v^>^><v<v^<<v>v^<^<^>^>vv^v^<" +
    "vv<>v^^>>^^^v><vv<><><^<v^^>><>>>^v<><><<<^>><><vv<vv<^v>^<<vvv<<v<v><^^<>><^>vv^^<<<>v<>^v^^v>^v<<<^^><vv<^v^v><^>v>v^>v^^<v<^" +
    "<>v<^^<^>><>>^<vv^^<vv<><v^v>^<^<>^<><<>v^^<v^vv>v^>vv>>vv>^><<v<<>>>>>^^<<>>><>><^^>>vvv<vv>v^^<^vv^>^^<>v>^^<^<>^v^v<v<v<<^>v" +
    "><v>>>v^<<>>^vv>v^^>>^v^v<<>v<<>>^<^^<^^^v<>>^^>><^><^>v<v<<v^>^v>^^^v^<v^^^<>^^<^<v<v<<^^><v><v<>^>><<<v<^>v^>v<v^v<>>v<<^^>^v" +
    "<><^<<v^<>vv^^<>vvv^>>v^v>vv>^vvv<><v>vv>>vv<vv>v>>>^<<>^v^v>vv>><<>^^>^><^<^^<<vv^><vv<>><>^v>^^<>>><^^<<v>>^>><>vv^<v<<v^>^<^" +
    "<>>v^<>vv<^>>^<v^^^^v<^>v<v<>^<^v<><<^^vv<><>^v<v<v<^vv^>^^>^>^><<^vv>v^>^vv^>v^>>v^>><<>^>>v^^^>^^^<<^vvvvvvv^vvvvv<^><<v><^vv" +
    "<v><><<<<>v^<v<v>vv<";

document.getElementById("secondTask").innerHTML = "Second task answer: " + secondTaskRoomTravel(secondTaskInput);

function secondTaskRoomTravel(secondTaskInput) {

    let listOfLocations = [];
    let X = 0;
    let Y = 0;
    let answer = 0;

    listOfLocations[hashCode()] = 0;

    for (let i = 0 ; i < secondTaskInput.length ; i++){
        getNextLocation(secondTaskInput.charAt(i));
        let locationHash = hashCode();
        listOfLocations.hasOwnProperty(locationHash) ? listOfLocations[locationHash]++ : listOfLocations[locationHash] = 0;
        if (listOfLocations[locationHash]===1){ answer++; } //this is the place i have already visited
    }
    return answer;

    /*help functions*/
    function getNextLocation(char) {
        switch(char) {
            case '^' : Y++; break;
            case 'v' : Y--; break;
            case '>' : X++; break;
            case '<' : X--; break;
            default  :      break;
        }
    }

    function hashCode() {
        return (X.toString() + Y.toString()).split("").reduce(function(a, b){a = ((a << 5) - a) + b.charCodeAt(0);return a & a}, 0);
    }
    /*help functions*/
}
