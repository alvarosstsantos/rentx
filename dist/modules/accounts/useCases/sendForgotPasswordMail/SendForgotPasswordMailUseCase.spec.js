"use strict";

var _UsersRepositoryInMemory = require("@modules/accounts/repositories/in-memory/UsersRepositoryInMemory");

var _UsersTokensRepositoryInMemory = require("@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory");

var _DayjsDateProvider = require("@shared/container/providers/DateProvider/implementations/DayjsDateProvider");

var _MailProviderInMemory = require("@shared/container/providers/MailProvider/in-memory/MailProviderInMemory");

var _AppErrors = require("@shared/errors/AppErrors");

var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");

let sendForgotPasswordMailUseCase;
let usersRepositoryInMemory;
let usersTokensRepositoryInMemory;
let dayjsDateProvider;
let mailProvider;
describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new _UsersRepositoryInMemory.UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new _UsersTokensRepositoryInMemory.UsersTokensRepositoryInMemory();
    dayjsDateProvider = new _DayjsDateProvider.DayjsDateProvider();
    mailProvider = new _MailProviderInMemory.MailProviderInMemory();
    sendForgotPasswordMailUseCase = new _SendForgotPasswordMailUseCase.SendForgotPasswordMailUseCase(usersRepositoryInMemory, usersTokensRepositoryInMemory, dayjsDateProvider, mailProvider);
  });
  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = spyOn(mailProvider, "sendMail");
    await usersRepositoryInMemory.create({
      driver_license: "586117",
      email: "zafik@lour.mu",
      name: "Edward Rodriquez",
      password: "97237301"
    });
    await sendForgotPasswordMailUseCase.execute("zafik@lour.mu");
    expect(sendMail).toHaveBeenCalled();
  });
  it("should not be able to send email if user does not exists", async () => {
    await expect(sendForgotPasswordMailUseCase.execute("wac@jussogre.sl")).rejects.toEqual(new _AppErrors.AppError("user does not exists"));
  });
  it("should be able to create an users token", async () => {
    const generateTokenMail = spyOn(usersTokensRepositoryInMemory, "create");
    await usersRepositoryInMemory.create({
      driver_license: "377609",
      email: "bekzomki@mu.sx",
      name: "Justin Hudson",
      password: "97237301"
    });
    await sendForgotPasswordMailUseCase.execute("bekzomki@mu.sx");
    expect(generateTokenMail).toBeCalled();
  });
});