import { Entity } from '@/shared/domain/entities/entity';
import { UserType } from '@/types/user/user.type';

export class UserEntity extends Entity<UserType> {
  constructor(
    public readonly props: UserType,
    id?: string,
  ) {
    super(props, id);
    this.props.createdAt = this.props.createdAt ?? new Date();
  }
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}
