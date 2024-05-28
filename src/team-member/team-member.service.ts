import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeamMember, TeamMemberDocument } from '../schemas/team-member.schema';

@Injectable()
export class TeamMemberService {
    constructor(@InjectModel(TeamMember.name) private teamMemberModel: Model<TeamMemberDocument>) { }

    async findAll(): Promise<TeamMember[]> {
        return this.teamMemberModel.find().exec();
    }

    async create(createTeamMemberDto: any): Promise<TeamMember> {
        const createdTeamMember = new this.teamMemberModel(createTeamMemberDto);
        return createdTeamMember.save();
    }

    async update(id: string, updateTeamMemberDto: any): Promise<TeamMember> {
        return this.teamMemberModel.findByIdAndUpdate(id, updateTeamMemberDto, { new: true }).exec();
    }

    async delete(id: string): Promise<any> {
        return this.teamMemberModel.findByIdAndDelete(id).exec();
    }
}
