import { BaseController } from "../utils/BaseController";
import { housesService } from "../services/HousesService";

// Review basecontroller
export class HousesController extends BaseController {
  constructor() {
    super('/api/houses')//review super
    this.router
      .get("/", this.getAll)//review"/"
      .get("/:id/", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  } async create(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  } async edit(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  } async delete(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
}