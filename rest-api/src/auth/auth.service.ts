import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

type UserDetails = {
  email: string;
  firstName: string;
  lastName: string;
};

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async validateUser(details: UserDetails) {
    const user = await this.prisma.user.findFirst({
      where: { email: details.email },
    });

    if (user) return user;
    console.log('User not found. Creating new user.');

    const newUser = await this.prisma.user.create({ data: details });
    return newUser;
  }

  async findUser(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }
}
