import { UserType } from '@/types/user/user.type';

export class UserEntity {
  constructor(public readonly props: UserType) {
    this.props.createdAt = this.props.createdAt ?? new Date();
  }
}
