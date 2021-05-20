import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
  ManyToMany,
  DeleteDateColumn,
} from 'typeorm';
import { Printing } from '../models/printing.entity';
import { Type } from 'class-transformer';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  status: string;

  @ManyToOne((type) => Printing, (c) => c.medias)
  printing?: Printing;

  @Column()
  verificationCode: string;
}
