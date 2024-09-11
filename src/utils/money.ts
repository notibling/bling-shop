type Currency = 'UYU' | 'USD';

class MoneyUtils {

  static currencyFormatter = new Intl.NumberFormat('en-IN')

  // static uruguayanPesosFormat = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD'
  // });

  static format(value: number, currency: Currency) {
    switch (currency) {
      case 'USD': {
        const money = MoneyUtils.currencyFormatter.format(value);
        return {
          amount: money,
          composed: `U$${money}`,
          currencyDisplay: 'U$',
          currency: 'USD',
        }
      }
      case 'UYU': {
        const money = MoneyUtils.currencyFormatter.format(value);

        return {
          amount: money,
          composed: `$${money}`,
          currencyDisplay: '$',
          currency: 'UYU',
        }
      }
    }
  }
}

export { MoneyUtils }