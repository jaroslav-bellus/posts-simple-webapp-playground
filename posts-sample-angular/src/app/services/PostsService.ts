import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { Post } from "../model/Post";

import 'rxjs/add/operator/toPromise';

const MULTIPLY_DATA_FACTOR = 1;

@Injectable()
export class PostsService {
    constructor(private http: Http) { }
    
    getPosts() {
        console.log('getPosts');

        return this.http
            .get('https://jsonplaceholder.typicode.com/posts')
            .toPromise()
            .then((response) => {
                let data = response.json() as Post[];
                let constructedData: Post[] = [];

                Array.apply(null, {length: MULTIPLY_DATA_FACTOR})
                    .forEach((_:any, index: number) => {
                        constructedData = [
                            ...constructedData, 
                            ...data.map(x => { 
                                return {...x, id: `${index}_${x.id}`} as Post;
                            })
                        ];
                    });
                return constructedData as Post[];
            })
            .catch(this.handleError);
    }    

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
