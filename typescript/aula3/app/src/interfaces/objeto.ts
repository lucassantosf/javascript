import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Objeto<T> extends Imprimivel,Comparavel<T>{

}