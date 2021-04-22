"use strict";

var _UsersRepositoryInMemory = require("@modules/accounts/repositories/in-memory/UsersRepositoryInMemory");

var _UsersTokensRepositoryInMemory = require("@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory");

var _DayjsDateProvider = require("@shared/container/providers/DateProvider/implementations/DayjsDateProvider");

var _AppErrors = require("@shared/errors/AppErrors");

var _CreateUserUseCase = require("../createUser/CreateUserUseCase");

var _AuthenticateUserUseCase = require("./AuthenticateUserUseCase");

describe("Authenticate User", () => {
  let authenticateUserUseCase;
  let usersRepositoryInMemory;
  let createUserUseCase;
  let usersTokensRepositoryInMemory;
  let dayjsDateProvider;
  beforeEach(() => {
    usersRepositoryInMemory = new _UsersRepositoryInMemory.UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new _UsersTokensRepositoryInMemory.UsersTokensRepositoryInMemory();
    dayjsDateProvider = new _DayjsDateProvider.DayjsDateProvider();
    authenticateUserUseCase = new _AuthenticateUserUseCase.AuthenticateUserUseCase(usersRepositoryInMemory, usersTokensRepositoryInMemory, dayjsDateProvider);
    createUserUseCase = new _CreateUserUseCase.CreateUserUseCase(usersRepositoryInMemory);
  });
  it("Should be able to authenticate an user", async () => {
    const user = {
      driver_license: "1123113",
      email: "user@test.com",
      password: "12345",
      name: "User Test"
    };
    await createUserUseCase.execute(user);
    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    });
    expect(result).toHaveProperty("token");
  });
  it("Should not be able to authenticate a nonexistent user", async () => {
    await expect(authenticateUserUseCase.execute({
      email: "false@test.com",
      password: "falsepassword"
    })).rejects.toEqual(new _AppErrors.AppError("Email or password incorrect!"));
  });
  it("Should not be able to authenticate a user with wrong password", async () => {
    const user = {
      driver_license: "1123113",
      email: "user@test.com",
      password: "12345",
      name: "User Test"
    };
    await createUserUseCase.execute(user);
    await expect(authenticateUserUseCase.execute({
      email: "user@test.com",
      password: "falsepassword"
    })).rejects.toEqual(new _AppErrors.AppError("Email or password incorrect!"));
  });
});