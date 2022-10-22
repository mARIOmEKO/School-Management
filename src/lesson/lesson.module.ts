import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonController } from './lesson.controller';
import { Lesson } from './lesson.entity';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson])
  ],
  controllers: [LessonController],
  providers: [LessonResolver, LessonService]
})
export class LessonModule {}
