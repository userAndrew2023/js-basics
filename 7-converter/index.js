function convertCurrency(amount, fromCurrency, toCurrency) {
    const exchangeRates = {
        'RUB': {
            'USD': 0.03,
            'EUR': 0.025
        },
        'USD': {
            'RUB': 95,
            'EUR': 0.85
        },
        'EUR': {
            'RUB': 110,
            'USD': 1.18
        }
    };

    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
        return null;
    }

    return amount * exchangeRates[fromCurrency][toCurrency];
}

console.log(convertCurrency(1000, 'USD', 'RUB'));
