import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskProfilesService } from './task_profiles.service';
//import { TaskProfile } from './entities/task_profile.entity';
import { CreateTaskProfileInput } from './dto/create-task_profile.input';
import { UpdateTaskProfileInput } from './dto/update-task_profile.input';

//@Resolver(() => TaskProfile)
export class TaskProfilesResolver {
  constructor(private readonly taskProfilesService: TaskProfilesService) { }

  // @Mutation(() => TaskProfile)
  // createTaskProfile(@Args('createTaskProfileInput') createTaskProfileInput: CreateTaskProfileInput) {
  //   return this.taskProfilesService.create(createTaskProfileInput);
  // }

  // @Query(() => [TaskProfile], { name: 'taskProfiles' })
  // findAll() {
  //   return this.taskProfilesService.findAll();
  // }

  // @Query(() => TaskProfile, { name: 'taskProfile' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.taskProfilesService.findOne(id);
  // }

  // @Mutation(() => TaskProfile)
  // updateTaskProfile(@Args('updateTaskProfileInput') updateTaskProfileInput: UpdateTaskProfileInput) {
  //   return this.taskProfilesService.update(updateTaskProfileInput.id, updateTaskProfileInput);
  // }

  // @Mutation(() => TaskProfile)
  // removeTaskProfile(@Args('id', { type: () => Int }) id: number) {
  //   return this.taskProfilesService.remove(id);
  // }
}
