import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Question } from "./Question";
import { Answer } from "./Answer";
import { Question_Vote } from "./Question_Vote";
import { Answer_Vote } from "./Answer_Vote";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Question, question => question.user)
    questions: Question[]

    @OneToMany(type => Answer, answer => answer.user)
    answers: Answer[]

    @OneToMany(type => Question_Vote, question_vote => question_vote.user)
    question_votes: Question_Vote[]

    @OneToMany(type => Answer_Vote, answer_vote => answer_vote.user)
    answer_votes: Answer_Vote[]
}
