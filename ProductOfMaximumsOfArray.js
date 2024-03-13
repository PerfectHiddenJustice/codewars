function maxProduct(numbers, size) {
    numbers.sort((a, b) => a - b).reverse()
    let result = numbers.slice(0, size).reduce((acc, val) => acc * val, 1)
    return result
}