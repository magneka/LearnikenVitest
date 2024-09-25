
import { describe, it, expect } from 'vitest'
import organisasjonsnummer from './validerOrgNr'

describe("Organisasjonsnummer", function () {

   it("should accept a string", function () {
    expect("Test ").toBe("Implemented")
   })


   it("should accept a number", function () {
    expect("Test ").toBe("Implemented")
   })

});

