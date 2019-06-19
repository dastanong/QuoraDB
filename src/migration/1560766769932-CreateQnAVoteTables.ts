import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateQnAVoteTables1560766769932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "question__vote" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL, "question_id" int, "user_id" int, CONSTRAINT "PK_61b61534c0dfbc264f0dfe4d10f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answer__vote" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL, "answer_id" int, "user_id" int, CONSTRAINT "PK_14870848cec0430b84db48900b3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "question__vote" ADD CONSTRAINT "FK_4b3a33020cc4f63afb140d025f7" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question__vote" ADD CONSTRAINT "FK_36027384d60ee5dcc48eddcecc3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer__vote" ADD CONSTRAINT "FK_894846d058e9b52362993853e48" FOREIGN KEY ("answer_id") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer__vote" ADD CONSTRAINT "FK_1f1dfbaeb95257d3c171c34849e" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer__vote" DROP CONSTRAINT "FK_1f1dfbaeb95257d3c171c34849e"`);
        await queryRunner.query(`ALTER TABLE "answer__vote" DROP CONSTRAINT "FK_894846d058e9b52362993853e48"`);
        await queryRunner.query(`ALTER TABLE "question__vote" DROP CONSTRAINT "FK_36027384d60ee5dcc48eddcecc3"`);
        await queryRunner.query(`ALTER TABLE "question__vote" DROP CONSTRAINT "FK_4b3a33020cc4f63afb140d025f7"`);
        await queryRunner.query(`DROP TABLE "answer__vote"`);
        await queryRunner.query(`DROP TABLE "question__vote"`);
    }

}
