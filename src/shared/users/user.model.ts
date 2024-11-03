
import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users', schema: 'shared_master' })  // Specify schema
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  user_id: number;

  @Column({ allowNull: false })
  username: string;

  @Column({ allowNull: false })
  userIdNumber: string;

  @Column({ allowNull: false })
  userIdType: string;

  @Column({ allowNull: true })
  email: string;

  @Column({ defaultValue: new Date() })
  created_at: Date;
}
