it('.contains', () => {

  cy
    .visit('/')

  cy
    .contains('Apples')

  cy
    .contains('apples', { matchCase: false })

  cy
    .contains('Pear')

  cy
    .contains('Apple')

  cy
    .get('div')
    .contains('Apple')

  cy
    .contains('ul', 'Pear')

  cy
    .contains(/Apple/)

});
