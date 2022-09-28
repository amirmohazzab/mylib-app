let books = [
  {
    title: "Oliver Twist",
    number: 1,
    author: "Charles Dickens"
  },
  {
    title: "Animal Farm",
    number: 2,
    author: "George Orwell"
  },
  {
    title: "The Brothers Karamazov",
    number: 3,
    author: "Fyodor Dostoevsky"
  },
  {
    title: "War and Peace",
    number: 4,
    author: "Leo Tolstoy"
  },
  {
    title: "One hundred years of Solitude",
    number: 5,
    author: "Gabriel García Márquez"
  }
];

export const getBooks = () => {
  return books;
};

export const getBook = (number) => {
  return books.find((book) => book.number===number)
};

export const deleteBook = (number) => {
  books = books.filter(
    (book) => book.number !== number,
  );
};