import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MovieRepository } from './movie.repository';
import { FilesModule } from '../files/files.module';
import { ActorsModule } from '../actors/actors.module';
import { DirectorsModule } from '../directors/directors.module';
import { UserModule } from '../users/user.module';

@Module({
  providers: [MovieService],
  imports: [
    TypeOrmModule.forFeature([MovieRepository]),
    FilesModule,
    ActorsModule,
    DirectorsModule,
    UserModule,
  ],
  controllers: [MovieController],
  exports: [MovieService],
})
export class MovieModule {}
