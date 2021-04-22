"use strict";

var _CarsRepositoryInMemory = require("@modules/cars/repositories/in-memory/CarsRepositoryInMemory");

var _ListAvailableCarsUseCase = require("./ListAvailableCarsUseCase");

describe("List Cars", () => {
  let carsRepositoryInMemory;
  let listAvailableCarsUseCase;
  beforeEach(() => {
    carsRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    listAvailableCarsUseCase = new _ListAvailableCarsUseCase.ListAvailableCarsUseCase(carsRepositoryInMemory);
  });
  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Car Description",
      daily_rate: 130.0,
      license_plate: "DEF-1234",
      fine_amount: 80.0,
      brand: "Car Brand",
      category_id: "category_id"
    });
    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });
  it("Should be able to list all avaiable cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 2",
      description: "Car Description",
      daily_rate: 130.0,
      license_plate: "DEF-5678",
      fine_amount: 80.0,
      brand: "Car Brand Test",
      category_id: "category_id"
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car Brand Test"
    });
    expect(cars).toEqual([car]);
  });
  it("Should be able to list all avaiable cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "Car Description",
      daily_rate: 130.0,
      license_plate: "DEF-5679",
      fine_amount: 80.0,
      brand: "Car Brand Test",
      category_id: "category_id"
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: "Car 3"
    });
    expect(cars).toEqual([car]);
  });
  it("Should be able to list all avaiable cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 4",
      description: "Car Description",
      daily_rate: 130.0,
      license_plate: "DEF-5679",
      fine_amount: 80.0,
      brand: "Car Brand Test",
      category_id: "12345"
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345"
    });
    expect(cars).toEqual([car]);
  });
});