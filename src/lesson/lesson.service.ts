import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import {v4 as uuid} from 'uuid';
import { CreateLessonInput } from './lesson.input';


@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson)
        private readonly lessonRepository: Repository<Lesson>
    
    ){}

    async createLesson(createLessonInput: CreateLessonInput) : Promise<Lesson>{
        const lesson = this.lessonRepository.create({
            id: uuid(),
            ...createLessonInput,
        })

        return await this.lessonRepository.save(lesson);

    }

    async getLesson(id: string) : Promise<Lesson>{
       return await  this.lessonRepository.findOne({where: {id}});
    }

    async getAllLessons() : Promise<Lesson[]>{
        return await  this.lessonRepository.find();
     }

     async assignStudentToLesson( lessonId: string, studentsIds: string[]): Promise<Lesson>{
        const lesson = await this.lessonRepository.findOne({where: {id: lessonId}});
        lesson.students= [...lesson.students, ...studentsIds];
        return this.lessonRepository.save(lesson);
     }
}
