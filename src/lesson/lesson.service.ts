import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import {v4 as uuid} from 'uuid';


@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson)
        private readonly lessonRepository: Repository<Lesson>
    ){}

    async createLesson(name, startDate, endDate) : Promise<Lesson>{
        const lesson = this.lessonRepository.create({
            name,
            startDate,
            endDate,
            id: uuid(),
        })

        return await this.lessonRepository.save(lesson);

    }
}
