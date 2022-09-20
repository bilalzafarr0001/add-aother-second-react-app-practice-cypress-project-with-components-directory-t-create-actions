export const emailField = () => cy.get('[data-cy="email-field"]');
export const passwordField = () => cy.get('[data-cy=password-field]');
export const loginButton = () => cy.get('[data-cy=login_button]');

// actions

export const performLogin = (email, password) => {
    emailField().type(email);
    passwordField().type(password);
    loginButton().click();
};
