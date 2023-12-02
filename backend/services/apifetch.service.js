const Book = require('../models/Book')

async function databaseSeed(){
    await Book.deleteMany()

    

    for(page = 1; page < 1000; page++){
        
        response = await fetch(`https://openlibrary.org/search.json?sort=rating&subject=fiction&language=eng&fields=title,author_name,publish_year,cover_i,isbn,number_of_pages_median&page=${page}`)
        data = await response.json()
        doc = data.docs
        console.log(doc.length)
        console.log(page)

        
        for(i = 0; i < doc.length; i++){
            console.log(doc[i].title)

            try{
                book = {
                    title: doc[i].title,
                    author: doc[i].author_name[0],
                    releaseDate: Math.min(doc[i].publish_year),
                    isbn: typeof doc[i].isbn[0] === String ? doc[i].isbn[0] : '',
                    pages: typeof doc[i].number_of_pages_median === Number ? doc[i].number_of_pages_median : 0,
                    averageRating: 0
                }
    
                saveBook(book)
            }
            catch{
                continue
            }
        }
    }
}



async function saveBook(book){
    try {
        await Book.insertMany(book)
    } catch (error) {
        console.log('error saving book to database:', error)
    }
}

module.exports = {
    databaseSeed
}