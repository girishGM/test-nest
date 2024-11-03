import { Table, Column, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import { MainStatus } from '@/entities/main_status.entities';

@Table({ tableName: 'task_tenants', underscored: true })
export class TaskTenant extends Model<TaskTenant> {

    @Column({ type: DataType.STRING, allowNull: true })
    code: string;

    @Column({ type: DataType.STRING(30), allowNull: true })
    name: string;

    @Column({ type: DataType.STRING, allowNull: true })
    countryCode: string;

    @Column({ type: DataType.STRING, allowNull: true })
    taskFlowCode: string;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    isIntroScreenOn: Boolean;

    @CreatedAt
    @Column({ type: DataType.DATE, allowNull: false })
    createdDate: Date;

    @UpdatedAt
    @Column({ type: DataType.DATE, allowNull: true })
    updatedDate: Date;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: MainStatus.ACTIVE })
    statusCode: number;
}