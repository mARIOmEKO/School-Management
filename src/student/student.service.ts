import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ){}

    async createStudent(createStudentInput: CreateStudentInput): Promise<Student>{
        const student= this.studentRepository.create({
            id: uuid(),
            ...createStudentInput
        })
        
        return await this.studentRepository.save(student);
    }

    async getAllStudents():Promise<Student[]>{
        return await this.studentRepository.find();
    }

    async getStudent(id : string): Promise<Student>{
        return await this.studentRepository.findOne({where: {id}})
    }

    async getManyStudents(studentIds : string[] ): Promise<Student[]>{
        return this.studentRepository.find({
            where:{
                id:{
                    $in: studentIds,
                }
            }
        })
    }
}
