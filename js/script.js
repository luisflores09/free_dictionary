

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2'

const $input = $('input')
const $form = $('form')
let definition;
const $definitionContainer = $('#definition-container')


const handleGetData = event => {
    event.preventDefault()
    const query = $input.val()
    $.ajax(`${BASE_URL}/entries/en/${query}`)
        .then(data => {
            render()
            definition = data
            console.log(data)
            console.log(query)
        }), (err => {
            console.log(err)
        })
}

$form.on('submit', handleGetData)

function render() {
    $definitionContainer.text(definition);
}