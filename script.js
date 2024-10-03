const lodData = () => {
      fetch('./books.json')
            .then(res => res.json())
            .then(data => displayData(data))
}
lodData()

// {
//       "id": 1,
//       "title": "Unlocking Android",
//       "isbn": "1933988673",
//       "pageCount": 416,
//       "authors": [
//             "W. Frank Ableson",
//             "Charlie Collins",
//             "Robi Sen"
//       ]
// }


const displayData = (data) => {


      const booksContainer = document.getElementById('books-container')
      data.forEach(book => {
            const { id, title, isbn, pageCount, authors } = book
            const bookCard = document.createElement('div')
            bookCard.classList = "border rounded h-full w-full p-5 shadow-md flex flex-col justify-between"
            bookCard.innerHTML = `
              <h1 class=" text-xl font-bold">${title}</h1>
              <p class=" font-semibold">${pageCount ? `Pages : ${pageCount}` : ''}</p>
              <ul>
               ${authors.map(item => `<li>${item}</li>`).join('')}
                 </ul>
              <div class=" flex justify-end   "> 
              <button class="btn flex  bg-neutral-800 text-white hover:text-black mt-4 justify-end"> Read Book</button>
              </div>

            `


            booksContainer.appendChild(bookCard)

      });

}