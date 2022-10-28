import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from 'src/student/student.service';
import { LessonController } from './lesson.controller';
import { Lesson } from './lesson.entity';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson]),
    StudentService
  ],
  controllers: [LessonController],
  providers: [LessonResolver, LessonService]
})
export class LessonModule {}
