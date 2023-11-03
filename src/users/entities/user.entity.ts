import { BaseEntity } from 'src/common/base-entity';
import { Column, Entity, Unique } from 'typeorm';
import { IsString, Length, Matches } from 'class-validator';

@Entity()
@Unique(['nickname'])
export class User extends BaseEntity {
  @Column()
  @IsString()
  @Length(1, 10)
  @Matches(/^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/)
  nickname: string;

  @Column()
  @IsString()
  email: string;
}
