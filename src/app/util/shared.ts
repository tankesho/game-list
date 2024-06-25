import { Game } from '../model/game';
import { User } from '../model/user';
import { Constants } from './constants';

export class Shared {
  constructor() {}


  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.USERNAME_KEY) != null) {
      return;
    }
    let user = new User(0, Constants.USERNAME_KEY, 'qwerty', true);

    let g1 = new Game(0, "Persona 4 Golden", "ATLUS", "SEGA", "09/12/2008", "JRPG", "assets/resources/images/cover/persona-4-golden.jpg")
    let g2 = new Game(1, "Pizza Tower", "Tour De Pizza", "Tour De Pizza", "26/01/2023", "Plataforma", "assets/resources/images/cover/pizza-tower.jpg")
    let g3 = new Game(2, "Phoenix Wright: Ace Attorney", "Capcom", "Capcom", "11/10/2001", "Aventura", "assets/resources/images/cover/phoenix-wright-ace-attorney.jpg")
    let g4 = new Game(3, "The Legend of Zelda: Tears of the Kingdom", "Nintendo", "Nintendo", "12/05/2023", "Ação/Aventura", "assets/resources/images/cover/the-legend-of-zelda-tears-of-the-kingdom.jpg")
    let g5 = new Game(4, "Tales of Arise", "Bandai Namco", "Bandai Namco", "09/09/2021", "JRPG", "assets/resources/images/cover/tales-of-arise.jpg")
    let g6 = new Game(5, "Devil May Cry 5", "CAPCOM", "CAPCOM", "07/03/2019", "Ação", "assets/resources/images/cover/devil-may-cry-5.jpg")
    let g7 = new Game(6, "DRAGON QUEST XI S: Echoes of an Elusive Age", "Square Enix", "Square Enix", "04/12/2020", "JRPG", "assets/resources/images/cover/dragon-quest-xi.jpg")
    let g8 = new Game(7, "ELDEN RING", "FromSoftware", "Bandai Namco", "24/02/2022", "RPG", "assets/resources/images/cover/elden-ring.jpg")
    let g9 = new Game(8, "Hi-Fi RUSH", "Tango Gameworks", "Tango Gameworks", "25/01/2023", "Ação", "assets/resources/images/cover/hi-fi-rush.jpg")
    let g10 = new Game(9, "Animal Crossing: New Horizons", "Nintendo", "Nintendo", "20/03/2020", "Simulação", "assets/resources/images/cover/animal-crossing-new-horizons.jpg")
    let g11 = new Game(10, "Resident Evil 4", "CAPCOM", "CAPCOM", "23/03/2023", "Survival Horror", "assets/resources/images/cover/resident-evil-4.jpg")
    let g12 = new Game(11, "Yakuza 0", "Ryu Ga Gotoku Studio", "SEGA", "01/10/2018", "Ação", "assets/resources/images/cover/yakuza-0.jpg")
    let g13 = new Game(12, "Danganronpa V3", "Spike Chunsoft", "Spike Chunsoft", "26/09/2017", "Visual Novel", "assets/resources/images/cover/danganronpa-v3.jpg")
    let g14 = new Game(13, "Splatoon 3", "Nintendo", "Nintendo", "99/09/2022", "Tiro em Terceira Pessoa", "assets/resources/images/cover/splatoon-3.jpg")
    let g15 = new Game(14, "Shin Megami Tensei V", "ATLUS", "SEGA", "11/11/2021", "JRPG", "assets/resources/images/cover/shin-megami-tensei-v.jpg")

    let games = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15]

    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(user));
    localStorage.setItem(Constants.GAMES_KEY, JSON.stringify(games));
    localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.LOGGED_IN_KEY, JSON.stringify(false));
  }
}
