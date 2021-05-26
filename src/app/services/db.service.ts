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
  registroList = new BehaviorSubject([]); // lista de la BD.
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
          this.getData(); // te manda a obtener los datos.
      });
    });
  }

  dbState() {
    return this.isDbReady.asObservable(); // observable que indica si está disponible.
  }

  fecthRegistros(): Observable<Registro[]> {
    return this.registroList.asObservable(); // observable que emite registro list
  }

  getData() {
    this.httpClient.get(
      'assets/dump.sql', // obtiene los datos del dump.sql
      {responseType: 'text'}
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data) // ejecuta el dump y lo guarda en el DBO.
        .then(_ => {
          this.getRegistros(); // obtiene los registros.
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  // Get list
  async getRegistros(){
    // te trae los últimos 7 registros.
    const res = await this.storage.executeSql('SELECT * FROM registro ORDER BY id DESC LIMIT 7', []);
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
  async addRegistro(numciclos: number, minsporciclo: number) {
    const data = [numciclos, minsporciclo];
    const query = 'INSERT INTO registro (fecha, numciclos, minsporciclo) VALUES (DATETIME(\'now\', \'localtime\'), ?, ?)';
    // inserta los ciclos y los minutos por ciclo en la fecha de hoy (local).
    const res = await this.storage.executeSql(query, data); // lo ejecuta
    await this.getRegistros(); // para que se actualicen las gráficas.
    return res;
  }
}
