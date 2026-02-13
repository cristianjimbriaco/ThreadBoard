import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BoardsModule } from './boards/boards.module';
import { NodesModule } from './nodes/nodes.module';
import { ScenesModule } from './scene/scenes.module';
import { TheoriesModule } from './theories/theories.module';

@Module({
  imports: [PrismaModule, BoardsModule, NodesModule, ScenesModule, TheoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
