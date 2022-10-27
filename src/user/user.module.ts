import { AbilityModule } from './../ability/ability.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [AbilityModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
