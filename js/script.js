

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2'
let def;

const $input = $('input')
const $form = $('form')
const $definitionContainer = $('.definition-container')
const $exampleContainer = $('.example-container')
const $originContainer = $('.origin-container')


const handleGetData = event => {
    event.preventDefault()
    const query = $input.val()
    $.ajax(`${BASE_URL}/entries/en/${query}`)
    .then(data => {
        def = data
        render()
        console.log(data)
        console.log(query)
    }), (err => {
        console.log(err)
    })
}

$form.on('submit', handleGetData)

function render() {
    $definitionContainer.text(`Definition: ${def[0].meanings[0].definitions[0].definition}`);
    $exampleContainer.text(`Example: ${def[0].meanings[0].definitions[0].example}`);
    $originContainer.text(`Origin: ${def[0].origin}`);
}

// function render() {
//     $definitionContainer.text(def);
// }
