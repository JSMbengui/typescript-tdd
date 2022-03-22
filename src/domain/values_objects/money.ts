import { Curreny } from "./concurrency";

export class Money {
  amount: number;
  currency: Curreny

  constructor(amount: number, currency: Curreny) {
    this.amount = amount
    this.currency = currency
  }
  add(money: Money) {
    this.assertSameCurrency(money)
    return new Money(this.amount + money.amount, money.currency)
  }

  private assertSameCurrency(money: Money) {
    if (this.currency !== money.currency) {
      throw new Error('Money objects must have the same currency')
    }
  }
}