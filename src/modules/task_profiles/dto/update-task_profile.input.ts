import { CreateTaskProfileInput } from './create-task_profile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskProfileInput extends PartialType(CreateTaskProfileInput) {
  @Field(() => Int)
  id: number;
}
