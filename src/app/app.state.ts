import { LoginDetails } from "./model/logindetails.model";

export interface AppState {
  readonly logindetails: LoginDetails[];
}