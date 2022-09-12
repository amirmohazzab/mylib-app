let books = [
  {
    name: "Oliver Twist",
    number: 21,
    amount: "50",
    Author: "Charles Dickens",
  },
  {
    name: "Animal Farm",
    number: 22,
    amount: "65",
    Author: "George Orwell",
  },
  {
    name: "The Brothers Karamazov",
    number: 23,
    amount: "42",
    Author: "Fyodor Dostoevsky",
  },
  {
    name: "War and Peace",
    number: 24,
    amount: "75",
    Author: "Leo Tolstoy",
  },
  {
    name: "One hundred years of Solitude",
    number: 25,
    amount: "52",
    Author: "Gabriel García Márquez",
  },
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