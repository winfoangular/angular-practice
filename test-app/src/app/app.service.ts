import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AppService {
    constructor (private httpClient: HttpClient) 
    {
        console.log("this is service class constructor")
    }

    submitData(bdy) : Observable<any>{

        return this.httpClient.post("http://localhost:3000/posts",bdy);
        
    }

    getData():Observable<any>{
        return this.httpClient.get("http://localhost:3000/posts")
    }

    deleteData(id) :Observable<any>{
        return this.httpClient.delete("http://localhost:3000/posts"+"/"+id);

    }
}