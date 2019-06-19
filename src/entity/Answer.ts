import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { Question } from "./Question";
import { User } from "./User";
import { Answer_Vote } from "./Answer_Vote";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(type => Question, question => question.answers)
    @JoinColumn({name: "question_id"})
    question: Question[]

    @ManyToOne(type => User, user => user.answers)
    @JoinColumn({name: "user_id"})
    user: User[]

    @OneToMany(type => Answer_Vote, answer_vote => answer_vote.answer)
    answer_votes: Answer_Vote[]
}