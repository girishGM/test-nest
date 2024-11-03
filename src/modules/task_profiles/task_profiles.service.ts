
import { UpdateTaskProfileInput } from './dto/update-task_profile.input';
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Inject, Injectable, Logger, NotFoundException, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { TaskProfiles } from 'src/model/task_profiles/task_profiles.model';
import { CreateTaskProfileInput, UserInfo } from './dto/create-task_profile.input';
import { MainStatus } from '@/entities/main_status.entities';
import { TaskProfilesStatus } from 'src/modules/task_profiles/entities/task_profile.entity';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class TaskProfilesService {
  constructor(private readonly sequelize: Sequelize,
    private readonly httpService: HttpService, private configService: ConfigService,
    @InjectModel(TaskProfiles) private profileModel: typeof TaskProfiles
  ) {
    // const filePath = join(__dirname, '..', 'tenant_config.json');
    // this.texts = JSON.parse(readFileSync(filePath, 'utf8'));
  }

  private logger = new Logger(TaskProfilesService.name);

  create(createTaskProfileInput: CreateTaskProfileInput) {
    return 'This action adds a new taskProfile';
  }

  private texts: any;

  async getProfileByUserId(userInfo: UserInfo): Promise<any> {
    try {

      this.logger.log("Finding profile id based on user ID: " + JSON.stringify(userInfo));

      const user = await this.profileModel.findOne({ where: [{ user_id: userInfo.userIdNumber }] });

      if (!user) {
        throw new NotFoundException(`User with userID ${userInfo.userIdNumber} not found`);
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  async createProfile(userInfo: UserInfo): Promise<any | string> {
    try {
      this.logger.log('Creating user profile userInfoFromMdip ' + JSON.stringify(userInfo));

      let userIdNumber, userIdType, phoneNumber, profileImage;

      if (userInfo) {
        this.logger.log('getting data from mdip to create profile ');
        userIdNumber = userInfo.userIdNumber;
        userIdType = userInfo.userIdType;
        phoneNumber = userInfo.phoneNumber;
        profileImage = userInfo.profileImage;
      }

      const [user, created] = await this.profileModel.findOrCreate({
        where: {
          userId: userIdNumber,
        },
        defaults: {
          userIdType,
          phoneNumber,
          profileImage,
        }
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getTest(): Promise<any> {
    return "Welcome to Fortune Rain API"
  }
}
