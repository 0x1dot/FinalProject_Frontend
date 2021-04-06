import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryRepsonseMode extends ResponseModel{
    data:Category[];
}