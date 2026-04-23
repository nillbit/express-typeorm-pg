import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, Collection, CreateDateColumn } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column({unique:true})
  email: string;
  @Column()
  password:string
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at: Date;
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;
}