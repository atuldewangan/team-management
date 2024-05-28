// src/team-member/team-member.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamMemberService } from './team-member.service';
import { TeamMemberController } from './team-member.controller';
import { TeamMember, TeamMemberSchema } from '../schemas/team-member.schema';

//mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
@Module({
    imports: [MongooseModule.forFeature([{ name: TeamMember.name, schema: TeamMemberSchema }])],
    providers: [TeamMemberService],
    controllers: [TeamMemberController],
})
export class TeamMemberModule { }
