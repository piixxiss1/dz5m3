let form = document.querySelector('.form')
let btnDelete = document.querySelector('.btn-delete')

form.addEventListener('submit', (e) =>  {
    e.preventDefault()
    fetch('http://localhost:3000/cards', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            name: e.target[0].value,
            surname: e.target[1].value
        })
    })
    .then((res) => {
         e.target[0].value = ''
         e.target[1].value = '', res
    })
    .catch((err) => alert(err))
})

// delete 
btnDelete.addEventListener('click', () => {
    fetch('http://localhost:3000/cards/1', {
        method: 'DELETE'
    }).then(() => alert('вы успешно удалили'))
    .catch((err) => alert('ошибка при удалении карточки', err))

})