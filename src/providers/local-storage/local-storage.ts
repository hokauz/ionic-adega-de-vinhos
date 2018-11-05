import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * Classe responsável por gerenciar o local storage do browser
 *
 * @export
 * @class LocalStorageProvider
 */
@Injectable()
export class LocalStorageProvider {

  constructor(
    private store: Storage
  ) {
    console.log('Hello LocalStorageProvider Provider');
  }

  async create(key: string, obj: any): Promise<boolean> {
    return this.store.set(key, obj)
      .then( () => true )
      .catch(err => {
        console.log('Error =>', err);
        return false
      });
  } // end create

  async readAll<T>(listName:string): Promise<T[]> {
    return this.store.ready()
      .then( async (local: LocalForage) => {
        let list: T[] = [];

        return this.store.forEach( (elem: T, key: string, index: number) => {
            // console.log(elem);
            if ( key.indexOf( `${listName}.`) > -1 ) {
              list.push(elem);
            }
        })
        .then( () => list)
        .catch( err => {
          console.log('Error =>', err);
          return [];
        })
      });
  } // end readAll

  async read<T>(key: string): Promise<any> {
    return this.store.get(key)
      .then( (res: T) => res )
      .catch(err => {
        console.log('Error =>', err);
        return false
      });
  } // end read

  async remove(key: string): Promise<boolean> {
    return this.store.remove(key)
      .then( () => true )
      .catch(err => {
        console.log('Error =>', err);
        return false
      });
  } // end remove

  async clear(): Promise<boolean> {
    return this.store.clear()
      .then( () => true )
      .catch(err => {
        console.log('Error =>', err);
        return false
      });
  } // end clear

}
