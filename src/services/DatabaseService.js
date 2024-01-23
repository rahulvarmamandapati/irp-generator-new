import { db } from '../firebase';

class DatabaseService {
  collection;

  // Specify 'roles', or 'profiles' as collection name
  constructor(collectionName) {
    this.collection = db.collection(collectionName);
  }

  // returns list of records as an array of javascript objects
  /*
  getAll = async () => {
    const snapshot = await this.collection.get();
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  };
  */

  getAll = async () => {
    const snapshot = await this.collection.get();
    return snapshot.docs.map((doc) => doc.data());
  };

  // returns a single document in object format
  /*
  getOne = async ({ queryKey }) => {
    const { id } = queryKey[1];
    if (!id) return; // entity form is in create mode
    const snapshot = await this.collection.doc(id).get();
    return snapshot.data();
  };
  */

/*
CRUD

C-
Add Profile data

R-
Read all roles names (select role)
Read single role by ID (after a role is selected)
Read profile data from query param id

U-
Update profile data by query param id

D-
???
*/
}

// Create services for each entity type
export const RoleService = new DatabaseService('roles');
