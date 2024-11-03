import {
    Controller,
    Get,
    HttpStatus,
    Body,
    Param,
    Post,
    Query,
    Inject,
    Put,
    Delete,
    Headers,
    HttpException,
    UseInterceptors,
    BadRequestException,
    InternalServerErrorException,
    Req,
    Logger
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskProfilesService } from './task_profiles.service';
import { ConfigService } from '@nestjs/config';
import { profile } from 'console';
import { CreateTaskProfileInput, UserInfo } from './dto/create-task_profile.input';
import { AuthenticationService } from '../authentication/authentication.service';
import { Request } from 'express';

@ApiTags('TaskProfile')
@Controller('/task/v1')
export class ProfileController {
    constructor(private readonly profileService: TaskProfilesService, private configService: ConfigService,
        private readonly profileInitService: TaskProfilesService,) { }
    private logger = new Logger(ProfileController.name);


    @Get('/profiles/id-type/profile')
    @ApiOperation({ description: 'Checking pan number from mdip and returning user profile' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'OK',
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'No user found',
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal Server Error',
    })
    async getProfileAndStatus(@Req() request: Request): Promise<any> {
        const userInfo = request.body.userInfoFromMdip
        const profile = await this.profileService.getProfileByUserId(userInfo);

        return { profile };
    }

    @Post('/profiles')
    @ApiOperation({ description: 'Create user profile' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Profile created',
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'No user created',
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal Server Error',
    })
    async createProfileAndTenantConfig(@Req() request: Request): Promise<any | string> {
        try {
            let userInfo: UserInfo;
            let profile;
            if (request['userInfo']) {
                console.log(" userFromMDIP -- " + JSON.stringify(request['userInfo']));
                userInfo = request['userInfo'];
                profile = await this.profileService.createProfile(userInfo);
            }

            return { profile };
        } catch (error) {
            console.log("=errorororororor ----");
        }
    }

}
