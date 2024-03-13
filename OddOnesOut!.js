function oddOnesOut(ar) {
    let arCopy = []
    for (let i = 0; i < ar.length; i++) {
        let count = 0
        for (let j = 0; j < ar.length; j++) {
            if (ar[j] === ar[i]) count++
        }
        if (count % 2 === 0) arCopy.push(ar[i])
    }
    return arCopy;
}