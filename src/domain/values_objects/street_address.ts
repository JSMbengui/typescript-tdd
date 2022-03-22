import { Country } from "./country"
import { PostalCode } from "./postal_code"

export class StreetAddress {
  streetAddress: string
  postalCode: PostalCode
  city: string
  country: Country

  constructor(
    streetAddress: string,
    postalCode: PostalCode,
    city: string,
    country: Country
  ) {
    if (!streetAddress ||
      !postalCode ||
      !city ||
      !country) throw new Error('Params bad formated')

    this.city = city
    this.country = country
    this.postalCode = postalCode
    this.streetAddress = streetAddress
  }
}