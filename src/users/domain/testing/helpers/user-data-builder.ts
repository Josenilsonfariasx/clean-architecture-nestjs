import { UserType } from '@/types/user/user.type';
import { faker } from '@faker-js/faker';

export type UserDataBuilderProps = {
  name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
};

export const userDataBuilder = (props: UserDataBuilderProps): UserType => {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    createdAt: props.createdAt ?? new Date(),
  };
};
