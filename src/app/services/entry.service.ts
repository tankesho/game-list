import { Constants } from 'src/app/util/constants';
import { Entry } from '../model/entry';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { WebStorageUtil } from '../util/web-storage-util';

@Injectable({
  providedIn: 'root',
})

export class EntryService {
  URL = 'http://localhost:3000/entries';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private httpClient: HttpClient) {}

  save(entry: Entry): Promise<Entry> {
    const p = new Promise<Entry>((resolve, reject) => {
      if (!entry.category) {
        reject('Por favor insira um valor válido no campo');
      }
      if (!entry.score) {
        reject('Por favor insira um valor de 0 a 10 no campo');
      }
      if (entry.hoursPlayed <= 0) {
        reject(
          'Por favor insira um valor maior que 0 no campo');
      }
      setTimeout(() => {
        lastValueFrom(this.httpClient.post<Entry>(this.URL, JSON.stringify(entry), this.httpOptions));
        resolve(entry);
      }, 3000);
    });
    return p;
  }

  update(entry: Entry) {
    const p = new Promise<Entry>((resolve, reject) => {
      if (!entry.category) {
        reject('Por favor insira um valor válido no campo');
      }
      if (!entry.score) {
        reject('Por favor insira um valor de 0 a 10 no campo');
      }
      if (entry.hoursPlayed <= 0) {
        reject(
          'Por favor insira um valor maior que 0 no campo');
      }
      setTimeout(() => {
        lastValueFrom(this.httpClient.put<Entry>(this.URL + "/" + entry.id, entry, this.httpOptions));
        resolve(entry);
      }, 3000);
    });
    return p;
  }

  delete(entry: Entry) {
    const p = new Promise<Entry>((resolve) => {
    setTimeout(() => {
      lastValueFrom(this.httpClient.delete<Entry>(this.URL + "/" + entry.id, this.httpOptions));
      resolve(entry);
    }, 3000);
    });

    return p;
  }

  isExist(userId: number, gameId: number): boolean {
    lastValueFrom(this.httpClient.get<Entry[]>(this.URL + '?userId_like=' + userId + '&gameId_like=' + gameId))
      .then((e: Entry[]) => {
        return e[0].userId === userId
      })
      .catch(() => {
        return false;
    })
    return false;
  }

  getEntryByUserAndGame(userId: number, gameId: number): Promise<Entry[]> {
    return lastValueFrom(this.httpClient.get<Entry[]>(this.URL + '?userId_like=' + userId + '&gameId_like=' + gameId))
  }
}
