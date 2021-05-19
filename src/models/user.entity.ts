import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column({ default: true })
    isActive: boolean;
}
