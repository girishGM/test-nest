import { Column, Model, Table, DataType, CreatedAt, UpdatedAt, HasMany, HasOne, ForeignKey, AllowNull, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import { MainStatus } from '@/entities/main_status.entities';

@Table({ tableName: 'task_flows', underscored: true })
export class TaskFlows extends Model {

    @Column({ type: DataType.STRING, allowNull: true })
    code: string;

    @Column({ type: DataType.STRING, allowNull: true })
    taskStatus: string;

    @Column({ type: DataType.STRING, allowNull: true })
    sequence: string;

    @CreatedAt
    @Column({ type: DataType.DATE, allowNull: false })
    createdDate: Date;

    @UpdatedAt
    @Column({ type: DataType.DATE, allowNull: true })
    updatedDate: Date;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: MainStatus.ACTIVE })
    statusCode: number;

    @Column({ type: DataType.STRING, allowNull: true })
    statusShowToUser: string;
}
