import Realm from 'realm';
import TransactionSchema from './Transaction';

// Define the Realm schema
const schema = [TransactionSchema];

// Open a Realm with the defined schema
const realm = new Realm({ schema });

export default realm;
