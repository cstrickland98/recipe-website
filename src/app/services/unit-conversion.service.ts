import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnitConversionService {
  private imperialToMetric: {
    [key: string]: { unit: string; factor: number };
  } = {
    tsp: { unit: 'ml', factor: 4.92892 },
    tbsp: { unit: 'ml', factor: 14.7868 },
    'fl oz': { unit: 'ml', factor: 29.5735 },
    cup: { unit: 'l', factor: 0.236588 },
    pint: { unit: 'l', factor: 0.473176 },
    quart: { unit: 'l', factor: 0.946353 },
    gallon: { unit: 'l', factor: 3.78541 },
    oz: { unit: 'g', factor: 28.3495 },
    lb: { unit: 'kg', factor: 0.453592 },
  };

  constructor() {}

  convertToMetric(
    value: number,
    unit: string
  ): { value: number; unit: string } {
    const conversion = this.imperialToMetric[unit];
    if (conversion) {
      return {
        value: value * conversion.factor,
        unit: conversion.unit,
      };
    }
    return { value, unit };
  }
}
