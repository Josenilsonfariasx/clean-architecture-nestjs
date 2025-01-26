import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubEntityProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubEntityProps> {}

describe('Entity unit tests', () => {
  it('should set props and id', () => {
    const props = { prop1: 'value1', prop2: 1 };
    const entity = new StubEntity(props);
    expect(entity.props).toStrictEqual(props);
    expect(entity.id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });
  it('should accept a valid uuid', () => {
    const validUuid = 'b6055c64-f1b5-4baf-be43-432155921717';
    const entity = new StubEntity({ prop1: 'value1', prop2: 1 }, validUuid);
    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity.id).toBe(validUuid);
  });
  it('should convert a entity to a JavaScript Object', () => {
    const props = { prop1: 'value1', prop2: 1 };
    const id = 'b6055c64-f1b5-4baf-be43-432155921717';
    const entity = new StubEntity(props, id);
    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
