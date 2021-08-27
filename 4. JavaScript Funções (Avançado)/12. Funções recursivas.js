// Uma função que se chama de volta
//  - Se preocupar quando ela deve parar
function recursive(max) {
    console.log(max)
    if(max >= 10) return
    max++
    // ela se chama de volta
    recursive(max)
}

recursive(0)
// output -> 
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10