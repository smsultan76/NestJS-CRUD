import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hello SM!</h1>';
  }
  about(): string{
    return '<h2> This is the about page of NestJS Application. </h2>';
  }
}

