import { ErrorConstants } from "../constants/error.constant.js";
import { modelRepository } from "../repositories/model.repository.js";

export const modelService = {
  getModels: async () => {
    try {
      const result = await modelRepository.getModels();
      if (result) {
        return result;
      } else {
        throw new Error(ErrorConstants.MODEL_NOT_FOUND);
      }
    } catch (error) {
      console.error(error);
      throw new Error(ErrorConstants.INTERNAL_SERVER_ERROR);
    }
  },
  getModelById: async (id) => {
    try {
      const result = await modelRepository.getModelById(id);
      if (result) {
        return result;
      } else {
        throw new Error(ErrorConstants.MODEL_NOT_FOUND);
      }
    } catch (error) {
      console.error(error);
      throw new Error(ErrorConstants.INTERNAL_SERVER_ERROR);
    }
  },
  createModel: async (model) => {
    try {
      const result = await modelRepository.createModel(model);
      if (result) {
        return result;
      } else {
        throw new Error(ErrorConstants.MODEL_CREATION_FAILED);
      }
    } catch (error) {
      console.error(error);
      throw new Error(ErrorConstants.INTERNAL_SERVER_ERROR);
    }
  },
  updateModel: async (id, model) => {
    try {
      const result = await modelRepository.updateModel(id, model);
      if (result) {
        return result;
      } else {
        throw new Error(ErrorConstants.MODEL_UPDATE_FAILED);
      }
    } catch (error) {
      console.error(error);
      throw new Error(ErrorConstants.INTERNAL_SERVER_ERROR);
    }
  },
  deleteModel: async (id) => {
    try {
      const result = await modelRepository.deleteModel(id);
      if (result) {
        return result;
      } else {
        throw new Error(ErrorConstants.MODEL_DELETION_FAILED);
      }
    } catch (error) {
      console.error(error);
      throw new Error(ErrorConstants.INTERNAL_SERVER_ERROR);
    }
  },
};
