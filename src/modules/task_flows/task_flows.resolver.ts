import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskFlowsService } from './task_flows.service';
import { TaskFlow } from './entities/task_flow.entity';
import { CreateTaskFlowInput } from './dto/create-task_flow.input';
import { UpdateTaskFlowInput } from './dto/update-task_flow.input';

@Resolver(() => TaskFlow)
export class TaskFlowsResolver {
  constructor(private readonly taskFlowsService: TaskFlowsService) {}

  @Mutation(() => TaskFlow)
  createTaskFlow(@Args('createTaskFlowInput') createTaskFlowInput: CreateTaskFlowInput) {
    return this.taskFlowsService.create(createTaskFlowInput);
  }

  @Query(() => [TaskFlow], { name: 'taskFlows' })
  findAll() {
    return this.taskFlowsService.findAll();
  }

  @Query(() => TaskFlow, { name: 'taskFlow' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.taskFlowsService.findOne(id);
  }

  @Mutation(() => TaskFlow)
  updateTaskFlow(@Args('updateTaskFlowInput') updateTaskFlowInput: UpdateTaskFlowInput) {
    return this.taskFlowsService.update(updateTaskFlowInput.id, updateTaskFlowInput);
  }

  @Mutation(() => TaskFlow)
  removeTaskFlow(@Args('id', { type: () => Int }) id: number) {
    return this.taskFlowsService.remove(id);
  }
}
