import { Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    OneToMany,
    ManyToOne,
    ManyToMany,
    DeleteDateColumn, } from 'typeorm';
import { User } from '../models/user.entity';

@Entity()
export class Printing {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    status: string;

    @ManyToOne((type) => User, (c) => c.users)
    user?: User;

    @Column()
    verificationCode: string;


}
