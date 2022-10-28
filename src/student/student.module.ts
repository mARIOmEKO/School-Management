import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { Student } from './student.entity';
import { StudentResolver } from './student.reslover';
import { StudentService } from './student.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService,StudentResolver],
  imports: [TypeOrmModule.forFeature([Student])],
  exports: [StudentService],
})
export class StudentModule {}
