import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeamMemberDocument = TeamMember & Document;

@Schema()
export class TeamMember {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    phone: string;

    @Prop()
    email: string;

    @Prop()
    role: string;
}

export const TeamMemberSchema = SchemaFactory.createForClass(TeamMember);
