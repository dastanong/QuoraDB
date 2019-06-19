import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Question } from "./Question";
import { User } from "./User";

@Entity()
export class Question_Vote {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vote_value: number;

    @ManyToOne(type => Question, question => question.question_votes)
    @JoinColumn({name: "question_id"})
    question: Question[]

    @ManyToOne(type => User, user => user.question_votes)
    @JoinColumn({name: "user_id"})
    user: User[]
}