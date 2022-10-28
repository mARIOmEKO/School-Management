// import { Injectable } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AssignStudentsToLessonInput } from 'src/student/assign-students-to-lesson-input';
import { StudentService } from 'src/student/student.service';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver( of => LessonType)
export class LessonResolver {
    constructor(
        private lessonService: LessonService,
        private studentService: StudentService,
    ){}
    @Query(returns => LessonType)
    lesson(
        @Args('id') id:string,
    ){
        return this.lessonService.getLesson(id);
    }

    @Query(returns => [LessonType])
    allLessons(){
        return this.lessonService.getAllLessons()
    }
    
    @Mutation(returns => LessonType)
    createLesson(
        @Args('createLessonInput') createLessonInput: CreateLessonInput,
    ){
        return this.lessonService.createLesson(createLessonInput);

    }
    @Mutation(returns =>LessonType)
    assignStudentToLesson(
        @Args('assignStudentsToLessonInput') assignStudentToLesson: AssignStudentsToLessonInput
    ){
        return this.lessonService.assignStudentToLesson(assignStudentToLesson.lessonId, assignStudentToLesson.studentsId)
    }

    @ResolveField()
    async student(@Parent() lesson: Lesson){
        return this.studentService.getManyStudents(lesson.students);
    }
}
