import { forwardRef, MiddlewareConsumer, Module } from '@nestjs/common';
import { TaskProfilesService } from './task_profiles.service';
import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from 'src/middleware/httpconfig';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProfileController } from './task_profiles.controller';
import { TaskProfiles } from 'src/model/task_profiles/task_profiles.model';
import { AuthAndHeaderMiddleware } from '@/middleware/authentication.middleware';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    SequelizeModule.forFeature([
      TaskProfiles
    ]),
    ConfigModule,
  ],
  controllers: [ProfileController],
  providers: [TaskProfilesService]

})


export class TaskProfilesModule { }
