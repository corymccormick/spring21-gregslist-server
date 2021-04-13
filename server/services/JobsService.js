import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class JobsService {
  async getAll(query = {}) {//review query
    let data = await dbContext.Jobs.find(query)
  }
  async getById(id) {
    let data = await dbContext.Jobs.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("invalid Id")
    }
    return data
  } async create(body) {
    return await dbContext.Jobs.create(body)
    // .create is a method
  } async edit(body) {
    let data = await dbContext.Jobs.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data

  } async delete(id) {
    let data = await dbContext.Jobs.findByIdAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invakid Id")
    }
    return "Successfully Deleted"
  }

}

export const jobsService = new JobsService();