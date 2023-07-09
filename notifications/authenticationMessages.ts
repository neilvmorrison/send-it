export interface INotificationMessage {
  id: string;
  title: string;
  message: string;
  color: string;
}

export const successfulLogout: INotificationMessage = {
  id: "log-out-success",
  title: "",
  message: "You have successfully logged out of the application",
  color: "green",
};

export const successfulLogin: INotificationMessage = {
  id: "log-in-success",
  title: "",
  message: "You have successfully logged in to the application",
  color: "green",
};
