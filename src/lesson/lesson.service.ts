// import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver( of => LessonType)
export class LessonService {
    @Query(returns => LessonType)
    lesson(){
        return {
            id: '123asd',
            name: 'physic',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString()
        }
    }
    
}
