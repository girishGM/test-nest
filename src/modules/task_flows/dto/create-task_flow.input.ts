import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskFlowInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
