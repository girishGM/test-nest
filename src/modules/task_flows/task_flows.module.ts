import { Module } from '@nestjs/common';
import { TaskFlowsService } from './task_flows.service';
import { TaskFlowsResolver } from './task_flows.resolver';

@Module({
  providers: [TaskFlowsResolver, TaskFlowsService]
})
export class TaskFlowsModule {}
