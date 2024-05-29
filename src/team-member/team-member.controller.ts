// src/team-member/team-member.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TeamMemberService } from './team-member.service';
import { CreateTeamMemberDto } from 'src/dto/create-team-member.dto';
import { UpdateTeamMemberDto } from 'src/dto/update-team-member.dto';

@Controller('team-members')
export class TeamMemberController {
    constructor(private readonly teamMemberService: TeamMemberService) { }

    @Get()
    async findAll() {
        return this.teamMemberService.findAll();
    }

    @Post()
    async create(@Body() createTeamMemberDto: CreateTeamMemberDto) {
        return this.teamMemberService.create(createTeamMemberDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTeamMemberDto: UpdateTeamMemberDto) {
        return this.teamMemberService.update(id, updateTeamMemberDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.teamMemberService.delete(id);
    }
}
