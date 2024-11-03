import { MiddlewareConsumer, Module, NestModule, forwardRef } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from '../../config.yaml';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { JwtModule } from '@nestjs/jwt';
import { TaskFlows } from '@/model/task_flows/task_flows.model';
import { TaskFlowsModule } from '../task_flows/task_flows.module';
import { TaskProfileTenants } from '@/model/task_profile_tenants/task_profile_tenants.model';
import { TaskProfileTenantsModule } from '../task_profile_tenants/task_profile_tenants.module';
import { TaskProfiles } from '@/model/task_profiles/task_profiles.model';
import { TaskProfilesModule } from '../task_profiles/task_profiles.module';
import { TaskTenant } from '../../shared/tenants/tenant.model';
import { TaskCountry } from '../../shared/countries/country.model';
import { TaskTenantsModule } from '../task_tenants/task_tenants.module';
import { CacheModule } from '@nestjs/cache-manager';


import { TestController } from '../task_profiles/test.controller';


@Module({
  imports: [
    CacheModule.register({
      ttl: 600, // Cache TTL in seconds (10 minutes)
      max: 100, // Optional: Maximum number of items in the cache
      isGlobal: true // Global configuration
    }),
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
        /* load tables here */
        models: [
          TaskFlows,
          TaskProfileTenants,
          TaskProfiles,
          TaskTenant,
          TaskCountry
        ],
      }),
      inject: [ConfigService],
    }),
    SequelizeModule.forFeature([TaskCountry, TaskTenant]),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('secondary_db'),
        models: [] /* load tables here */,
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    // insert module here
    TaskFlowsModule,
    TaskProfileTenantsModule,
    TaskProfilesModule,
    TaskTenantsModule,
    JwtModule.register({
      secret: 'R3W4RDS',
      signOptions: { expiresIn: '1hr' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
}
