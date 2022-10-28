import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "src/lesson/lesson.type";
import { AssignStudentsToLessonInput } from "./assign-students-to-lesson-input";
import { CreateStudentInput } from "./create-student.input";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";

@Resolver(of => StudentType)
export class StudentResolver{
    constructor(
        private studentService: StudentService,
    ){}
    
    @Query(returns => [StudentType])
    async students(){
        return this.studentService.getAllStudents();
    }

    @Query(returns => StudentType)
    async getStudent(
        @Args('id') id: string
    ){
        return this.studentService.getStudent(id);
    }

    @Mutation(returns => StudentType)
    async createStudent(
        @Args('createStudentInput') createStudentInput : CreateStudentInput
    ){
        return this.studentService.createStudent(createStudentInput)
    }

   
}