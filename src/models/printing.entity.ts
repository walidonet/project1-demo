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
import { Media } from '../models/media.entity';
import {Type} from "class-transformer";

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

    @OneToMany((type) => Media, (u) => u.printing)
    @Type((t) => Media)
    medias: Media[];

    @Column()
    verificationCode: string;


}
