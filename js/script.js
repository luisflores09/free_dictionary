

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2'
let def;

const $input = $('input')
const $form = $('form')

const $definitionContainer = $('.definition-container')
const $partOfSpeechContainer = $('.partofspeech-container')
const $exampleContainer = $('.example-container')

const $definitionTwoContainer = $('.definitiontwo-container')
const $partOfSpeechTwoContainer = $('.partofspeechtwo-container')
const $exampleTwoContainer = $('.exampletwo-container')

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
    $definitionContainer.text(`1. Definition: ${def[0].meanings[0].definitions[0].definition}`);
    $partOfSpeechContainer.text(`Part of Speech: ${def[0].meanings[0].partOfSpeech}`);
    $exampleContainer.text(`Example: ${def[0].meanings[0].definitions[0].example}`);
    
    $definitionTwoContainer.text(`2. Definition: ${def[0].meanings[1].definitions[0].definition}`);
    $partOfSpeechTwoContainer.text(`Part of Speech: ${def[0].meanings[1].partOfSpeech}`);
    $exampleTwoContainer.text(`Example: ${def[0].meanings[1].definitions[0].example}`);
    
    $originContainer.text(`Origin: ${def[0].origin}`);

}
