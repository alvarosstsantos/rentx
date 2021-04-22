"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSpecifications1616439106076 = void 0;

var _typeorm = require("typeorm");

class CreateSpecifications1616439106076 {
  async up(queryRunner) {
    queryRunner.createTable(new _typeorm.Table({
      name: "specifications",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "name",
        type: "varchar"
      }, {
        name: "description",
        type: "varchar"
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    queryRunner.dropTable("specifications");
  }

}

exports.CreateSpecifications1616439106076 = CreateSpecifications1616439106076;