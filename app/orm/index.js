import { ORM } from 'redux-orm';
import { HomePage } from './models';

const orm = new ORM();
orm.register(HomePage);
export default orm;
