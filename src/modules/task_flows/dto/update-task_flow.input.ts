import { CreateTaskFlowInput } from './create-task_flow.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskFlowInput extends PartialType(CreateTaskFlowInput) {
  @Field(() => Int)
  id: number;
}
