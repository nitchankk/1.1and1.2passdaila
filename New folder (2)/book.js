class Book {
    // isbn(String) : is a book identifier, for examples, '978-7-888-14362-4', '978-3-16-148410-0'.
    // title (String): is a book title.
    // authors(An array of authors): is book authors. An array contains author objects which each author object stores
    //   - firstname(String): author’s firstname
    //   - lastname(String): author’s lastname
    // For example,  [{ firstname: 'John', lastname: 'Scott' }, { firstname: 'Adam', lastname: 'Kim' } ]
    // ebook(Boolean) : indicates whether book has e-book version or not.
  
    //constructor(isbn, title, ebook): creates a new book object with the provided parameters: isbn, title and ebook.
    //   - If title parameter is undefined or no value passed, you must set title to 'untitled' as a default function parameter.
    //   - If ebook parameter is undefined or no value passed you must set ebook to false as a default function parameter.
    //   - Your constructor must initial authors property to an empty array ([]) without provided parameter.
    constructor(isbn, title = 'untitled', ebook = false) {
      this.isbn = isbn
      this.title = title
      this.ebook = ebook
      this.authors = []
    }
    //   addAuthor(fn, ln): creates an author object by assigning the firstname property with the provided parameter named nand the lastname property with the provided parameter named ln. Then adding it to the end of authors array. You must return the new length of the authors array.
    addAuthor(fn, ln) {
      return this.authors.push({ firstname: fn, lastname: ln })
    }
    // getFirstAuthor() : returns the first author object of book, if no author then returns undefined.
    getFirstAuthor() {
      return this.authors[0]
    }
    getLastAuthor() {
      return this.authors[this.authors.length - 1]
    }
    //   getCoAuthors(): returns array of all authors except the first author, if no co-author, returns an empty array ([]).
    getCoAuthors() {
      // return this.authors.slice(1, this.authors.length)
      const [, ...coauthors] = this.authors
      return coauthors
    }
    //   findAuthor(firstname, lastname): returns the first author object that matches both firstname and lastname parameters (case insensitive). If no author matches, undefined is returned.
    findAuthor(firstname, lastname) {
      return this.authors.find(
        (author) =>
          author.firstname.toLowerCase() === firstname.toLowerCase() &&
          author.lastname.toLowerCase() === lastname.toLowerCase()
      )
    }
    // hasEbook() : returns the ebook property’ s value.
    hasEbook() {
      return this.ebook
    }
  }
  
  const bk1 = new Book()
  console.log(bk1.addAuthor('Somsak', 'Jaidee')) //1
  console.log(bk1.addAuthor('Somsri', 'Jaidee')) //2
  console.log(bk1.addAuthor('Somchai', 'Jaidee')) //3
  console.log(bk1)
  const bk2 = new Book('1-234-567-8', 'Introduction to JavaScript', true)
  console.log(bk2.addAuthor('John', 'May'))
  console.log(bk2)
  
  console.log(bk1.getFirstAuthor())
  console.log(bk1.getLastAuthor())
  console.log(bk1.getCoAuthors())
  console.log(bk1.findAuthor('Somchai', 'JAIDEE'))
  console.log(bk1.hasEbook())