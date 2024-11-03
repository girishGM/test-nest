import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsString,
  IsEnum,
  IsOptional,
  IsNumber,
  IsArray,
  IsNotEmpty,
  IsDate,
  IsBoolean,
} from 'class-validator';
import { ApiPropertyOptional, PickType } from '@nestjs/swagger';

export interface UserInfo {
  userIdNumber: string;
  userIdType: string;
  phoneNumber: string;
  profileImage: string;
  customerFullName: string;
  mobile: string;
  panNumber: string;
  customerProfileName: string;
  profilePicUrl: string;
}

export class CreateTaskProfileInput {


  @IsOptional()
  @ApiPropertyOptional({
    required: false,
    type: 'string',
    description: 'Customer id',
    example: '00136952',
  })
  userId?: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    required: true,
    type: 'string',
    description: 'number',
    example: '1',
  })
  userIdType: string;

  @IsOptional()
  @ApiPropertyOptional({
    required: false,
    type: 'string',
    description: 'image URL',
    example: 'www.google.com',
  })
  profileImage?: string;

  @IsOptional()
  @ApiPropertyOptional({
    required: false,
    type: 'string',
    description: 'Phone number',
    example: '0103069895',
  })
  phoneNumber?: string;
}
