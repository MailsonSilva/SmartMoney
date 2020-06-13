const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    color: {type: 'string', default: '#FFF'},
    isDefault: {type: 'bool', default: 'false'},
    isCredit: {type: 'bool', default: 'false'},
    isDebit: {type: 'bool', default: 'false'},
    order: {type: 'int', default: 0},
    entries: 'Entry[]',
  },
};
export default CategorySchema;
