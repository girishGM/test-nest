import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TaskFlow {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
