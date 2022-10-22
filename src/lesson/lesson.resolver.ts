// import { Injectable } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import {v4 as uuid} from 'uuid';

@Resolver( of => LessonType)
export class LessonResolver {
    @Query(returns => LessonType)
    lesson(){
        return {
            id: '123asd',
            name: 'physic',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString()
        }
    }
    
    @Mutation(returns => LessonType)
    createLesson(){

    }
}
