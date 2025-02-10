import { postInterface } from "./post";
import { userProfileInterface } from "./profile";

export interface notificationInterface {
  _id: string;
  to : string,
  from :  userProfileInterface,
  post: string,
  type : string,
  date : string,
}