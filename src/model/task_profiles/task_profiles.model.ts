import { Column, Model, Table, DataType, CreatedAt, UpdatedAt, HasMany, HasOne, ForeignKey, AllowNull, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import { MainStatus } from '@/entities/main_status.entities';

@Table({ tableName: 'task_profiles', underscored: true })
export class TaskProfiles extends Model {

    @Column({ type: DataType.STRING, allowNull: true })
    userId: string;

    @Column({ type: DataType.STRING, allowNull: true })
    userIdType: string;

    @Column({ type: DataType.STRING, allowNull: true })
    phoneNumber: string;

    @Column({ type: DataType.STRING(30), allowNull: true })
    name: string;

    @Column({ type: DataType.TEXT('long'), allowNull: true })
    profileImage: string;

    @Column({ type: DataType.FLOAT, allowNull: true, defaultValue: 0 })
    totalTaskReceived: number;

    @Column({ type: DataType.FLOAT, allowNull: true, defaultValue: 0 })
    totalTaskCompleted: number;

    @Column({ type: DataType.FLOAT, allowNull: true, defaultValue: 0 })
    totalMonetaryRewardCollected: number;

    @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
    totalNonMonetaryRewardCollected: number;

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
