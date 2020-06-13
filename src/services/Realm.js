import Realm from 'realm';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';
import {getDefaultCategories} from './Categories'

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 3,
  });
 // dropDB(realm);
  initDB(realm);
  return realm;
};

export const initDB = (realm) => {
  const categoriesLength = realm.objects('Category').length;
  console.log(`Realm :: initDB :: categoriesLength ${categoriesLength}`);

  if(categoriesLength === 0 ){
    const categories = getDefaultCategories();
    console.log(`Realm :: initDB :: getDefaultCategories ${JSON.stringify(categories)}`);
    
    try {
      realm.write(()=>{
        categories.forEach(category => {
          console.log(`Realm :: initDB :: category`);  

          realm.create('Category', category, true);          
        }); 
        console.log(`categoriesTot :: ${categoriesTot}`);
      });
      const categoriesTot = realm.objects('Category').length;
      
      
    } catch (error) {
      console.log(`Realm :: initDB :: error :category ${error}`); 
    }
  } else {
    console.log('initDB :: categories already existing... Skypping.');
  }
};

export const dropDB = realm => {
  console.log('Realm :: dropDB');
  realm.write(()=>{
    realm.deleteAll();
  });  
}