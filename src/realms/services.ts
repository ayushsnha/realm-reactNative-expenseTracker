import realm from './index';

export function createTransaction(amount:string) {
    realm.write(() => {
        realm.create('Transaction', {
            amount,
            _id: Date.now().toString(),
            category: 'Food',
            date: Date.now(),
            type: 'debit',
        });
    });
}

export function getAllDogs() {
    return realm.objects('Transaction');
}

export function deleteDog(transaction: any) {
    realm.write(() => {
        realm.delete(transaction);
    });
}
