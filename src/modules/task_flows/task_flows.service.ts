import { Injectable } from '@nestjs/common';
import { CreateTaskFlowInput } from './dto/create-task_flow.input';
import { UpdateTaskFlowInput } from './dto/update-task_flow.input';

@Injectable()
export class TaskFlowsService {
  create(createTaskFlowInput: CreateTaskFlowInput) {
    return 'This action adds a new taskFlow';
  }

  findAll() {
    return `This action returns all taskFlows`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskFlow`;
  }

  update(id: number, updateTaskFlowInput: UpdateTaskFlowInput) {
    return `This action updates a #${id} taskFlow`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskFlow`;
  }
}
