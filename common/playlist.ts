import { Music } from "./music";
import { Category } from "./category";

export class Playlist {
    id: number;
    name: string;
    categories: number[];
    musics: number[];
    image: string;
    link: string;
    owner: string;
    followers: string[];
    availability: string;

    constructor(playlist: Playlist) {
        this.id = playlist.id;
        this.name = playlist.name;
        this.categories = playlist.categories;
        this.musics = playlist.musics;
        this.image = playlist.image;
        this.link = playlist.link;
        this.owner = playlist.owner;
        this.followers = playlist.followers;
        this.availability = playlist.availability;
    }

    update(playlist: Playlist): void {
        if (playlist.name) {
            this.name = playlist.name;
        }
        if (playlist.categories) {
            this.categories = playlist.categories;
        }
        if (playlist.musics) {
            this.musics = playlist.musics;
        }
        if (playlist.image) {
            this.image = playlist.image;
        }
        if (playlist.link) {
            this.link = playlist.link;
        }
        if (playlist.owner) {
            this.owner = playlist.owner;
        }
        if (playlist.followers) {
            this.followers = playlist.followers;
        }
        if (playlist.availability) {
            this.availability = playlist.availability;
        }
    }
}