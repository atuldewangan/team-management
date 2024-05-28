// src/team-member/team-member.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TeamMemberService } from './team-member.service';

@Controller('team-members')
export class TeamMemberController {
    constructor(private readonly teamMemberService: TeamMemberService) { }

    @Get()
    async findAll() {
        return this.teamMemberService.findAll();
    }

    @Post()
    async create(@Body() createTeamMemberDto: any) {
        return this.teamMemberService.create(createTeamMemberDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTeamMemberDto: any) {
        return this.teamMemberService.update(id, updateTeamMemberDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.teamMemberService.delete(id);
    }
}
