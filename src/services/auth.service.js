import { ErrorConstants } from "../constants/error.constant.js";
import { authRepository } from "../repositories/auth.repository.js";

export const authService = {
  logIn: async (username, password) => {
    try {
      const result = await authRepository.logIn(username, password);
      if (result) {
        return result;
      } else {
        throw new Error(ErrorConstants.INVALID_CREDENTIALS);
      }
    } catch (error) {
      console.error(error);
      throw new Error(ErrorConstants.INTERNAL_SERVER_ERROR);
    }
  },
  signUp: async (username, password) => {
    try {
      const result = await authRepository.signUp(username, password);
      if (result) {
        return result;
      } else {
        throw new Error(ErrorConstants.SIGNUP_FAILED);
      }
    } catch (error) {
      console.error(error);
      throw new Error(ErrorConstants.INTERNAL_SERVER_ERROR);
    }
  },
  checkEmailExists: async (email) => {
    try {
      const result = await authRepository.checkEmailExists(email);
      if (result) {
        return result;
      } else {
        throw new Error(ErrorConstants.EMAIL_NOT_FOUND);
      }
    } catch (error) {
      console.error(error);
      throw new Error(ErrorConstants.INTERNAL_SERVER_ERROR);
    }
  },
};
