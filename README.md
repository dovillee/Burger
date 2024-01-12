# Burger Task

This repository contains a task for an internship that demonstrates automated testing using Cypress.

## Prerequisites

Before running the tests, ensure you have the following software installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)

## Setting Up

1. Clone the repository to your local machine:
```
git clone https://github.com/dovillee/Burger
```

2. Go to the project directory
```
cd cypress/e2e/
```

3. Install
```
npm install
```

## Test steps
1. Navigate to Wolt website and accept cookies
2. In the address field type 'Kauno D'
3. When 'Kauno Dokas' appears in search results click on it
4. Click on the section called 'Burgeriai'
5. Click on the 'Peledine' restaurant.
6. Click on the 'Burgeriai' tab.
7. Click on 'Peledziukas burgeris'.
8. Add the selected burger to the cart.
9. Click on the 'Peržiūrėti užsakymą' (View cart) button.
10. Verify that the selected burger is added to the cart.
11. Click on 'Eiti į apmokėjimą' (Proceed to payment).
12. Input an email address to proceed.

> [!NOTE]
> Because of GDPR provided email is fake. The next step would be needed if that email would be valid.

*13. Click on the 'Kitas' (Next) button to proceed to the next step.* 


## Contributing
Contributions are welcome! If you find any issues or have suggestions to improve the project, please feel free to open an issue or submit a pull request.


Happy burgers ordering! 🍔 🚀
