import Realm from 'realm';

const TransactionSchema = {
    name: 'Transaction',
    primaryKey: '_id',
    properties: {
        _id: 'string',
        amount: 'int',
        category: 'string',
        date: 'date',
        type: 'string',
    },
};

Realm.addModel(TransactionSchema);

export default TransactionSchema;
