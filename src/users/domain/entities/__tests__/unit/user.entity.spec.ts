import { UserType } from '@/types/user/user.type';
import { UserEntity } from '../../user.entity';
import { faker } from '@faker-js/faker';
import { userDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
describe('UserEntity unit tests', () => {
  let props: UserType;
  let sut: UserEntity;
  beforeEach(() => {
    props = userDataBuilder({});
    sut = new UserEntity(props);
  });
  it('Constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });
  it('Getters of name field', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toEqual('string');
  });
  it('Getters of email field', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toEqual('string');
  });
  it('Getters of password field', () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toEqual('string');
  });
  it('Getters of createdAt field', () => {
    expect(sut.props.createdAt).toBeDefined();
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });
});
