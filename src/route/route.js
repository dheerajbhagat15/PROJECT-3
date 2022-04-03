const express = require("express")
const router = express.Router()

const userController = require("../controller/userController")
const bookController = require("../controller/bookController")
const reviewController = require("../controller/reviewController")

const mw = require("../middleware/auth") 



// user
router.post("/register", userController.register)
router.post("/login", userController.login)

// book
router.post('/books',mw.authentication,bookController.createBook)
router.get("/books",mw.authentication, bookController.getBook)
router.get("/books/:bookId",mw.authentication, bookController.getBooksById)
router.put("/books/:bookId",mw.authentication, mw.authorisation,bookController.updateBook)
router.delete("/books/:bookId",mw.authentication, mw.authorisation, bookController.deleteBook)


// review
router.post("/books/:bookId/review", reviewController.createReview)
router.put("/books/:bookId/review/:reviewId",reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReview)


module.exports = router;