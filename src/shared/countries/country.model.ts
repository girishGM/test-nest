import { Table, Column, Model, DataType } from 'sequelize-typescript';

import { MainStatus } from '@/entities/main_status.entities';

@Table({ tableName: 'task_country', underscored: true })
export class TaskCountry extends Model<TaskCountry> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    code: string;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: MainStatus.ACTIVE })
    statusCode: number;
}