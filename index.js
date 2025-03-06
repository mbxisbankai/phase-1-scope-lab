var customerName = 'bob';

function upperCaseCustomerName(){
    var newName = customerName.toUpperCase();
    customerName = newName;
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'jeff';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bob';
}


