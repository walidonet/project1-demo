import { Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    OneToMany,
    ManyToOne,
    ManyToMany,
    DeleteDateColumn, } from 'typeorm';
import { Printing } from '../models/printing.entity';
import { Type } from 'class-transformer';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    phone: string;

    @Column()
    mail: string;

    @Column()
    adress: string;

    @Column()
    verificationCode: string;

    @OneToMany((type) => Printing, (u) => u.user)
    @Type((t) => User)
    users: Printing[];

    @Column({ default: false })
    isActive: boolean;
}
