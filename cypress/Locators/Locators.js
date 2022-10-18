class locatorsPage{

    home = "//a[contains(text(), 'Home ')]"
    phone = "//a[contains(text(), 'Phones')]"
    laptop = "//a[contains(., 'Laptops')]"
    monitors = "//a[contains(., 'Monitors')]"
    firstProduct = "(//h4[@class='card-title'])[1]/a"
    addToCard = "//a[contains(text(), 'Add to cart')]"
    cart = "//a[contains(text(), 'Cart')]"
    placeOrder = "//button[contains(text(), 'Place Order')]"
    nameTextBox = "//input[@id='name']"
    countryTextBox = "//input[@id='country']"
    cityTextBox = "//input[@id='city']"
    creditCardTextBox = "//input[@id='card']"
    monthTextBox = "//input[@id='month']"
    yearTextBox = "//input[@id='year']"
    purchaseButton = "//button[contains(text(), 'Purchase')]"


   

}

export default locatorsPage;
