import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveLikeCount1560755809452 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "like_count"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "like_count"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer" ADD "like_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD "like_count" int NOT NULL`);
    }

}
