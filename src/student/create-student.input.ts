import { Field, InputType } from "@nestjs/graphql";
import { MinLength } from "class-validator";

@InputType()
export class CreateStudentInput{
    @Field()
    @MinLength(3)
    firstName: string;

    @MinLength(3)
    @Field()
    lastName: string;
}