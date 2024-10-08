import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { config } from "@/config";

import { UtilityModule } from "@/utility";

import { CommentModule } from "@/comment";
import { PostModule } from "@/post";
import { RoleModule } from "@/role";
import { UserModule } from "@/user";
import { AuthModule } from "@/auth";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),

    UtilityModule,

    CommentModule,
    PostModule,
    RoleModule,
    UserModule,

    AuthModule,
  ],
})
export class AppModule {}
