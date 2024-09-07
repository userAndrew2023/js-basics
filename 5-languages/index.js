const language = prompt('Введи свой язык');

switch (language) {
    case 'en':
        console.log('Hi')
        break;
    case 'ru':
        console.log('Привет')
        break;
    case 'de':
        console.log('Hallo')
        break;
    case 'it':
        console.log('Ciao')
        break;
    case 'ch':
        console.log('你好')
        break;
    case 'by':
        console.log('прывет');
        break;
    default:
        console.log('Моя твоя не понимать');
}