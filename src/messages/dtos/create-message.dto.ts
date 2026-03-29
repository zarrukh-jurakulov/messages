import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString({message: "Matn kiritish kerak"})
  content: string;
}
