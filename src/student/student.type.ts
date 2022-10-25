import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Lesson')
export class StudentType{
    @Field(type => ID)
    id: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;
}