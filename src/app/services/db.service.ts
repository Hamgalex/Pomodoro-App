import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Registro } from './registro';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  registroList = new BehaviorSubject([]);
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'registros.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
      });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }
  fecthRegistros(): Observable<Registro[]> {
    return this.registroList.asObservable();
  }


    getFakeData() {
      this.httpClient.get(
        'assets/dump.sql',
        {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getRegistros();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }

  // Get list
  async getRegistros(){
    const res = await this.storage.executeSql('SELECT * FROM registro', []);
    const items: Registro[] = [];
    if (res.rows.length > 0) {
      for (let i = 0; i < res.rows.length; i++) {
        items.push({
          id: res.rows.item(i).id,
          fecha: res.rows.item(i).fecha,
          numciclos: res.rows.item(i).numciclos,
          minsporciclo: res.rows.item(i).minsporciclo
        });
      }
    }
    this.registroList.next(items);
  }

  // Add
  async addSong(numciclos: string, minsporciclo: string) {
    const query='INSERT INTO registros (fecha, numciclos,minsporciclo) VALUES (date(\'now\'),'+numciclos+','+minsporciclo+')';
    const res = await this.storage.executeSql(query);
    this.getRegistros();
  }
}
