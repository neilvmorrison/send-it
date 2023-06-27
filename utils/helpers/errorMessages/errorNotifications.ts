export interface INotificationMessage {
  id: string;
  title: string;
  message: string;
  color: string;
}

export const userNotFoundAuthenticationError: INotificationMessage = {
  id: "user-not-found",
  title: "Authentication error!",
  message: "A user with that email does not exist in our database",
  color: "red",
};

export const userAlreadyExistsAuthenticationError: INotificationMessage = {
  id: "generic-authentication-error",
  title: "Authentication error!",
  message: "A user with that email already exists in our database",
  color: "red",
};

export const genericAuthenticationErrorNotification: INotificationMessage = {
  id: "generic-authentication-error",
  title: "Authentication error!",
  message: "Something went wrong. Please try again later",
  color: "red",
};

export const invalidCodeSubmitError: INotificationMessage = {
  id: "invalid-code-submit-error",
  title: "Authentication error!",
  message: "That code is not valid, try again.",
  color: "red",
};

export const genericError: INotificationMessage = {
  id: "generic-error",
  title: "Authentication error!",
  message: "A user with that email does not exist in our database",
  color: "red",
};
