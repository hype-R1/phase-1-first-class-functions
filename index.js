function receivesAFunction(bananas) {
    bananas();
  }
  
function returnsANamedFunction(){
    return function apples() {
        let x = 7
    }
}

function returnsAnAnonymousFunction() {
    return () => ("yo")

}
