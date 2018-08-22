context ('Choose a Ski Resort', () => {
    it('Title displays "Choose A Ski Resort', () => {
        cy.visit('http://localhost:3000/')
        cy.get('header h1')
            .contains('Choose A Ski Resort')
    })
    it()
})

// context('Hacker News', () => {
//     it('Title displays "Vue HN 2.0"', () => {
//         cy.visit('https://e2e-hackernews.herokuapp.com/')
//         cy.get('title').contains('Vue HN 2.0')
//     })
//     it('More than one "news item"', () => {
//         cy.get('.news-list').should(() => {
//             expect('.news-item').to.have.length.above(1)
//         })
//     })
//     it('Go to "New" from link', () => {
//         cy.get('.inner a').contains('New').click()
//     })
//     it('Make sure on "new page"', () => {
//         cy.url('/new')
//     })
    
//     it('More than one "item" on new page', () => {
//         cy.get('.news-list').should(() => {
//             expect('.news-item').to.have.length.above(1)
//         })
//     })
//     it('Go to "more" link', () => {
//         cy.get('.news-list-nav a').contains('more').click()
//     })
//     it('Make sure on "more page"', () => {
//         cy.url('new/2')
//     })
//     it('More than one "news item" on new2 page', () => {
//         cy.get('.news-list').should(() => {
//             expect('.news-item').to.have.length.above(1)
//         })
//     })
//     it('Go to "Jobs" from link', () => {
//         cy.get('.inner a').contains('Jobs').click()
//     })
//     it('Make sure on "jobs" page', () => {
//         cy.url('/job')
//     })
//     it('More than one "item" on job page', () => {
//         cy.get('.news-list').should(() => {
//             expect('.news-item').to.have.length.above(1)
//         })
//     })
// })

// context("PHPTravels.com", () => {
//     it('Logo displays "PHP Logo"', () => {
//         cy.visit('http://localhost:3000/')
//         cy.get('header img')
//             .should('have.attr', 'src', './images/phptravels-logo.png')
//     })
//     it('Secondary header reads "Application Test Drive."', () => {
//         cy.get('h2')
//             .contains('Application Test Drive.')
//     })
//     it('Nav links contain "Demo, Order and Product"', () => {
//         cy.get('button')
//             .contains('Menu').click()
//         cy.get('.dropdown-menu li a')
//             .contains('Demo')
//         cy.get('.dropdown-menu li a')
//             .contains('Order')
//         cy.get('.dropdown-menu li a')
//             .contains('Product')
//     })
//     it('Product link has "sub-menu"', () => {
//         cy.get('button').contains('Menu').click()
//         cy.get('.dropdown-submenu a').contains('Product').click()
//         cy.get('.dropdown-menu li a').contains('Documentation')
//         cy.get('.dropdown-menu li a').contains('Features')
//         cy.get('.dropdown-menu li a').contains('Technology')
//     })
//     it('FAQ should have "6 items"', () => {
//         cy.get('section ul li').should('have.length', '6')
//     })
//     it('"Order" clicked navigates to "/order"', () => {
//         cy.visit('http://localhost:3000/')
//         cy.get('button').contains('Menu').click()
//         cy.get('.dropdown-menu li a').contains('Order').click().url('/order')
//     })
// })