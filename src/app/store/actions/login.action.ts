import { Action } from '@ngrx/store';
import { LoginDetails } from '../../model/logindetails.model';

export const ADD_LOGIN = '[LOGIN] Add';
export const REMOVE_LOGIN = '[LOGIN] Remove';
export const LOAD_LOGIN = '[LOGIN] Load';

export class AddLogin implements Action {
    readonly type = ADD_LOGIN

    constructor(public payload: LoginDetails) {}
}

export class RemoveLogin implements Action {
    readonly type = REMOVE_LOGIN

    constructor(public payload: string) {}
}

export type Actions = AddLogin | RemoveLogin;