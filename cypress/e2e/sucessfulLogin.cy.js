describe('Sucessful Login', () => {

  beforeEach( () => {
    // Go to the page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Login with right credentials', () => {

    // Find the Username and type a right credential
    cy.get("[placeholder='Username']").type("Admin")

    // Find the Password and type a right credential
    cy.get("[placeholder='Password'").type("admin123")

    // Find the Login button and click
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

    // Assertion on the URL
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  })
})