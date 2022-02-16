module.exports = (req, res, next) => {
    console.log()
    console.log(`Passando pelo middleware.`)
    console.log()
    next()
}