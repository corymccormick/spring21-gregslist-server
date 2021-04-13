import { BaseController } from "../utils/BaseController";
import { jobsService } from "../services/JobsService";

// Review basecontroller
export class JobsController extends BaseController {
  constructor() {
    super('/api/jobs')//review super
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